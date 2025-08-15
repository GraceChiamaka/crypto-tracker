import got from "got";

export async function GET() {
    try {
        const results = await got
            .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, {
                headers: {
                    accept: "application/json",
                    "x-cg-demo-api-key": process.env.COIN_GECKO_KEY,
                },
            })
            .json();
        return Response.json({
            success: true,
            data: results,
            message: "Coins retrieved successfully",
        });
    } catch (error) {
        return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
