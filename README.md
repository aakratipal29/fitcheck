# FitCheck API

Copy `.env.example` to `.env`; never commit it. Run `npm install`, apply `database/schema.sql` in Supabase, then use `npm run seed`, `npm run dev`, or `npm start`. The service-role key belongs only here. RLS is deliberately restrictive because custom Express JWTs are not Supabase Auth credentials; all trusted backend requests must enforce authorization before querying.
