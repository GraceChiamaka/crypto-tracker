import styled from "styled-components";
import { StaticImageData } from "next/image";

export const AuthSide = styled.div`
    width: 30%;
    background: ${({ theme }) => theme.colors.accent2};
    height: 100vh;
    max-height: 100vh;
    padding: 1rem 3rem;
    ${({ theme }) => theme.media.smallLaptop} {
        width: 40%;
    }
    ${({ theme }) => theme.media.tablet} {
        width: 40%;
    }
    @media screen and (max-width: 640px) {
        display: none;
    }
`;
export const AuthBackdrop = styled.div<{ $imgSrc: StaticImageData }>`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    div {
        background-image: ${({ $imgSrc }) => `url(${$imgSrc.src})`};
        width: 100%;
        height: 60vh;
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 3rem;
        ${({ theme }) => theme.media.tablet} {
            height: 30vh;
        }
        @media screen and (max-width: 640px) {
            display: none;
        }
    }
`;

export const ContentContainer = styled.div`
    max-height: 100vh;
    width: 70%;
    height: 100%;
    ${({ theme }) => theme.media.smallLaptop} {
        width: 60%;
    }
    @media screen and (max-width: 640px) {
        width: 100%;
        height: 100vh;
    }
`;

export const LogoMobile = styled.div`
    display: none;
    padding: ${({ theme }) => theme.spacing.double(1, 2)};
    box-shadow: 0 2px 4px 1px rgba(125, 103, 255, 0.35);
    cursor: pointer;

    ${({ theme }) => theme.media.mobile} {
        display: block;
    }
`;
