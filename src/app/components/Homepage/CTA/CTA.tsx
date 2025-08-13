import { Col, Row } from "antd";
import { Button, Text } from "@components/core";
import styled from "styled-components";

const Container = styled.div`
    background: ${({ theme }) => theme.colors.accent};
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
                <Col xs={24} lg={18} xl={16} xxl={14}>
                    <Text align="center" variant={"heading2"} font={"sans"} block>
                        Stay Ahead
                    </Text>
                    <Text align="center" variant={"body3"} style={{ margin: "1.5rem 0 2rem 0" }} block>
                        Join us for real-time updates and alerts to maximize your crypto investment potential.
                    </Text>
                    <Row justify={"center"} style={{ gap: "1.5rem" }}>
                        <Col xs={24} md={6} lg={6}>
                            <Button>Try for free</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
