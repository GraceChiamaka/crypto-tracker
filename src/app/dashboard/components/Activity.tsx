import Image from "next/image";
import { Text, ArrowRightIcon } from "@components/core";
import { SectionHeader, SectionActionButton, TableWrapper, CoinLabel, PriceValue, FlipButton } from "./style";
import { Svg } from "@assets/svg";
import { Table, TableColumnsType } from "antd";
import CoinsList from "../coins-data.json";
import { relativeTimestamp } from "@src/app/utils/formatter";
const { ArrowDown, ArrowUp, EyeIcon } = Svg;

type CoinData = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
};

export const Activity = () => {
    const columns: TableColumnsType<CoinData> = [
        {
            key: "name",
            title: "Coin",
            dataIndex: "name",
            // fixed: "left",
            render: (_, record: CoinData) => (
                <CoinLabel>
                    <Image src={record.image} width={24} height={24} alt={"coin"} />{" "}
                    <Text variant={"body4"} weight="medium">
                        {record.name}
                    </Text>
                </CoinLabel>
            ),
        },
        {
            key: "updated",
            title: "Updated",
            dataIndex: "last_updated",
            render: (_, record: CoinData) => <>{relativeTimestamp(record.last_updated)}</>,
            responsive: ["md"],
        },
        {
            key: "change",
            title: "Change",
            dataIndex: "price_change_percentage_24h",
            render: (_, record: CoinData) => {
                const isChangeHigh = record.price_change_percentage_24h > 0;

                return (
                    <CoinLabel>
                        <Image src={isChangeHigh ? ArrowUp : ArrowDown} width={20} height={20} alt={"icons"} />
                        <PriceValue variant={"body4"} $variant={isChangeHigh ? "high" : "low"}>
                            {record.price_change_percentage_24h} %
                        </PriceValue>
                    </CoinLabel>
                );
            },
        },
        {
            key: "price",
            title: "Price",
            dataIndex: "current_price",
            render: (_, record: CoinData) => {
                const formattedPrice = Intl.NumberFormat("en", { style: "currency", currency: "usd" }).format(
                    record.current_price,
                );
                return <>{formattedPrice}</>;
            },
        },
        {
            key: "date",
            title: "Date",
            dataIndex: "ath_date",
            // fixed: "right",
            render: () => (
                <FlipButton>
                    <Image
                        src={EyeIcon}
                        width={24}
                        height={24}
                        aria-label="Get more coin info"
                        alt={"get more info icon"}
                    />
                </FlipButton>
            ),
        },
    ];

    return (
        <section data-component={"Dashboard-Activity"} style={{ marginBottom: "1.5rem" }}>
            <SectionHeader>
                <Text variant="heading5" weight="semibold">
                    ACTIVITY
                </Text>
                <SectionActionButton>
                    <span>More</span>
                    <ArrowRightIcon />
                </SectionActionButton>
            </SectionHeader>
            <TableWrapper>
                <Table<CoinData>
                    columns={columns}
                    rowKey={(record) => record.id}
                    dataSource={CoinsList as CoinData[]}
                    pagination={{
                        defaultPageSize: 25,
                        pageSize: 25,
                    }}
                />
            </TableWrapper>
        </section>
    );
};
