import { Col, Row } from "antd";
import { Text } from "@components/core";
import { Svg } from "@assets/svg";
import styled from "styled-components";
import Image from "next/image";

const { MailIcon, LocationIcon, PhoneIcon, MailIconDark, PhoneIconDark, LocationIconDark, ContactBg } = Svg;

const Container = styled.div`
    background: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    color: ${({ theme }) => theme.colors.background};

    ${({ theme }) => theme.media.customDesktop(1600)} {
        padding: ${({ theme }) => theme.spacing.double(7, 12)};
    }
    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
    }
`;

const Card = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Backdrop = styled.div`
    background-image: url(${ContactBg.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 510px;
    ${({ theme }) => theme.media.customDesktop(1600)} {
        background-size: contain;
        height: 420px;
    }
    ${({ theme }) => theme.media.tablet} {
        background-position: left;
        height: 420px;
    }
`;

export const Contact = ({ mode = "light" }) => {
    return (
        <Container data-component={"Contact"}>
            <Row>
                <Col xs={{ span: 24, offset: 0 }} lg={14} offset={2}>
                    <Text variant={"tagline"} block>
                        Connect
                    </Text>
                    <Text variant={"heading2"} block>
                        Get in Touch
                    </Text>
                    <Text variant={"body4"} style={{ marginBottom: "5rem" }}>
                        We're here to assist you with any queries.
                    </Text>
                </Col>
            </Row>

            <Row gutter={{ xxl: 80 }}>
                <Col xs={{ span: 24, offset: 0 }} md={10} lg={8} offset={2}>
                    <Card>
                        <Image
                            src={mode === "light" ? MailIcon : MailIconDark}
                            width={32}
                            height={32}
                            alt="mail icon"
                        />
                        <Text variant="heading6" style={{ marginTop: "1rem" }} block>
                            Email
                        </Text>
                        <Text variant="body4" style={{ marginTop: "0.5rem" }} block>
                            support@cryptoapp.com
                        </Text>
                    </Card>
                    <Card>
                        <Image
                            src={mode === "light" ? PhoneIcon : PhoneIconDark}
                            width={32}
                            height={32}
                            alt="phone icon"
                        />
                        <Text variant="heading6" style={{ marginTop: "1rem" }} block>
                            Phone
                        </Text>
                        <Text variant="body4" style={{ marginTop: "0.5rem" }} block>
                            Reach us anytime at
                        </Text>
                        <Text variant="body4" style={{ marginTop: "0.5rem" }}>
                            +1 (555) 000-0000
                        </Text>
                    </Card>
                    <Card>
                        <Image
                            src={mode === "light" ? LocationIcon : LocationIconDark}
                            width={32}
                            height={32}
                            alt="location icon"
                        />
                        <Text variant="heading6" style={{ marginTop: "1rem" }} block>
                            Location
                        </Text>
                        <Text variant="body4" style={{ marginTop: "0.5rem" }} block>
                            123 Sample St, Sydney NSW 2000 AU
                        </Text>
                    </Card>
                </Col>
                <Col md={12} lg={10} xl={10} xxl={12}>
                    <Backdrop />
                </Col>
            </Row>
        </Container>
    );
};
