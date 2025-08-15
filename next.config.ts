import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "coin-images.coingecko.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "flagcdn.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
