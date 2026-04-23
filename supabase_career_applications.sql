-- Create career_applications table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  job_title TEXT NOT NULL,
  experience INTEGER NOT NULL,
  resume_url TEXT NOT NULL,
  cover_letter TEXT,
  linkedin TEXT,
  github TEXT,
  portfolio TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_career_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_status ON career_applications(status);
CREATE INDEX IF NOT EXISTS idx_career_job_title ON career_applications(job_title);
CREATE INDEX IF NOT EXISTS idx_career_created_at ON career_applications(created_at);

-- Disable RLS for public career application submissions
ALTER TABLE career_applications DISABLE ROW LEVEL SECURITY;
