import { VerifyOtpParams } from "@supabase/supabase-js";
import { createClient } from "@utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const body = await req.json();
        const { token, email } = body;

        if (!token || !email) {
            return Response.json({ error: "Please input valid confirmation code" }, { status: 400 });
        }
        const params: VerifyOtpParams = {
            token,
            type: "email",
            email,
        };
        const {
            error,
            data: { session, user },
        } = await supabase.auth.verifyOtp(params);

        if (error) {
            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
                { status: 400 },
            );
        }
        const { app_metadata, identities, user_metadata, ...rest } = user;
        return Response.json(
            {
                success: true,
                message: "Your email has been confirm successfully",
                data: { token: session?.access_token, refresh_token: session?.refresh_token, ...rest },
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
