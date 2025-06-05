import { Col, Row } from "antd";
import { Button, Text } from "@components/core";
import styled from "styled-components";
import { theme } from "@src/app/theme";

const Container = styled.div`
    background: ${theme.colorScheme.scheme5.background};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 3)};
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
    }
`;

export const CTA = () => {
    return (
        <Container data-container={"CTA"}>
            <Row justify={"center"}>
                <Col xs={24} lg={16} xxl={14}>
                    <Text align="center" variant={"heading2"} font={"bio"} color={theme.colors.neutral[100]} block>
                        Stay Ahead in Crypto Trading
                    </Text>
                    <Text
                        align="center"
                        variant={"body3"}
                        color={theme.colors.neutral[100]}
                        style={{ margin: "1.5rem 0 2rem 0" }}
                        block
                    >
                        Join us for real-time updates and alerts to maximize your crypto investment potential.
                    </Text>
                    <Row justify={"center"} style={{ gap: "1.5rem" }}>
                        <Col>
                            <Button variant={"default"} outline>
                                Sign up
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" outline>
                                Learn more
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
