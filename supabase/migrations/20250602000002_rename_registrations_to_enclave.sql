-- Run only if you still have the old table name `registrations`

alter table if exists public.registrations rename to enclave;

alter index if exists registrations_email_idx rename to enclave_email_idx;
alter index if exists registrations_created_at_idx rename to enclave_created_at_idx;
