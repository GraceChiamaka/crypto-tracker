import { createClient } from "@utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const body = await req.json();
        const { password, email } = body;

        if (!password || !email) {
            return Response.json({ message: "Please input correct login details" }, { status: 400 });
        }
        const params = {
            password,
            email,
        };
        const {
            error,
            data: { session, user },
        } = await supabase.auth.signInWithPassword(params);
        if (error) {
            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
                { status: 400 },
            );
        }
        if (user) {
            const { app_metadata, identities, user_metadata, ...rest } = user;
            return Response.json(
                {
                    success: true,
                    message: "Login successful!",
                    data: { token: session?.access_token, refresh_token: session?.refresh_token, ...rest },
                },
                {
                    status: 200,
                },
            );
        }
    } catch (error) {
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
