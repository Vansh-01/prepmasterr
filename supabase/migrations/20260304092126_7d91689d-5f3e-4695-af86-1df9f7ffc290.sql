
-- Allow companies to view profiles of users who applied to their jobs
CREATE POLICY "Companies can view applicant profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  id IN (
    SELECT ja.user_id
    FROM job_applications ja
    JOIN job_postings jp ON ja.job_id = jp.id
    JOIN company_profiles cp ON jp.company_id = cp.id
    WHERE cp.user_id = auth.uid()
  )
);

-- Allow companies to read resume files of their applicants
CREATE POLICY "Companies can view applicant resumes"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'resumes'
  AND (storage.foldername(name))[1] IN (
    SELECT ja.user_id::text
    FROM job_applications ja
    JOIN job_postings jp ON ja.job_id = jp.id
    JOIN company_profiles cp ON jp.company_id = cp.id
    WHERE cp.user_id = auth.uid()
  )
);
