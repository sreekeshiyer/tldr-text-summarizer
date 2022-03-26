import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const supabaseServer = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
        fetch: fetch,
    }
);

export const SUPABASE_STORAGE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/files/files/`;

export const FLASK_API_URL =
    process.env.NEXT_PUBLIC_FLASK_API_URL || "http://localhost:5000/api/v1";

export const demoHeaders = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLASK_DEMO_KEY}`,
    "Content-Type": "application/json",
};

export const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLASK_API_KEY}`,
    "Content-Type": "application/json",
};
