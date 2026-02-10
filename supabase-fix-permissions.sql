-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/qfhtvlbrvbqreqclkpsn/sql

-- 1. Create a secure function to update blog visibility (bypasses RLS)
CREATE OR REPLACE FUNCTION set_blog_visibility(
  p_substack_id TEXT, 
  p_title TEXT, 
  p_is_visible BOOLEAN
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- This runs with admin privileges
AS $$
DECLARE
  v_result JSONB;
BEGIN
  INSERT INTO blog_visibility (substack_id, title, is_visible, updated_at)
  VALUES (p_substack_id, p_title, p_is_visible, NOW())
  ON CONFLICT (substack_id)
  DO UPDATE SET 
    is_visible = EXCLUDED.is_visible,
    title = EXCLUDED.title,
    updated_at = NOW()
  RETURNING to_jsonb(blog_visibility.*) INTO v_result;
  
  RETURN v_result;
END;
$$;

-- 2. Grant permission to authenticated users (even anon if necessary for this specific app logic, 
--    but ideally we rely on the implementation being protected by Admin Cookie check in the API)
GRANT EXECUTE ON FUNCTION set_blog_visibility TO anon, authenticated, service_role;
