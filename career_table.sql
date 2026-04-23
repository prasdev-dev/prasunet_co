-- Create career_applications table in Supabase
CREATE TABLE IF NOT EXISTS career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  job_title TEXT NOT NULL,
  experience INTEGER NOT NULL,
  resume_url TEXT NOT NULL,
  cover_letter TEXT,
  linkedin TEXT,
  github TEXT,
  portfolio TEXT,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_career_applications_email ON career_applications(email);

-- Create an index on job_title for filtering
CREATE INDEX IF NOT EXISTS idx_career_applications_job_title ON career_applications(job_title);

-- Enable Row Level Security (RLS)
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the application form)
CREATE POLICY "Allow public to insert career applications" ON career_applications
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to view their own applications
CREATE POLICY "Allow users to view own applications" ON career_applications
  FOR SELECT USING (auth.jwt() ->> 'email' = email);
