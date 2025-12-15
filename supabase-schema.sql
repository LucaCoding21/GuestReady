-- Supabase Schema for Referral System
-- Run this in your Supabase SQL Editor

-- Partners table
create table partners (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique not null,
  phone text,
  business_name text,
  earnings_paid decimal default 0,
  created_at timestamp default now()
);

-- Referrals table (optional - for click tracking)
create table referrals (
  id uuid default gen_random_uuid() primary key,
  partner_id uuid references partners(id) on delete cascade,
  status text default 'clicked',
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table partners enable row level security;
alter table referrals enable row level security;

-- Partners policies: public read, authenticated write
create policy "Anyone can read partners" on partners
  for select using (true);

create policy "Authenticated users can insert partners" on partners
  for insert with check (auth.role() = 'authenticated');

create policy "Authenticated users can update partners" on partners
  for update using (auth.role() = 'authenticated');

create policy "Authenticated users can delete partners" on partners
  for delete using (auth.role() = 'authenticated');

-- Referrals policies: public insert (for tracking), authenticated read
create policy "Anyone can insert referrals" on referrals
  for insert with check (true);

create policy "Authenticated users can read referrals" on referrals
  for select using (auth.role() = 'authenticated');

-- Index for faster slug lookups
create index partners_slug_idx on partners (slug);
