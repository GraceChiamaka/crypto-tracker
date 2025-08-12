"use client";
import { LayoutContainer } from "./style";
import { useState, useEffect, ReactNode } from "react";
import { UserProfile } from "./Profile";

import { Sidebar } from "./Sidebar";
import { Loader } from "@components/core";
import { DashboardContent } from "./DashboardContent";

export const StyledLayout = ({ children }: { children: ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return !isMounted ? (
        <Loader fullWidth />
    ) : (
        <LayoutContainer>
            <Sidebar />
            <DashboardContent>{children}</DashboardContent>
            <UserProfile />
        </LayoutContainer>
    );
};
