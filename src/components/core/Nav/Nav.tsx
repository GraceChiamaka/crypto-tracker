import styled from "styled-components";
import { CustomButton, CustomInput } from "../index";
import { Link } from "react-router";

const Container = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.primary[100]};
    padding: ${({ theme }) => theme.spacing.double(0.8, 7)};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 6px rgba(44, 44, 56, 0.85);
`;

const Logo = styled.span`
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black[100]};
    cursor: pointer;
    letter-spacing: -1px;
`;
const NavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.large};
`;

export const Nav = () => {
    return (
        <Container data-component={"Nav"}>
            <Link to={"/"}>
                <Logo>Crypto Tracker</Logo>
            </Link>
            <NavRight>
                <CustomInput type={"text"} />
                <CustomButton variant={"secondary"}>Watchlist</CustomButton>
                <CustomButton variant={"default"}>Login</CustomButton>
            </NavRight>
        </Container>
    );
};
