"use client";
import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
    colors: {
        green: ["#E8FDEE", "#D1FCDD", "#5EF78A", "#19F458", "#14C346", "#0A6123", "#07491A", "", "", ""],
        neutral: ["#FFFFFF", "#F2F2F2", "#DADAD8", "#B6B5B2", "#858480", "#54534D", "#24221A", "#0C0A01", "", ""],
        orange: ["#FEEFE7", "#FDE0D0", "#F9945B", "#F76715", "#C55210", "#622908", "#4A1E06", "", "", ""],
        yellow: ["#FEF8E6", "#FDF2CE", "#F8D355", "#F5C10D", "#C49A0A", "#624D05", "#493903", "", "", ""],
    },
    components: {
        Text: {},
    },
    other: {
        globalStyles: (theme) => ({
            body: {
                background: "#FEF8E6",
                color: "#0C0A01",
            },
        }),
    },
};
