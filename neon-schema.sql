-- Neon PostgreSQL Schema for Portfolio
-- Run this in the Neon SQL Editor (https://console.neon.tech)

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
