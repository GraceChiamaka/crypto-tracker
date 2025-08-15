import { ReactNode } from "react";
import { ContentContainer, LogoMobile } from "./style";
import { Svg } from "@assets/svg";
import Image from "next/image";

const { LogoWhite } = Svg;

export const AuthContent = ({ children }: { children: ReactNode }) => {
    return (
        <ContentContainer>
            <LogoMobile>
                <Image src={LogoWhite} alt={"Logo"} width={120} height={48} />
            </LogoMobile>
            {children}
        </ContentContainer>
    );
};
