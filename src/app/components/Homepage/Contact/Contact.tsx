import { Col, Row } from "antd";
import { Text } from "@components/core";
import { Svg } from "@assets/svg";
import { theme } from "@theme/index";
import styled from "styled-components";
import Image from "next/image";

const { ContactBg2, MailIcon, LocationIcon, PhoneIcon, ContactBg3, ContactBg, ContactBg4 } = Svg;

const Container = styled.div`
    background: ${theme.colorScheme.scheme6.background};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    color: ${({ theme }) => theme.colors.neutral[100]};
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
        .backdrop {
            height: auto;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
        .backdrop {
            height: auto;
        }
    }
`;

const Card = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
export const Contact = () => {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 24, offset: 0 }} lg={14} offset={2}>
                    <Text variant={"tagline"} color={theme.colors.neutral[100]} block>
                        Connect
                    </Text>
                    <Text variant={"heading2"} color={theme.colors.neutral[100]} block>
                        Get in Touch
                    </Text>
                    <Text variant={"body4"} color={theme.colors.neutral[100]} style={{ marginBottom: "5rem" }}>
                        We're here to assist you with any queries.
                    </Text>
                </Col>
            </Row>

            <Row gutter={80}>
                <Col xs={{ span: 24, offset: 0 }} md={10} lg={8} offset={2}>
                    <Card>
                        <Image src={MailIcon} width={32} height={32} alt="mail icon" />
                        <Text variant="heading6" color={theme.colors.neutral[100]} style={{ marginTop: "1rem" }} block>
                            Email
                        </Text>
                        <Text variant="body4" color={theme.colors.neutral[100]} style={{ marginTop: "0.5rem" }} block>
                            support@cryptoapp.com
                        </Text>
                    </Card>
                    <Card>
                        <Image src={PhoneIcon} width={32} height={32} alt="phone icon" />
                        <Text variant="heading6" color={theme.colors.neutral[100]} style={{ marginTop: "1rem" }} block>
                            Phone
                        </Text>
                        <Text variant="body4" color={theme.colors.neutral[100]} style={{ marginTop: "0.5rem" }} block>
                            Reach us anytime at
                        </Text>
                        <Text variant="body4" style={{ marginTop: "0.5rem" }} color={theme.colors.neutral[100]}>
                            +1 (555) 000-0000
                        </Text>
                    </Card>
                    <Card>
                        <Image src={LocationIcon} width={32} height={32} alt="location icon" />
                        <Text variant="heading6" color={theme.colors.neutral[100]} style={{ marginTop: "1rem" }} block>
                            Location
                        </Text>
                        <Text variant="body4" color={theme.colors.neutral[100]} style={{ marginTop: "0.5rem" }} block>
                            123 Sample St, Sydney NSW 2000 AU
                        </Text>
                    </Card>
                </Col>
                <Col md={12} lg={10}>
                    <Image
                        className="backdrop"
                        src={ContactBg}
                        height={510}
                        style={{ width: "100%", transform: "" }}
                        alt=""
                    />
                </Col>
            </Row>
        </Container>
    );
};
