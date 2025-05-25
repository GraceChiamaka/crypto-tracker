import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import theme from ".";

export const AntThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            // defaultBg: theme.colors.blue[400],
                            // defaultColor: theme.colors.white,
                            // defaultBorderColor: theme.colors.blue[200],
                        },
                        Tabs: {
                            // inkBarColor: theme.colors.primary[400],
                            // itemActiveColor: theme.colors.primary[500],
                        },
                        Table: {
                            headerBg: theme.colors.neutral.grey[100],
                            borderColor: "none",
                            cellPaddingBlock: 14,
                            cellPaddingBlockMD: 16,
                        },
                        Select: {
                            optionActiveBg: theme.colors.blue[200],
                            optionSelectedBg: theme.colors.blue[300],
                            optionSelectedColor: theme.colors.black[100],
                            boxShadow: theme.colors.blue[100],
                        },
                        Spin: {
                            dotSizeLG: 32,
                            // colorPrimary: theme.colors.primary[400],
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeProvider>
    );
};
