"use client";
import { AuthSide, AuthBackdrop } from "./style";
import { Svg } from "@assets/svg";
import Image from "next/image";
import Link from "next/link";

const { SignupBg, LogoWhite } = Svg;

export const AuthBanner = () => {
    return (
        <AuthSide>
            <Link href={"/"}>
                <Image src={LogoWhite} width={120} height={48} alt={"cyphyr logo"} />
            </Link>
            <AuthBackdrop $imgSrc={SignupBg}>
                <div />
            </AuthBackdrop>
        </AuthSide>
    );
};
