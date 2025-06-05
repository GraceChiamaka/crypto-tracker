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

const { LogoBlack, CloseIcon, ChevronDown } = Svg;

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Container className="">
            <FlexContainer>
                <NavMobileContainer>
                    <Image src={LogoBlack} width={120} alt={"cyphyr logo"} />
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

                    <Dropdown trigger={["click"]}>
                        <NavMenu style={{ display: "flex", alignItems: "center", minWidth: "100px" }}>
                            More Info <Image src={ChevronDown} alt="dropdown menu icon" />
                        </NavMenu>
                    </Dropdown>
                </NavMenuContainer>
            </FlexContainer>

            <NavButtons show={showMenu}>
                <Link href={"/auth/login"}>
                    <Button variant={"secondary"} outline>
                        Track
                    </Button>
                </Link>
                <Link href={"/auth/signup"}>
                    <Button variant={"default"} outline>
                        Login
                    </Button>
                </Link>
            </NavButtons>
        </Container>
    );
};
