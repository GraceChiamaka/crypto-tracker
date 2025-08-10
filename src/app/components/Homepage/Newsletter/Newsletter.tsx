import { Button, Text, CustomInput } from "@components/core";
import { Row, Col } from "antd";
import { Svg } from "@assets/svg";
import Image from "next/image";
import styled from "styled-components";
import { lightTheme } from "@src/app/theme";

const { SubscribeBG1 } = Svg;

const Container = styled.div`
    background: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 3)};
        .backdrop {
            height: auto;
            width: 100%;
        }
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
        .backdrop {
            height: auto;
            width: 100%;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
        .backdrop {
            height: auto;
            width: 100%;
        }
    }
`;
export const Newsletter = ({ variant = "default" }: { variant: "default" | "news" }) => {
    const theme = lightTheme;
    return (
        <>
            {variant === "default" ? (
                <Container>
                    <Row align={"middle"} gutter={{ xxl: 48 }}>
                        <Col xs={24} md={24} lg={11} xxl={10}>
                            <Text variant="heading3" font="bio" color={theme.colors.text}>
                                Stay Updated on Crypto Prices
                            </Text>
                            <Text variant="body3" color={theme.colors.text}>
                                Sign up now to receive real-time alerts on cryptocurrency price changes directly to your
                                inbox.
                            </Text>
                            <Row
                                align={"middle"}
                                gutter={{ xs: 6, lg: 16 }}
                                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                            >
                                <Col xs={24} md={18} lg={16} xxl={18}>
                                    <CustomInput mode={"dark"} placeholder="Enter your email" />
                                </Col>
                                <Col>
                                    <Button variant="default">Sign up</Button>
                                </Col>
                            </Row>
                            <Text variant="body5" color={theme.colors.text}>
                                By clicking Sign Up, you agree to our Terms and Conditions.
                            </Text>
                        </Col>
                        <Col xs={24} lg={12} xxl={8}>
                            <Image className="backdrop" src={SubscribeBG1} alt={"newsletter"} />
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container>
                    <Row align={"middle"} justify={"space-between"} gutter={{ xl: 48 }}>
                        <Col xs={24} lg={11} xxl={8}>
                            <Text variant="heading3" font="bio" color={theme.colors.text}>
                                Stay Updated with Crypto News
                            </Text>
                        </Col>
                        <Col xs={24} lg={12} xxl={10}>
                            <Text variant="body3" color={theme.colors.text}>
                                Subscribe to our newsletter for the latest updates and expert tips on cryptocurrency.
                                Don’t miss out on valuable insights that can help you navigate the crypto market.
                            </Text>
                            <Row
                                gutter={{ lg: 16 }}
                                align={"middle"}
                                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                            >
                                <Col xs={24} md={16} lg={16} xxl={18}>
                                    <CustomInput mode={"dark"} placeholder="Enter your email" />
                                </Col>
                                <Col lg={8}>
                                    <Button variant="default">Sign up</Button>
                                </Col>
                            </Row>
                            <Text variant="body5" color={theme.colors.text}>
                                By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
                            </Text>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};
