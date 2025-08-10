"use client";
import Link from "next/link";
import {
    Container,
    NavMenu,
    NavMenuContainer,
    NavButtons,
    NavMobileContainer,
    FlexContainer,
    MenuButton,
} from "./style";
import { Dropdown } from "antd";
import Image from "next/image";
import { Button } from "../index";
import { Svg } from "@assets/svg";
import { useState } from "react";
const { LogoBlack, LogoWhite, CloseIcon, ChevronDown } = Svg;

export const Nav = ({ mode = "light" }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Container data-component={"Navbar"}>
            <FlexContainer>
                <NavMobileContainer>
                    <Image width={180} src={mode === "dark" ? LogoBlack : LogoWhite} alt={"cyphyr logo"} />
                    <MenuButton onClick={() => setShowMenu(!showMenu)}>
                        <Image src={CloseIcon} alt={"close menu icon"} />
                    </MenuButton>
                </NavMobileContainer>
                <NavMenuContainer data-container={"NavMenuContainer"} show={showMenu}>
                    <Link href={"/"}>
                        <NavMenu>Home</NavMenu>
                    </Link>
                    <Link href={"/"}>
                        <NavMenu>Features</NavMenu>
                    </Link>
                    <Link href={"/"}>
                        <NavMenu>Portfolio</NavMenu>
                    </Link>
                </NavMenuContainer>
            </FlexContainer>

            <NavButtons show={showMenu}>
                <Link href={"/auth/login"}>
                    <Button>Get Started</Button>
                </Link>
            </NavButtons>
        </Container>
    );
};
