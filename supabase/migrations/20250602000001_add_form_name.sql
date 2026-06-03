-- Run if you already created `registrations` without form_name

alter table public.registrations
  add column if not exists form_name text not null default 'Enclave Landing Page';

comment on column public.registrations.form_name is 'Registration form identifier (e.g. Enclave Landing Page)';
