import { createClient } from "@utils/supabase/server";
import { NextRequest } from "next/server";
const reset_url = "https://www.cyphyr.co/auth/reset_password";

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return Response.json({ message: "Please input your email" }, { status: 400 });
        }
        const { error, data } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: reset_url });
        if (error) {
            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
                { status: 400 },
            );
        }
        if (data) {
            return Response.json(
                {
                    success: true,
                    message: "Reset email sent successfully",
                },
                {
                    status: 200,
                },
            );
        }
    } catch (error) {
        console.log(error);
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
