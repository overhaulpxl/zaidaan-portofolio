-- Dedicated table for community vouches/reviews (replaces JSONB storage in
-- site_settings.middleman_vouches). Paste into the Supabase SQL Editor and run.
--
-- The app auto-detects the table: while it does not exist, writes/reads fall
-- back to site_settings JSONB, so nothing breaks either way. No data migration
-- is needed because the JSONB store was empty at the time this was written.

create table if not exists public.vouches (
  id uuid primary key,
  name text not null,
  handle text,
  role text not null default 'Buyer',
  rating integer not null check (rating between 1 and 5),
  transaction_nominal text,
  comment text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists vouches_status_created_at_idx
  on public.vouches (status, created_at desc);

-- Public read access is limited to approved vouches.
-- Inserts/updates/deletes go through the service role (server actions),
-- which bypasses RLS.
alter table public.vouches enable row level security;

create policy "approved vouches are readable by everyone"
  on public.vouches
  for select
  using (status = 'approved');

-- Remove the JSONB vouch store once migrated (optional):
-- delete from public.site_settings where key = 'middleman_vouches';
