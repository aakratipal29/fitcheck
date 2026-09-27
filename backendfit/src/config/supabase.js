import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';
export const supabase = createClient(env.supabaseUrl || 'https://placeholder.supabase.co', env.supabaseKey || 'placeholder');
