import styled from "styled-components";
import { CustomButton, CustomInput, CustomSelect } from "../../components/core";
import { Col, Flex, Row, Modal, Form, DatePicker, Radio } from "antd";
import { useGetCoinsByMarketCapQuery } from "../../services";
import { useMemo } from "react";

const ModalContainer = styled.div`
    font-family: "DM Mono", sans-serif;
    .ant-form-item {
        font-family: "DM Mono", sans-serif;
    }
`;
const Heading = styled.h3`
    font-family: "DM Mono", sans-serif;
`;

export const AddTransaction = ({ show, onClose }: { show: false; onClose: () => void }) => {
    const { data, error, isLoading } = useGetCoinsByMarketCapQuery();
    const coinList = useMemo(
        () => (!isLoading && data ? data.map(({ id, name, symbol }) => ({ id: id, label: name, value: symbol })) : []),
        [isLoading, data],
    );
    return (
        <ModalContainer>
            <Modal open={show} onClose={onClose} onCancel={onClose}>
                <Heading>Add Transaction</Heading>
                <Form layout="vertical" style={{ marginTop: "1rem" }}>
                    <Row gutter={12}>
                        <Col lg={24}>
                            <Form.Item name={"transaction_type"} label={"Transaction type"}>
                                <Radio.Group
                                    value={"buy"}
                                    options={[
                                        { value: "buy", label: "Buy" },
                                        { value: "sell", label: "Sell" },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item name={"coin"} label={"Coin"}>
                                <CustomSelect
                                    showSearch
                                    options={coinList}
                                    loading={isLoading}
                                    filterOption={(input, option) =>
                                        (option?.label as string).toLowerCase().includes(input.toLowerCase())
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item name={"date"} label={"Date"}>
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col lg={12}>
                            <Form.Item name={"quantity"} label={"Quantity"}>
                                <CustomInput fullWidth />
                            </Form.Item>
                        </Col>
                        <Col lg={12}>
                            <Form.Item name={"price"} label={"Price per coin"}>
                                <CustomInput fullWidth />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col lg={24}>
                            <Form.Item name={"notes"} label={"Notes"}>
                                <CustomInput fullWidth />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </ModalContainer>
    );
};
