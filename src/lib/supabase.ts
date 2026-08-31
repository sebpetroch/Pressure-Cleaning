import { createClient } from "@supabase/supabase-js";

// Server-side client used only to submit quote requests into the shared APW CRM
// database (public anon key, restricted by RLS to insert-only on quote_requests
// and quote-photos uploads -- see the business-calendar project's migrations).
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
