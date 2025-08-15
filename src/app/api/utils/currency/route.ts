import { createClient } from "@utils/supabase/server";

export async function GET() {
    try {
        const supabase = await createClient();

        const { error, data } = await supabase.from("currencies").select("*");

        if (error) {
            return Response.json({
                success: false,
                message: "Something went wrong retrieving currencies",
            });
        }
        if (data) {
            return Response.json({
                success: true,
                message: "Currencies retrieved successfully",
                data,
            });
        }
    } catch (error) {
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
