-- Paste this entire file in Supabase → SQL Editor → Run
-- Dashboard: https://supabase.com/dashboard/project/cfzuypbljirmibmxpabi/sql/new

create table if not exists public.enclave (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  model text not null,
  collection text not null default '',
  source text not null default 'enclavemilton.com',
  form_name text not null default 'Enclave Landing Page',
  created_at timestamptz not null default now()
);

comment on table public.enclave is 'Lead registrations from The Enclave Milton website forms';

create index if not exists enclave_email_idx on public.enclave (email);
create index if not exists enclave_created_at_idx on public.enclave (created_at desc);

alter table public.enclave enable row level security;

-- Refresh Table Editor (left sidebar) — you should see: public.enclave
