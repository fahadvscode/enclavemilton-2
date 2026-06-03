-- Run if you already created `enclave` without form_name

alter table public.enclave
  add column if not exists form_name text not null default 'Enclave Landing Page';

comment on column public.enclave.form_name is 'Registration form identifier (e.g. Enclave Landing Page)';
