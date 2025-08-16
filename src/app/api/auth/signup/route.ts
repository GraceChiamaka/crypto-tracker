import { createClient } from "@utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const body = await req.json();
        const { email, password, full_name, currency } = body;

        if (!email || !full_name || !password) {
            return Response.json({ message: "Incomplete signup details" }, { status: 400 });
        }
        const data = {
            email,
            password,
            data: {
                full_name,
            },
        };
        const { error, data: authData } = await supabase.auth.signUp(data);
        if (error) {
            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
                { status: 400 },
            );
        }
        if (authData.user) {
            const { error: ProfileErr } = await supabase
                .from("users")
                .insert([{ auth_id: authData.user.id, email, full_name, local_currency: currency }]);
            if (ProfileErr) {
                return Response.json(
                    {
                        success: false,
                        message: `Something went wrong creating your account, ${ProfileErr.message}`,
                    },
                    {
                        status: 400,
                    },
                );
            }
            return Response.json({
                success: true,
                message: "User account created successfully",
                data: authData.user,
            });
        }
    } catch (error) {
        console.log(error, "error on signup ");
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
