import { Layout } from "../../components/core";
import { Table } from "antd";
import styled from "styled-components";

const Content = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.double(2.5, 7)};
    height: 100vh;
`;

export const Home = () => {
    const columns = [
        {
            title: "Coin",
            dataIndex: "coin",
            key: "coin",
        },
        {
            title: "Price ($)",
            dataIndex: "usd",
            key: "usd",
        },
        {
            title: "24h Change",
            dataIndex: "usd_24h_change",
            key: "usd_24h_change",
        },
        {
            title: "Market Cap",
            dataIndex: "usd_market_cap",
            key: "usd_market_cap",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
        },
    ];
    return (
        <Layout>
            <Content>
                <Table dataSource={[]} columns={columns} />
            </Content>
        </Layout>
    );
};
