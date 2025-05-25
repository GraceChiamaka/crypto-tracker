import { Col, Flex, Row, Table } from "antd";
import { CustomButton, Layout } from "../../components/core";
import styled from "styled-components";
import { useState } from "react";
import { AddTransaction } from "./AddTransaction";

const Card = styled.div`
    width: 100%;
    border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[300])};
    padding: ${({ theme }) => theme.spacing.double(1, 1.5)};
    border-radius: 6px;
    margin: ${({ theme }) => theme.spacing.double(1, 0)};
`;

// Coin: [Bitcoin ▼]

// Transaction Type: (•) Buy ( ) Sell

// Quantity: 0.3

// Price per Coin (USD): 28,000

// Date: 2024-06-10

// Notes: Bought during dip

export const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Layout>
            <AddTransaction show={showModal} onClose={() => setShowModal(false)} />
            <Flex gap={16}>
                <Card>Portfolio value</Card>
                <Card>Portfolio value</Card>
            </Flex>
            <Row>
                <Col lg={12}>
                    <Flex gap={12}>
                        <CustomButton variant={"default"} onClick={() => setShowModal(true)}>
                            Add Transaction
                        </CustomButton>
                        <CustomButton variant={"secondary"}>export</CustomButton>
                    </Flex>
                </Col>
            </Row>
            <br />
            <Table columns={[]} dataSource={[]} />
        </Layout>
    );
};
