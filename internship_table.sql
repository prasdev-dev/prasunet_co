-- Create internship_applications table in Supabase
CREATE TABLE IF NOT EXISTS internship_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  course TEXT NOT NULL,
  year TEXT NOT NULL,
  domain TEXT NOT NULL,
  skills TEXT NOT NULL,
  experience TEXT,
  why_interested TEXT NOT NULL,
  availability TEXT NOT NULL,
  resume_link TEXT NOT NULL,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_internship_applications_email ON internship_applications(email);

-- Create an index on domain for filtering
CREATE INDEX IF NOT EXISTS idx_internship_applications_domain ON internship_applications(domain);

-- Enable Row Level Security (RLS)
ALTER TABLE internship_applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the application form)
CREATE POLICY "Allow public to insert internship applications" ON internship_applications
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to view their own applications
CREATE POLICY "Allow users to view own applications" ON internship_applications
  FOR SELECT USING (auth.jwt() ->> 'email' = email);