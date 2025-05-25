import { ReactNode } from "react";
import styled from "styled-components";
import { Nav, TopNav } from "../index";

const Container = styled.div`
    width: 100%;
`;
const Content = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.double(2.5, 7)};
    height: 100vh;
`;

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container data-component={"Layout"}>
            <Nav />
            <TopNav />
            <Content>{children}</Content>
        </Container>
    );
};
