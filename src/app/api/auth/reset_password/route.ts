import { createClient } from "@utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const body = await req.json();
        const { password, token } = body;

        const { data, error } = await supabase.auth.verifyOtp({ token_hash: token, type: "recovery" });

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
            const { data: UpdateData, error: UpdateError } = await supabase.auth.updateUser({
                password,
            });
            if (UpdateError) {
                return Response.json(
                    {
                        success: false,
                        message: UpdateError.message,
                    },
                    { status: 400 },
                );
            }
            if (UpdateData) {
                return Response.json(
                    {
                        success: true,
                        message: "Password reset successful",
                        data,
                    },
                    {
                        status: 200,
                    },
                );
            }
        }
    } catch (error) {
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
