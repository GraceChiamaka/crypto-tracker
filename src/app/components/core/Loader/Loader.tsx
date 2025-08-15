import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div<{ $fullWidth: boolean; $transparent?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: ${({ $fullWidth }) => ($fullWidth ? "100vh" : "auto")};
    background: ${({ $transparent }) => ($transparent ? "transparent" : "#ffffff")};
    .spinner {
        box-sizing: border-box;
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        div {
            box-sizing: border-box;

            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            margin: 8px;
            border: 8px solid #7d67ff;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #7d67ff transparent transparent transparent;
        }

        div:nth-child(1) {
            animation-delay: -0.45s;
        }
        div:nth-child(2) {
            animation-delay: -0.3s;
        }
        div:nth-child(3) {
            animation-delay: -0.15s;
        }
        @keyframes lds-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

const StyledSpin = styled(Spin)`
    .ant-spin-dot-item {
        background: ${({ theme }) => theme.colors.white};
    }
`;

type LoaderProps = {
    fullWidth?: boolean;
    transparent?: boolean;
};

export const Loader = ({ fullWidth = false, transparent }: LoaderProps) => {
    return (
        <Container $fullWidth={fullWidth} $transparent={transparent}>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};
export const CustomSpin = () => {
    return <StyledSpin spinning />;
};
