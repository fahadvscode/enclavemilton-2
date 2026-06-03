-- Run in Supabase Dashboard → SQL Editor, or via Supabase CLI: supabase db push

create table if not exists public.registrations (
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

comment on table public.registrations is 'Lead registrations from The Enclave Milton website forms';

create index if not exists registrations_email_idx on public.registrations (email);
create index if not exists registrations_created_at_idx on public.registrations (created_at desc);

alter table public.registrations enable row level security;

-- No public policies: inserts go through the Next.js API using the service role key only.
