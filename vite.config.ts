import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import eslintPlugin from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // eslintPlugin({
        //     cache: false,
        //     include: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
        //     exclude: [],
        // }),
    ],
});
