import { BalanceCard, Text } from "@components/core";
import { SectionHeader, SectionContainer } from "./style";
import { Col, Row } from "antd";
import { currencyFormatter } from "@src/app/utils/formatter";

export const Balances = () => {
    const fiatAmount = currencyFormatter(0, "ngn");
    const total = currencyFormatter(0, "usd");

    return (
        <SectionContainer data-component={"Balances"}>
            <SectionHeader>
                <Text variant={"body3"} weight={"medium"} font={"mono"}>
                    BALANCES
                </Text>
            </SectionHeader>
            <Row justify={"space-between"} gutter={16}>
                <Col xl={8}>
                    <BalanceCard title={"Total"} amount={total} />
                </Col>
                <Col xl={8}>
                    <BalanceCard title={"Fiat"} amount={fiatAmount} />
                </Col>
                <Col xl={8}>
                    <BalanceCard title={"Crypto"} bordered={false} amount={0} />
                </Col>
            </Row>
        </SectionContainer>
    );
};
