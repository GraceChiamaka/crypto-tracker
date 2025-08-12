import { useTheme } from "@hooks/useTheme";
import { ContentContainer, ContentWrapper } from "./style";
import { ReactNode } from "react";
import { TopNav } from "./TopNav";

export const DashboardContent = ({ children }: { children: ReactNode }) => {
    const { isCollapsed } = useTheme();

    return (
        <ContentContainer data-component={"Main-Content"} $collapse={isCollapsed}>
            <TopNav />
            <ContentWrapper>{children}</ContentWrapper>
        </ContentContainer>
    );
};
