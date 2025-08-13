// fonts.ts
import { Geist_Mono, DM_Sans, DM_Mono, Onest } from "next/font/google";

export const fontGeist = Geist_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});
export const fontDMSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});
export const fontDMMono = DM_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    display: "swap",
});
export const fontOnest = Onest({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});
