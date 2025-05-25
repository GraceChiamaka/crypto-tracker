import { CustomButton, Layout } from "../../components/core";
import { Flex, Table, TableProps, Tag } from "antd";
import { CoinsByMarketDataProps } from "../../services/types";
import { formatCurrencyShort } from "../../utils";
import { useGetCoinsByMarketCapQuery } from "../../services";
import { useSelector, useDispatch } from "react-redux";
import { watchlistActions } from "../../store/slices/watchlistSlice";
import styled from "styled-components";
import { RootState } from "../../store";

const CoinName = styled.p<{ type: "header" | "sub" }>`
    display: block;
    color: ${({ theme, type }) => (type === "sub" ? theme.colors.neutral.grey[400] : theme.colors.black[400])};
    font-weight: ${({ type }) => (type === "sub" ? 400 : 500)};
    text-transform: ${({ type }) => (type === "sub" ? "uppercase" : "capitalize")};
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    cursor: pointer;
`;
const CoinLogo = styled.img`
    width: 48px;
    height: 48px;
    object-fit: fill;
`;

export const Home = () => {
    const { data, error, isLoading } = useGetCoinsByMarketCapQuery();
    const { watchedIds } = useSelector((state: RootState) => state.watchlist);
    const dispatch = useDispatch();

    const columns: TableProps<CoinsByMarketDataProps>["columns"] = [
        {
            title: "Coin",
            dataIndex: "name",
            key: "name",
            render: (value, record) => (
                <Flex align="center" gap={8}>
                    <CoinLogo src={record.image} alt={"coin logo"} />
                    <Flex vertical>
                        <CoinName type={"header"} title={record.name}>
                            {record.name}
                        </CoinName>
                        <CoinName type={"sub"}>{record.symbol}</CoinName>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: "Price ($)",
            dataIndex: "current_price",
            key: "current_price",
            render: (value) => (
                <CoinName type={"header"}>
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)}
                </CoinName>
            ),
        },
        {
            title: "24h Change",
            dataIndex: "price_change_percentage_24h",
            key: "price_change_percentage_24h",
            render(value) {
                const result = new Intl.NumberFormat("en-US", { style: "percent" }).format(value);
                return <Tag color={value > 0 ? "red" : "green"}>{result}</Tag>;
            },
        },
        {
            title: "Market Cap",
            dataIndex: "market_cap",
            key: "market_cap",
            render(value) {
                return <CoinName type={"sub"}>${formatCurrencyShort(value)}</CoinName>;
            },
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (value) => {
                const isWatched = watchedIds.includes(value);
                return (
                    <CustomButton
                        variant={isWatched ? "secondary" : "default"}
                        onClick={() => {
                            dispatch(
                                isWatched
                                    ? watchlistActions.removeFromWatchlist(value)
                                    : watchlistActions.addToWatchlist(value),
                            );
                        }}
                    >
                        {isWatched ? "Unwatch" : "Watch"}
                    </CustomButton>
                );
            },
        },
    ];

    return (
        <Layout>
            <Table dataSource={data} columns={columns} loading={isLoading} />
        </Layout>
    );
};
