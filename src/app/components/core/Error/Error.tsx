import styled from "styled-components";
import { Svg } from "@assets/svg";
import Image from "next/image";
import { Text } from "../Text";
import { Button } from "../Button";

const { ErrorBg1 } = Svg;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;
const ButtonContainer = styled.div`
    width: 200px;
`;

type ErrorProps = {
    retryLabel: string;
    description?: string;
    showRetry?: boolean;
    retryAction?: () => void;
};
export const Error = ({
    retryLabel = "Try again",
    description = "Something went wrong",
    retryAction,
    showRetry,
}: ErrorProps) => {
    return (
        <Container>
            <Image src={ErrorBg1} width={180} height={180} alt="eror" />
            <Text variant="heading6">{description}</Text>
            {showRetry && (
                <ButtonContainer>
                    <Button onClick={retryAction}>{retryLabel}</Button>
                </ButtonContainer>
            )}
        </Container>
    );
};
