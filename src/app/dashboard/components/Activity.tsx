"use client";
import { Text, EmptyState } from "@components/core";
import { SectionHeader, TableWrapper, SectionContainer } from "./style";
import { Row, Col } from "antd";

export const Activity = () => {
    return (
        <>
            <Row justify={"space-between"} gutter={24}>
                <Col xl={12}>
                    <SectionContainer data-component={"Dashboard-Activity"}>
                        <SectionHeader>
                            <Text variant="body3" weight="semibold" font={"mono"}>
                                My Portfolio
                            </Text>
                        </SectionHeader>
                        <TableWrapper>
                            <EmptyState title={"You have no coins"} actionLabel="Add Coins" />
                        </TableWrapper>
                    </SectionContainer>
                </Col>
                <Col xl={12}>
                    <SectionContainer data-component={"Dashboard-Activity"}>
                        <SectionHeader>
                            <Text variant="body3" weight="semibold" font={"mono"}>
                                Transaction history
                            </Text>
                        </SectionHeader>
                        <TableWrapper>
                            <EmptyState title={"You don't own crypto"} actionLabel="Connect wallet" />
                        </TableWrapper>
                    </SectionContainer>
                </Col>
            </Row>
        </>
    );
};
