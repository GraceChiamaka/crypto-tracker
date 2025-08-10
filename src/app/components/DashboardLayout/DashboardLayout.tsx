"use client";
import { LayoutContainer, ContentContainer } from "./style";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";
import { UserProfile } from "./Profile";
import { useThemeContext } from "@src/app/theme";

export const StyledLayout = ({ children }: { children: ReactNode }) => {
    const { isCollapsed } = useThemeContext();
    return (
        <LayoutContainer>
            <Sidebar />
            <ContentContainer $collapse={isCollapsed}>{children}</ContentContainer>
            <UserProfile />
        </LayoutContainer>
    );
};
