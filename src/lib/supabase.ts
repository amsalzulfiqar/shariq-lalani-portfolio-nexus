
import { createClient } from '@supabase/supabase-js'

// Get the environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Fallback values for development
const fallbackUrl = 'https://your-project-id.supabase.co'
const fallbackKey = 'your-anon-key'

// Use environment variables if available, otherwise use fallbacks
const url = supabaseUrl || fallbackUrl
const key = supabaseAnonKey || fallbackKey

// Create and export the Supabase client
export const supabase = createClient(url, key)

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return (
    supabaseUrl !== undefined && 
    supabaseUrl !== '' && 
    supabaseAnonKey !== undefined && 
    supabaseAnonKey !== ''
  )
}
