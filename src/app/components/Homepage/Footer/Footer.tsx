import { Button, CustomInput, Text } from "@components/core";
import { Col, Row } from "antd";
import { Svg } from "@assets/svg";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@src/app/theme";

const { Facebook, Instagram, LinkedIn, Twitter, LogoWhite } = Svg;

const Container = styled.footer`
    background: ${({ theme }) => theme.colors.neutral[800]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    padding: ${({ theme }) => theme.spacing.custom(5)};
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
        .logo {
            margin-bottom: 1.5rem;
        }
    }
`;

const FooterLinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: flex-end;
    ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

const FooterContainer = styled.div`
    border-top: ${({ theme }) => theme.border.buttonWhite};
    padding-top: ${({ theme }) => theme.spacing.custom(2)};
`;

const FooterHeading = styled.p`
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontFamily.semibold};
    color: ${({ theme }) => theme.colors.neutral[100]};
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    font-size: ${({ theme }) => theme.fontSize.normal};
`;
const FooterList = styled.ul`
    list-style: none;
    li {
        color: ${({ theme }) => theme.colors.neutral[100]};
        font-family: ${({ theme }) => theme.fontFamily.regular};
        padding: ${({ theme }) => theme.spacing.double(0.5, 0)};
        font-size: ${({ theme }) => theme.fontSize.small};
    }
    ${({ theme }) => theme.media.mobile} {
        margin-bottom: 1.5rem;
    }
`;

export const Footer = () => {
    return (
        <Container data-container={"footer"}>
            <Row justify={"space-between"} style={{ marginBottom: "1.5rem" }}>
                <Col xs={24} lg={16} xxl={18}>
                    <Row justify={"space-between"} gutter={40}>
                        <Col lg={6} xxl={5}>
                            <Image src={LogoWhite} className="logo" width={180} height={60} alt={"logo"} />
                        </Col>
                        <Col xs={24} lg={16}>
                            <Row gutter={{ lg: 40 }}>
                                <Col xs={12} lg={6}>
                                    <FooterHeading>Get Started</FooterHeading>
                                    <FooterList>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Support</li>
                                        <li>Blog</li>
                                    </FooterList>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <FooterHeading>Resources</FooterHeading>

                                    <FooterList>
                                        <li>
                                            <a href="">Guides</a>
                                        </li>
                                        <li>
                                            <a href="">Webinars</a>
                                        </li>
                                        <li>
                                            <a href="">Case studies</a>
                                        </li>
                                        <li>
                                            <a href="">Testimonials</a>
                                        </li>
                                    </FooterList>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={8} xxl={6}>
                    <FooterHeading>Subscribe</FooterHeading>
                    <Text variant="body4" color={theme.colors.neutral[100]} block>
                        Join our newsletter for the latest updates and features.
                    </Text>
                    <Row gutter={{ lg: 12 }}>
                        <Col xs={24} lg={16} xxl={18}>
                            <CustomInput mode={"dark"} placeholder="Your email" />
                        </Col>
                        <Col lg={6}>
                            <Button variant="secondary">Join</Button>
                        </Col>
                    </Row>
                    <Text variant="body5" color={theme.colors.neutral[100]} block>
                        By subscribing, you agree to our Privacy Policy and consent to updates.
                    </Text>
                </Col>
            </Row>
            <FooterContainer>
                <Row justify={"space-between"} align={"middle"}>
                    <Col xs={24} lg={18} xxl={14}>
                        <Row justify={"space-between"}>
                            <Col xs={24} lg={10} xxl={8}>
                                <Text variant={"body4"} color={theme.colors.neutral[100]}>
                                    &copy;2025 cyphyr. All rights reserved.{" "}
                                </Text>
                            </Col>
                            <FooterLinksContainer>
                                <Link href={"/"}>
                                    <Text variant={"body4"} color={theme.colors.neutral[100]}>
                                        Privacy Policy
                                    </Text>
                                </Link>
                                <Link href={"/"}>
                                    <Text variant={"body4"} color={theme.colors.neutral[100]}>
                                        Terms of service
                                    </Text>
                                </Link>
                                <Link href={"/"}>
                                    <Text variant={"body4"} color={theme.colors.neutral[100]}>
                                        Cookie Settings
                                    </Text>
                                </Link>
                            </FooterLinksContainer>
                        </Row>
                    </Col>

                    <Col lg={6} xxl={6}>
                        <FooterLinksContainer>
                            <Link href={"/"}>
                                <Image src={Facebook} width={24} height={24} alt="social icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src={Instagram} width={24} height={24} alt="social icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src={LinkedIn} width={24} height={24} alt="social icon" />
                            </Link>
                            <Link href={"/"}>
                                <Image src={Twitter} width={24} height={24} alt="social icon" />
                            </Link>
                        </FooterLinksContainer>
                    </Col>
                </Row>
            </FooterContainer>
        </Container>
    );
};
