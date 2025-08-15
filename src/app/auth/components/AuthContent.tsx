"use client";
import { ReactNode } from "react";
import { ContentContainer, LogoMobile } from "./style";
import { Svg } from "@assets/svg";
import Image from "next/image";
import Link from "next/link";

const { LogoWhite } = Svg;

export const AuthContent = ({ children }: { children: ReactNode }) => {
    return (
        <ContentContainer>
            <Link href={"/"}>
                <LogoMobile>
                    <Image src={LogoWhite} alt={"Logo"} width={120} height={48} />
                </LogoMobile>
            </Link>

            {children}
        </ContentContainer>
    );
};
