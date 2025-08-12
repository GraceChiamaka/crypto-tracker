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
export const Error = ({ retryLabel = "Try again", label = "Something went wrong" }) => {
    return (
        <Container>
            <Image src={ErrorBg1} width={180} height={180} alt="eror" />
            <Text variant="heading5">{label}</Text>
            <Button>{retryLabel}</Button>
        </Container>
    );
};
