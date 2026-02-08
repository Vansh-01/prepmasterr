
-- Create job_postings table
CREATE TABLE public.job_postings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.company_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type TEXT NOT NULL DEFAULT 'full-time',
  experience_level TEXT NOT NULL DEFAULT 'entry',
  salary_min INTEGER,
  salary_max INTEGER,
  skills TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

-- Companies can view their own job postings
CREATE POLICY "Companies can view their own job postings"
  ON public.job_postings FOR SELECT
  USING (
    company_id IN (
      SELECT id FROM public.company_profiles WHERE user_id = auth.uid()
    )
  );

-- Companies can insert their own job postings
CREATE POLICY "Companies can insert their own job postings"
  ON public.job_postings FOR INSERT
  WITH CHECK (
    company_id IN (
      SELECT id FROM public.company_profiles WHERE user_id = auth.uid()
    )
  );

-- Companies can update their own job postings
CREATE POLICY "Companies can update their own job postings"
  ON public.job_postings FOR UPDATE
  USING (
    company_id IN (
      SELECT id FROM public.company_profiles WHERE user_id = auth.uid()
    )
  );

-- Companies can delete their own job postings
CREATE POLICY "Companies can delete their own job postings"
  ON public.job_postings FOR DELETE
  USING (
    company_id IN (
      SELECT id FROM public.company_profiles WHERE user_id = auth.uid()
    )
  );

-- Trigger for updated_at
CREATE TRIGGER update_job_postings_updated_at
  BEFORE UPDATE ON public.job_postings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
