import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://vxyzkqjtjmuklbvhgbnw.supabase.co", // Supabase API URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDUwMjc2NywiZXhwIjoxOTUwMDc4NzY3fQ.Wxy3gf_xcJaYeAi6FEFd52QmatAmpp9p_mjU0zS_83Q" // Supabase API Key
)

export default (_, inject) => {
  inject('supabase', supabase)
}
