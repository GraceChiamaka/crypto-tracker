import styled from "styled-components";
import { Text } from "../Text";

export const CardContainer = styled.div<{ $variant: "default" | "secondary" }>`
    background: ${({ theme, $variant }) => ($variant === "default" ? theme.colors.primary : theme.colors.accent)};
    padding: ${({ theme }) => theme.spacing.tiny};
    border: ${({ theme }) => theme.border};
    /* border-radius: 0.5rem; */
    display: flex;
    flex-direction: column;
    height: 140px;
    justify-content: space-between;
    ${({ theme }) => theme.media.customDesktop(1600)} {
        min-height: 112px;
    }
    ${({ theme }) => theme.media.smallLaptop} {
        margin-bottom: 1rem;
    }
    ${({ theme }) => theme.media.tablet} {
        margin-bottom: 1rem;
    }
    ${({ theme }) => theme.media.mobile} {
        margin-bottom: 1rem;
    }
`;

export const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const FlipButton = styled.button`
    background: transparent;
    width: ${({ theme }) => theme.spacing["2xl"]};
    height: ${({ theme }) => theme.spacing["2xl"]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: ${({ theme }) => theme.border};
    cursor: pointer;
`;
export const CardBottom = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 6px;
    justify-content: space-between;
    flex: 1;
`;
export const PriceLabel = styled(Text)<{ $containerVariant: "default" | "secondary" }>`
    color: ${({ theme, $containerVariant }) =>
        $containerVariant === "default" ? theme.colors.secondary : theme.colors.text};
`;

export const CoinValue = styled(Text)<{ $containerVariant: "default" | "secondary" }>`
    color: ${({ theme, $containerVariant }) =>
        $containerVariant === "default" ? theme.colors.white : theme.colors.primary};
`;
export const PriceValue = styled(Text)<{ $variant: "low" | "high" | "default" }>`
    color: ${({ theme, $variant }) =>
        $variant === "low" ? theme.colors.red : $variant === "high" ? theme.colors.green : theme.colors.muted};
`;

export const EmptyCardContainer = styled.div`
    max-height: 140px;
    height: 140px;
    border: ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colors.accent2};
    }
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

/**
 * Balance cards
 *
 */

export const BalanceCardContainer = styled.div<{ $noBorder?: boolean }>`
    height: 80px;
    border-right: ${({ theme, $noBorder }) => ($noBorder ? "none" : `1px solid ${theme.colors.textAccent}`)};
    padding: 0.5rem;
`;
