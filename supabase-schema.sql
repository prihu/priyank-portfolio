-- Supabase SQL Schema for Portfolio
-- Run this in Supabase SQL Editor to create the tables

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  quote TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  is_published BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Blog visibility table (to control which Substack posts appear)
CREATE TABLE IF NOT EXISTS blog_visibility (
  id SERIAL PRIMARY KEY,
  substack_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  is_visible BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security (RLS) for security
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_visibility ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read published testimonials" ON testimonials
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can read blog visibility" ON blog_visibility
  FOR SELECT USING (true);

-- Create policies for authenticated write access (for admin)
-- Note: You'll need to set up Supabase Auth for admin access
CREATE POLICY "Authenticated users can manage testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage blog visibility" ON blog_visibility
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tables
CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_visibility_updated_at
  BEFORE UPDATE ON blog_visibility
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add some sample testimonials (optional - remove if not needed)
-- INSERT INTO testimonials (quote, author, role, company) VALUES
--   ('Priyank is an exceptional product manager who consistently delivers results.', 'John Doe', 'VP Engineering', 'Tech Corp'),
--   ('His ability to turn complex problems into elegant solutions is remarkable.', 'Jane Smith', 'CEO', 'Startup Inc');
