import { supabaseServer } from "@/config/index";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const { origin } = req.nextUrl;
    const { user } = await supabaseServer.auth.api.getUserByCookie(req);

    if (user) return NextResponse.redirect(`${origin}/user/dashboard`);

    return NextResponse.next();
}
