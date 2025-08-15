import { AuthSide, AuthBackdrop } from "./style";
import { Svg } from "@assets/svg";
import Image from "next/image";

const { SignupBg, LogoWhite } = Svg;

export const AuthBanner = () => {
    return (
        <AuthSide>
            <Image src={LogoWhite} width={120} height={48} alt={"cyphyr logo"} />
            <AuthBackdrop $imgSrc={SignupBg}>
                <div />
            </AuthBackdrop>
        </AuthSide>
    );
};
