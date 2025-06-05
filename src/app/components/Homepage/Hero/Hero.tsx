"use client";

import { Button, Text } from "@components/core";
import { Col, Row } from "antd";
import { Svg } from "@assets/svg";
import styled from "styled-components";
import Image from "next/image";

const { ComputerBG, DashboardIcon, DashboardBG } = Svg;

const HeroContainer = styled.div`
    background: ${({ theme }) => theme.colors.yellow[100]};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
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

const HeroBackdrop = styled.div`
    margin-top: "5rem";
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.media.tablet} {
        margin-top: 2.5rem;
        img {
            height: auto;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        margin-top: 2.5rem;
        img {
            height: auto;
        }
    }
`;

const HeroSection = styled.div`
    background: ${({ theme }: any) => theme.colorScheme.scheme2.background};
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

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export const Hero = () => {
    return (
        <>
            <HeroContainer>
                <Row justify={"center"}>
                    <Col lg={16} xxl={12}>
                        <Text align="center" variant={"heading1"} font={"bio"}>
                            Track Crypto Prices in Real Time Effortlessly
                        </Text>
                    </Col>
                    <Col lg={16} xxl={14}>
                        <Text variant={"body3"} align="center" style={{ marginTop: "1.5rem" }}>
                            Welcome to our all-in-one crypto price tracking application. Stay informed with real-time
                            updates, manage your portfolio, and set price alerts with ease.
                        </Text>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col xs={24} md={14} lg={10} xxl={8}>
                        <ButtonRow>
                            <Button variant={"default"} outline>
                                Learn More
                            </Button>
                            <Button variant={"secondary"} outline>
                                Sign up
                            </Button>
                        </ButtonRow>
                    </Col>
                </Row>
                <HeroBackdrop>
                    <Col lg={18}>
                        <Image src={ComputerBG} style={{ width: "100%" }} alt="crypto price image" />
                    </Col>
                </HeroBackdrop>
            </HeroContainer>
            <HeroSection>
                <Row gutter={{ lg: 12, xxl: 80 }} align={"middle"}>
                    <Col lg={11}>
                        <Image src={DashboardIcon} width={40} height={40} alt="explore icon" />
                        <Text variant={"heading3"} font="bio">
                            Explore Our Intuitive Dashboard for Real-Time Crypto Tracking
                        </Text>
                        <Text variant={"body3"} style={{ marginTop: "1.5rem" }}>
                            Our dashboard provides a seamless experience for monitoring cryptocurrency prices at a
                            glance. With real-time updates and customizable features, you can effortlessly manage your
                            investments and stay informed.
                        </Text>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Image src={DashboardBG} className="backdrop" width={640} height={640} alt="" />
                    </Col>
                </Row>
            </HeroSection>
        </>
    );
};
