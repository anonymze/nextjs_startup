import { env } from "@/env";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * @remarks according to the doc, createServerClient is basicaly a fetch with configured options. But you have to update the cookies, so you can't create a single instance. It has to be called on every route
 * @returns call your supabase client on a server
 */
export const createClient = () =>  {
  const cookieStore = cookies();

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        },
      },
    },
  );
}

