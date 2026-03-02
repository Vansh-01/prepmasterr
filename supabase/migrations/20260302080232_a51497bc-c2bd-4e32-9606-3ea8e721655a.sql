
-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.job_postings(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(job_id, user_id)
);

-- Enable RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Students can view their own applications
CREATE POLICY "Users can view their own applications"
ON public.job_applications FOR SELECT
USING (auth.uid() = user_id);

-- Students can apply (insert)
CREATE POLICY "Users can insert their own applications"
ON public.job_applications FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Companies can view applications for their job postings
CREATE POLICY "Companies can view applications for their jobs"
ON public.job_applications FOR SELECT
USING (job_id IN (
  SELECT jp.id FROM public.job_postings jp
  JOIN public.company_profiles cp ON jp.company_id = cp.id
  WHERE cp.user_id = auth.uid()
));

-- Companies can update application status
CREATE POLICY "Companies can update application status"
ON public.job_applications FOR UPDATE
USING (job_id IN (
  SELECT jp.id FROM public.job_postings jp
  JOIN public.company_profiles cp ON jp.company_id = cp.id
  WHERE cp.user_id = auth.uid()
));

-- Trigger for updated_at
CREATE TRIGGER update_job_applications_updated_at
BEFORE UPDATE ON public.job_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
