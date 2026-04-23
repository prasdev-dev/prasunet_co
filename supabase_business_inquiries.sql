-- Create business_inquiries table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS business_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_business_inquiries_email ON business_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_business_inquiries_status ON business_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_business_inquiries_created_at ON business_inquiries(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE business_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for the contact form)
CREATE POLICY "Allow public inserts" ON business_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all records
CREATE POLICY "Allow authenticated reads" ON business_inquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update records
CREATE POLICY "Allow authenticated updates" ON business_inquiries
  FOR UPDATE
  USING (auth.role() = 'authenticated');
