import 'dotenv/config';
const required = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'JWT_SECRET'];
export const env = { port: process.env.PORT || 5000, supabaseUrl: process.env.SUPABASE_URL, supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY, jwtSecret: process.env.JWT_SECRET, jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d', clientUrl: process.env.CLIENT_URL || 'http://localhost:5173' };
export const missingEnv = required.filter((key) => !process.env[key]);
