import { Row, Col } from "antd";
import { Png } from "@assets/png";
import { Svg } from "@assets/svg";
import { Button, Text } from "@components/core";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@src/app/theme";

const { Placeholder } = Png;
const { ChevronRight, PriceIcon, PriceBG, PortfolioBG2, TrackBG, TrackIcon, RealTimeBG, WatchlistBG } = Svg;

const FeaturesContainer = styled.div`
    background: ${({ theme }) => theme.colors.neutral[800]};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 3)};
        .backdrop {
            width: 100%;
            height: auto;
        }
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
        .backdrop {
            width: 100%;
            height: auto;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
        .backdrop {
            width: 100%;
            height: auto;
        }
    }
`;
const FeaturesYellowBG = styled.div`
    background: ${theme.colorScheme.scheme4.background};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 3)};
        .backdrop {
            width: 100%;
            height: auto;
            margin-top: 1.5rem;
        }
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
        .backdrop {
            height: auto;
            margin-top: 1.5rem;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
        .backdrop {
            height: auto;
            margin-top: 1.5rem;
        }
    }
`;
const FeaturesList = styled.div`
    padding: ${({ theme }) => theme.spacing.double(5, 0)};
    ${({ theme }) => theme.media.tablet} {
        img {
            margin-top: 1rem;
            height: auto;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        img {
            margin-top: 1rem;
            height: auto;
        }
    }
`;

export const Features = () => {
    return (
        <>
            <FeaturesContainer>
                <Row gutter={{ xxl: 80 }} justify={"space-between"} align={"middle"}>
                    <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
                        <Image className="backdrop" src={RealTimeBG} width={640} height={640} alt="" />
                    </Col>
                    <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 11 }}>
                        <Text variant={"heading3"} font="bio" color={theme.colors.neutral[100]}>
                            Stay Updated with Real-Time Cryptocurrency Price Tracking at Your Fingertips
                        </Text>
                        <Text variant={"body3"} style={{ marginTop: "1.5rem" }} color={theme.colors.neutral[100]}>
                            Our application offers instant price updates for a wide range of cryptocurrencies, ensuring
                            you never miss a market move. With our user-friendly dashboard, you can effortlessly monitor
                            prices and make informed decisions.
                        </Text>
                    </Col>
                </Row>
            </FeaturesContainer>
            <FeaturesContainer>
                <Row justify={"center"}>
                    <Col xs={24} lg={18} xxl={12}>
                        <Text align="center" variant="tagline" color={theme.colors.neutral[100]} block>
                            Features
                        </Text>
                        <Text align="center" variant="heading2" color={theme.colors.neutral[100]}>
                            Explore Our Cutting-Edge Features
                        </Text>
                        <Text
                            align="center"
                            variant="body3"
                            color={theme.colors.neutral[100]}
                            style={{ marginTop: "1.5rem" }}
                            block
                        >
                            Stay ahead in the crypto market with our innovative features. Our platform is designed to
                            enhance your trading experience and keep you informed.
                        </Text>
                    </Col>
                </Row>
                <FeaturesList>
                    <Row gutter={{ lg: 12, xxl: 48 }}>
                        <Col xs={24} md={12} lg={8} xxl={8}>
                            <Image style={{ width: "100%" }} src={PortfolioBG2} height={230} alt={"feature "} />
                            <Text
                                align="center"
                                variant={"heading4"}
                                style={{ margin: "1rem 0" }}
                                color={theme.colors.neutral[100]}
                                block
                            >
                                Dual Currency Price View
                            </Text>
                            <Text align="center" variant={"body4"} color={theme.colors.neutral[100]} block>
                                Easily compare prices across two currencies.
                            </Text>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Image style={{ width: "100%" }} src={WatchlistBG} height={230} alt={"feature "} />
                            <Text
                                align="center"
                                variant={"heading4"}
                                color={theme.colors.neutral[100]}
                                style={{ margin: "1rem 0" }}
                                block
                            >
                                Watchlist Management
                            </Text>
                            <Text align="center" variant={"body4"} color={theme.colors.neutral[100]} block>
                                Effortlessly track your favorite cryptocurrencies.
                            </Text>
                        </Col>
                        <Col md={24} lg={8}>
                            <Image style={{ width: "100%" }} src={PriceBG} height={230} alt={"feature "} />
                            <Text
                                align="center"
                                variant={"heading4"}
                                color={theme.colors.neutral[100]}
                                style={{ margin: "1rem 0" }}
                                block
                            >
                                Price Alerts
                            </Text>
                            <Text align="center" variant={"body4"} color={theme.colors.neutral[100]} block>
                                Get notified instantly when prices change.
                            </Text>
                        </Col>
                    </Row>
                </FeaturesList>
                <Row justify={"center"}>
                    <Col md={12} lg={8}>
                        <Row justify={"center"} style={{ gap: "1.5rem" }}>
                            <Col>
                                <Button variant="secondary">Learn More</Button>
                            </Col>
                            <Col>
                                <Button
                                    variant="link"
                                    style={{ background: "transparent", color: theme.colors.neutral[100] }}
                                >
                                    Sign Up <Image src={ChevronRight} width={24} height={24} alt={"right arrow"} />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </FeaturesContainer>
            <FeaturesYellowBG>
                <Row align={"middle"} justify={"center"} gutter={{ xs: 0, lg: 90 }}>
                    <Col lg={12}>
                        <Text variant="heading3" color={theme.colors.neutral[100]} font="bio">
                            Effortlessly track and manage your <br /> cryptocurrency portfolio in real-time.
                        </Text>
                        <Text variant="body3" color={theme.colors.neutral[100]} style={{ marginTop: "1.5rem" }}>
                            Our portfolio tracking feature allows you to monitor your crypto investments seamlessly.
                            Stay updated with real-time price changes and make informed decisions.
                        </Text>
                        <Row gutter={24} style={{ marginTop: "2rem" }}>
                            <Col lg={12}>
                                <Image src={TrackIcon} width={48} height={48} alt={"track icon"} />
                                <Text variant={"heading6"} color={theme.colors.neutral[100]} font={"bio"} block>
                                    Track Assets
                                </Text>
                                <Text variant={"body4"} color={theme.colors.neutral[100]} style={{ marginTop: "1rem" }}>
                                    Gain insights into your portfolio's performance and optimize your investment
                                    strategy.
                                </Text>
                            </Col>
                            <Col lg={12}>
                                <Image src={PriceIcon} width={48} height={48} alt={"track icon"} />
                                <Text variant={"heading6"} color={theme.colors.neutral[100]} font={"bio"} block>
                                    Stay Informed
                                </Text>
                                <Text variant={"body4"} color={theme.colors.neutral[100]} style={{ marginTop: "1rem" }}>
                                    Receive alerts on price changes to never miss an opportunity.
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={10}>
                        <Image className="backdrop" style={{ width: "100%" }} src={TrackBG} alt={"track cyrpto "} />
                    </Col>
                </Row>
            </FeaturesYellowBG>
        </>
    );
};
