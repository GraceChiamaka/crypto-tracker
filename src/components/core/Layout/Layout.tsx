import { ReactNode } from "react";
import styled from "styled-components";
import { Nav, TopNav } from "../index";

const Container = styled.div`
    width: 100%;
`;

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container data-component={"Layout"}>
            <Nav />
            <TopNav />
            {children}
        </Container>
    );
};
