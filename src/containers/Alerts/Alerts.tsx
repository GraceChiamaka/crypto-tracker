import { Layout } from "../../components/core";
import styled from "styled-components";

const Content = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.double(2.5, 7)};
    height: 100vh;
`;

export const Alerts = () => {
    return (
        <Layout>
            <Content>Hollaaa Alerts</Content>
        </Layout>
    );
};
