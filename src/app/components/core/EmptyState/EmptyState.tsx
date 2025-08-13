import styled from "styled-components";
import { Button } from "../Button";
import { Svg } from "@assets/svg";
import Image from "next/image";
import { Text } from "../Text";

const { WalletBg } = Svg;

type EmptyStateProps = {
    title: string;
    description?: string;
    actionLabel?: string;
    onClick?: () => void;
};

const Empty = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    img {
        object-fit: fill;
    }
    button {
        max-width: 200px;
        margin-top: 1rem;
    }
`;
export const EmptyState = ({ title, description, actionLabel, onClick }: EmptyStateProps) => {
    const handleClick = () => {
        if (onClick) onClick();
    };
    return (
        <Empty>
            <Image src={WalletBg} width={150} height={150} alt={"empty state"} />
            <Text variant="body3" block font="mono">
                {title}
            </Text>
            {description && (
                <Text variant="body3" block font="mono">
                    {description}
                </Text>
            )}
            {actionLabel && <Button onClick={handleClick}>{actionLabel}</Button>}
        </Empty>
    );
};
