import { supabase } from "@/config/index";

export const getUserServerSide = async (req) => {
    return await supabase.auth.api.getUserByCookie(req);
};

export const getUserScans = async () => {
    const { data, error } = await supabase
        .from("results")
        .select("*")
        .order("created_at", { ascending: false });
    if (!error) {
        return data;
    }
};

export const addScan = async ({
    user_id,
    file,
    url,
    input_text,
    result_text,
}) => {
    const { error } = await supabase.from("results").insert({
        user_id,
        file,
        url,
        input_text,
        result_text,
    });

    if (error) return error;
};
