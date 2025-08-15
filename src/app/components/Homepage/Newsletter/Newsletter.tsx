import { Button, Text, CustomInput } from "@components/core";
import { Row, Col } from "antd";
import { Svg } from "@assets/svg";
import styled from "styled-components";

const { SubscribeBG1 } = Svg;

const Container = styled.div`
    background: ${({ theme }) => theme.colors.accent2};
    padding: ${({ theme }) => theme.spacing.double(7, 5)};
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.media.customDesktop(1600)} {
        padding: ${({ theme }) => theme.spacing.double(7, 12)};
    }

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
const Backdrop = styled.div`
    background-image: url(${SubscribeBG1.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 510px;

    ${({ theme }) => theme.media.extraLargeLaptop} {
        background-size: contain;
        height: 320px;
    }
    ${({ theme }) => theme.media.customDesktop(1600)} {
        background-size: cover;
        height: 508px;
    }
    ${({ theme }) => theme.media.smallLaptop} {
        background-size: contain;
        height: 320px;
    }
    ${({ theme }) => theme.media.tablet} {
        background-size: contain;
        height: 320px;
    }
`;

export const Newsletter = () => {
    return (
        <Container data-component={"newsletter"}>
            <Row align={"middle"} gutter={{ xxl: 48 }}>
                <Col xs={24} md={24} lg={11} xxl={10}>
                    <Text variant="heading3" font="sans">
                        Stay Updated on Crypto Prices
                    </Text>
                    <Text variant="body3">
                        Sign up now to receive real-time alerts on cryptocurrency price changes directly to your inbox.
                    </Text>
                    <Row
                        align={"middle"}
                        gutter={{ xs: 6, lg: 3, xl: 16 }}
                        style={{ marginTop: "1rem", marginBottom: "1rem" }}
                    >
                        <Col xs={24} md={14} lg={16} xxl={16}>
                            <CustomInput placeholder="Enter your email" />
                        </Col>
                        <Col xs={24} md={6} lg={8}>
                            <Button>Sign up</Button>
                        </Col>
                    </Row>
                    <Text variant="body5">By clicking Sign Up, you agree to our Terms and Conditions.</Text>
                </Col>
                <Col xs={24} lg={12} xl={8} xxl={12}>
                    <Backdrop />
                </Col>
            </Row>
        </Container>
    );
};
