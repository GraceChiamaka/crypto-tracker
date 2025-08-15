"use client";
import { LayoutContainer } from "./style";
import { useState, useEffect, ReactNode } from "react";
import { AuthBanner } from "./components/AuthBanner";
import { Loader } from "@components/core";
import { AuthContent } from "./components/AuthContent";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return !isMounted ? (
        <Loader fullWidth />
    ) : (
        <LayoutContainer>
            <AuthBanner />
            <AuthContent>{children}</AuthContent>
        </LayoutContainer>
    );
};

export default AuthLayout;
