import { demoHeaders, FLASK_API_URL, headers, supabase } from "@/config/index";
import axios from "axios";

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

export const addFileToStorage = async ({ filename, file }) => {
    const { data, error } = await supabase.storage
        .from("files")
        .upload(`files/${filename}`, file);
    if (error) return error;
};

/* API CALLS */

// Demo

export const demoSummarizer = async ({ input_text }) => {
    const res = await axios({
        method: "POST",
        url: `${FLASK_API_URL}/demo`,
        data: { input_text: input_text },
        headers: demoHeaders,
    });
    return res.data["result_text"];
};

// From URL

export const summarizeFromURL = async ({ url, range }) => {
    const res = await axios({
        method: "POST",
        url: `${FLASK_API_URL}/summarize_from_url`,
        data: { url: url, range: range },
        headers: headers,
    });
    return res.data;
};

// Plain Text

export const summarizePlainText = async ({ input_text, range }) => {
    const res = await axios({
        method: "POST",
        url: `${FLASK_API_URL}/summarize_from_text`,
        data: { input_text: input_text, range: range },
        headers: headers,
    });
    return res.data;
};

// File

export const summarizeFromFile = async ({ file, range }) => {
    let formData = new FormData();

    formData.append("file", file);
    formData.append("range", range);

    const res = await axios.post(
        `${FLASK_API_URL}/summarize_from_file`,
        formData,
        {
            headers: headers,
        }
    );
    return res.data;
};
