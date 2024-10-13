import { env } from "@/env";
import { createBrowserClient } from "@supabase/ssr";

/**
 * @remarks createBrowserClient is a singleton instance, so you can call it safely X times you want
 * @returns call your supabase client on a browser
 */
export const createClient = () => {
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
};
