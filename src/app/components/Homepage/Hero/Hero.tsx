"use client";

import { Button, Text } from "@components/core";
import { Col, Row } from "antd";
import { Svg } from "@assets/svg";
import styled from "styled-components";
import Image from "next/image";
import { HeroContainer, HeroSection, ButtonRow } from "./style";
const { ComputerBG, DashboardIcon, HeroBackdropDark, HeroBackdropLight } = Svg;

export const Hero = ({ mode = "light" }) => {
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
                    <Col xs={24} md={6} lg={6} xxl={4}>
                        <ButtonRow>
                            <Button variant={"secondary"} outline>
                                Jump Right In
                            </Button>
                        </ButtonRow>
                    </Col>
                </Row>
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
                        <Image
                            src={mode === "light" ? HeroBackdropLight : HeroBackdropDark}
                            className="backdrop"
                            width={640}
                            height={640}
                            alt=""
                        />
                    </Col>
                </Row>
            </HeroSection>
        </>
    );
};
