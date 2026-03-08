
-- Create notifications table
CREATE TABLE public.notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'info',
  is_read BOOLEAN NOT NULL DEFAULT false,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Users can view their own notifications
CREATE POLICY "Users can view their own notifications"
  ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own notifications (mark as read)
CREATE POLICY "Users can update their own notifications"
  ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);

-- System can insert notifications (via trigger with security definer)
CREATE POLICY "System can insert notifications"
  ON public.notifications FOR INSERT
  WITH CHECK (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;

-- Trigger function: notify company when a new application is submitted
CREATE OR REPLACE FUNCTION public.notify_company_new_application()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  company_user_id UUID;
  job_title TEXT;
  applicant_name TEXT;
BEGIN
  -- Get the company user_id and job title
  SELECT cp.user_id, jp.title INTO company_user_id, job_title
  FROM job_postings jp
  JOIN company_profiles cp ON jp.company_id = cp.id
  WHERE jp.id = NEW.job_id;

  -- Get applicant name
  SELECT COALESCE(p.username, 'A student') INTO applicant_name
  FROM profiles p WHERE p.id = NEW.user_id;

  -- Insert notification for the company
  INSERT INTO notifications (user_id, title, message, type, link)
  VALUES (
    company_user_id,
    'New Application',
    applicant_name || ' applied for "' || job_title || '"',
    'application',
    '/job-applicants/' || NEW.job_id::text
  );

  RETURN NEW;
END;
$$;

-- Trigger function: notify student when their application status changes
CREATE OR REPLACE FUNCTION public.notify_student_status_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  job_title TEXT;
BEGIN
  -- Only trigger on status change
  IF OLD.status = NEW.status THEN
    RETURN NEW;
  END IF;

  -- Get job title
  SELECT jp.title INTO job_title
  FROM job_postings jp WHERE jp.id = NEW.job_id;

  -- Insert notification for the student
  INSERT INTO notifications (user_id, title, message, type, link)
  VALUES (
    NEW.user_id,
    'Application Update',
    'Your application for "' || job_title || '" has been ' || NEW.status,
    'status_change',
    '/my-applications'
  );

  RETURN NEW;
END;
$$;

-- Create triggers
CREATE TRIGGER on_new_application
  AFTER INSERT ON public.job_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_company_new_application();

CREATE TRIGGER on_application_status_change
  AFTER UPDATE ON public.job_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_student_status_change();
