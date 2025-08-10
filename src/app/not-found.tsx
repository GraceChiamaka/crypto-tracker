"use client";
import styled from "styled-components";
import Image from "next/image";
import { Svg } from "@assets/svg";
import Link from "next/link";
const { ErrorBG, LogoWhite } = Svg;

const Container = styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Backdrop = styled.div`
    background-image: url(${ErrorBG.src});
    height: 70vh;
    background-repeat: no-repeat;
    background-size: contain;
    width: 300px;
    background-position: center;
`;

const NotFound = () => {
    return (
        <Container data-component={"NotFound"}>
            <Image src={LogoWhite} width={120} height={48} alt={"cyphyr log"} />
            <Backdrop />
            <Link href={"/"}>Go back to home page</Link>

            <br />
            <Link href={"/dashboard"}>Go back to dashboard</Link>
        </Container>
    );
};

export default NotFound;
