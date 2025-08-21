import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xtemgovortjwfpbwapwu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0ZW1nb3ZvcnRqd2ZwYndhcHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NDY2NjksImV4cCI6MjA3MTMyMjY2OX0.hSdK7Bpy_S2dyNvoDyi21dn72KMBjmyuXR8MDg2otDs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)