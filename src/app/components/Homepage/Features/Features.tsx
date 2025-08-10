import { Row, Col } from "antd";
import { Svg } from "@assets/svg";
import { Text } from "@components/core";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { lightTheme } from "@src/app/theme";

const {
    PriceIcon,
    PriceIconDark,
    PriceBG,
    PortfolioBG,
    TrackBG,
    TrackBGDark,
    TrackIcon,
    TrackIconDark,
    RealTimeBG,
    WatchlistBG,
} = Svg;

const FeaturesContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};

    ${({ theme }) => theme.media.customDesktop(1600)} {
        padding: ${({ theme }) => theme.spacing.double(4, 12)};
    }
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
    background: ${({ theme }) => theme.colors.accent};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};

    ${({ theme }) => theme.media.customDesktop(1600)} {
        padding: ${({ theme }) => theme.spacing.double(4, 12)};
    }
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

const Backdrop1 = styled.div`
    background-image: url(${RealTimeBG.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 440px;

    ${({ theme }) => theme.media.extraLargeLaptop} {
        height: 440px;
    }
    ${({ theme }) => theme.media.customDesktop(1600)} {
        height: 500px;
    }
    ${({ theme }) => theme.media.smallLaptop} {
        height: 440px;
        background-size: contain;
    }
    ${({ theme }) => theme.media.tablet} {
        height: 440px;
        margin-top: 1rem;
    }
`;

const Backdrop2 = styled.div<{ img: StaticImageData }>`
    background-image: ${({ img }) => `url(${img.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 240px;

    ${({ theme }) => theme.media.extraLargeLaptop} {
        background-size: contain;
        height: 220px;
        background-position: center;
    }

    ${({ theme }) => theme.media.smallLaptop} {
        background-size: contain;
        height: 130px;
    }
    ${({ theme }) => theme.media.tablet} {
        background-size: contain;
        height: 130px;
    }
`;
const Backdrop3 = styled.div<{ mode: "light" | "dark" }>`
    background-image: ${({ mode }) => `url(${mode === "light" ? TrackBG.src : TrackBGDark.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 510px;

    ${({ theme }) => theme.media.extraLargeLaptop} {
        height: 320px;
        background-size: contain;
        background-position: center;
    }
    ${({ theme }) => theme.media.smallLaptop} {
        height: 320px;
        background-size: 100%;
    }
    ${({ theme }) => theme.media.tablet} {
        height: 520px;
    }
`;

export const Features = ({ mode }: { mode: "dark" | "light" }) => {
    const theme = lightTheme;
    return (
        <>
            <FeaturesContainer data-component={"Features"} style={{ background: theme.colors.accent }}>
                <Row gutter={{ xxl: 80 }} justify={"space-between"} align={"middle"}>
                    <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
                        <Backdrop1 />
                    </Col>
                    <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 11 }}>
                        <Text variant={"heading3"} font="bio">
                            Stay Updated in Real-Time
                        </Text>
                        <Text variant={"body3"} style={{ marginTop: "1.5rem" }}>
                            Our application offers instant price updates for a wide range of cryptocurrencies, ensuring
                            you never miss a market move. With our user-friendly dashboard, you can effortlessly monitor
                            prices and make informed decisions.
                        </Text>
                    </Col>
                </Row>
            </FeaturesContainer>
            <FeaturesContainer data-component={"Features-List"} style={{ background: theme.colors.primary }}>
                <Row justify={"center"}>
                    <Col xs={24} lg={18} xxl={12}>
                        <Text align="center" variant="tagline" color={theme.colors.text} block>
                            Features
                        </Text>
                        <Text align="center" variant="heading2" color={theme.colors.text}>
                            Cutting-Edge Features
                        </Text>
                        <Text
                            align="center"
                            variant="body3"
                            color={theme.colors.text}
                            style={{ marginTop: "1.5rem" }}
                            block
                        >
                            Stay ahead in the crypto market with our innovative features. Our platform is designed to
                            enhance your trading experience and keep you informed.
                        </Text>
                    </Col>
                </Row>
                <FeaturesList data-component={"Features"}>
                    <Row gutter={{ lg: 12, xxl: 48 }}>
                        <Col xs={24} md={8} lg={8} xxl={8}>
                            <Backdrop2 img={PortfolioBG} />
                            <Text
                                align="center"
                                variant={"heading4"}
                                style={{ margin: "1rem 0" }}
                                color={theme.colors.text}
                                block
                            >
                                FX Compare
                            </Text>
                            <Text align="center" variant={"body4"} color={theme.colors.text} block>
                                Easily compare prices across two currencies.
                            </Text>
                        </Col>
                        <Col xs={24} md={8} lg={8}>
                            <Backdrop2 img={WatchlistBG} />
                            <Text
                                align="center"
                                variant={"heading4"}
                                color={theme.colors.text}
                                style={{ margin: "1rem 0" }}
                                block
                            >
                                Watchlist
                            </Text>
                            <Text align="center" variant={"body4"} color={theme.colors.text} block>
                                Effortlessly track your favorite cryptocurrencies.
                            </Text>
                        </Col>
                        <Col xs={24} md={8} lg={8}>
                            <Backdrop2 img={PriceBG} />
                            <Text align="center" variant={"heading4"} style={{ margin: "1rem 0" }} block>
                                Price Alerts
                            </Text>
                            <Text align="center" variant={"body4"} block>
                                Get notified instantly when prices change.
                            </Text>
                        </Col>
                    </Row>
                </FeaturesList>
            </FeaturesContainer>
            <FeaturesYellowBG data-component={"Features"}>
                <Row align={"middle"} justify={"center"} gutter={{ xs: 0, lg: 90 }}>
                    <Col lg={13}>
                        <Text variant="heading3" font="bio">
                            Effortless portfolio management.
                        </Text>
                        <Text variant="body3" style={{ marginTop: "1.5rem" }}>
                            Our portfolio tracking feature allows you to monitor your crypto investments seamlessly.
                            Stay updated with real-time price changes and make informed decisions.
                        </Text>
                        <Row gutter={{ xxl: 24 }} style={{ marginTop: "2rem" }}>
                            <Col lg={12}>
                                <Image
                                    src={mode === "light" ? TrackIcon : TrackIconDark}
                                    width={48}
                                    height={48}
                                    alt={"track icon"}
                                />
                                <Text variant={"heading6"} font={"bio"} block>
                                    Track Assets
                                </Text>
                                <Text variant={"body4"} style={{ marginTop: "1rem" }}>
                                    Gain insights into your portfolio's performance and optimize your investment
                                    strategy.
                                </Text>
                            </Col>
                            <Col lg={12}>
                                <Image
                                    src={mode === "light" ? PriceIcon : PriceIconDark}
                                    width={48}
                                    height={48}
                                    alt={"price icon"}
                                />
                                <Text variant={"heading6"} font={"bio"} block>
                                    Stay Informed
                                </Text>
                                <Text variant={"body4"} style={{ marginTop: "1rem" }}>
                                    Receive alerts on price changes to never miss an opportunity.
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={9}>
                        <Backdrop3 mode={mode} />
                    </Col>
                </Row>
            </FeaturesYellowBG>
        </>
    );
};
