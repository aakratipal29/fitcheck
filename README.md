# FitCheck — Discover. Match. Wear.

FitCheck is a full-stack fashion-discovery demo with a React/Vite web client and an Express/Supabase API. It supports custom bcrypt/JWT authentication, catalogue search and filters, deterministic outfit suggestions, saved outfits, wishlists, deals, notifications, and admin-only product/image/deal management.

## Quick start

1. Create a Supabase project, then run [`backendfit/database/schema.sql`](backendfit/database/schema.sql) in its SQL Editor.
2. In Storage, create a **private** `product-images` bucket. The backend service role uploads images; do not put the service-role key in the browser.
3. Copy `backendfit/.env.example` to `backendfit/.env`, set the Supabase URL/service-role key and a strong JWT secret. Copy `frontendfit/.env.example` to `frontendfit/.env` if the API is not on the default address.
4. Run `npm run install:all`, then `npm --prefix backendfit run seed`, `npm --prefix backendfit run dev`, and `npm --prefix frontendfit run dev`.
5. To make an admin after registering, update that user in Supabase: `update users set role = 'admin' where email = 'you@example.com';`.

## Architecture

- `frontendfit/`: React, React Router, Axios, responsive CSS.
- `backendfit/`: Express MVC modules: routes → controllers → services/models.
- `backendfit/database/schema.sql`: reproducible PostgreSQL schema, indexes, foreign keys and restrictive RLS setup.

The API uses `/api/auth`, `/api/users`, `/api/products`, `/api/categories`, `/api/outfits`, `/api/wishlist`, `/api/deals`, `/api/notifications`, and `/api/upload`.

## Security notes

Passwords are bcrypt hashes only. JWTs contain only id, email, and role. Rate limits protect auth endpoints, Helmet and scoped CORS are enabled, and admin routes require a verified `admin` role. All application tables enable RLS with no public policies. This is intentional: Supabase does not understand this app's custom JWTs. The trusted Express server uses the service-role key (which bypasses RLS), so authorization in Express is required and implemented. Never expose the service-role key or database credentials to `frontendfit`.

## Images and data

Admin upload validates MIME types (JPEG/PNG/WEBP) and a 5 MB maximum, uploads to Supabase Storage, and saves the returned URL in the product. Products can also contain `additional_images` JSON for detail-page thumbnails. The seed creates 40 demo products with replaceable `placehold.co` visual placeholders—these are clearly demo assets, not retailer imagery or prices.

## Recommendation logic

Recommendations are deterministic rather than random. They first select complementary categories, then rank by compatible colour groups, matching style, occasion, and season. The UI uses friendly match labels instead of presenting the internal rank as scientific fact.

## Troubleshooting

- **Database errors / empty catalogue:** confirm `.env`, run the SQL schema, then run the seed.
- **Image upload fails:** create `product-images`, use the backend service-role key, and ensure the signed-in account is admin.
- **CORS error:** set `CLIENT_URL` to the actual Vite origin and restart the API.
- **401:** sign in again; tokens expire according to `JWT_EXPIRES_IN`.
