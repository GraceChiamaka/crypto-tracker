import styled from "styled-components";
import { Text } from "@components/core";

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SectionActionButton = styled.button`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.normal};
    gap: 0.5rem;
    background: transparent;
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    svg {
        width: 18px;
        height: 16px;
    }
`;

export const CardContainer = styled.div<{ $variant: "default" | "secondary" }>`
    background: ${({ theme, $variant }) => ($variant === "default" ? theme.colors.primary : theme.colors.accent)};
    padding: ${({ theme }) => theme.spacing.tiny};
    border: ${({ theme }) => theme.border};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    min-height: 120px;
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
        $containerVariant === "default" ? theme.colors.secondary : theme.colors.primary};
`;
export const PriceValue = styled(Text)<{ $variant: "low" | "high" | "default" }>`
    color: ${({ theme, $variant }) =>
        $variant === "low" ? theme.colors.red : $variant === "high" ? theme.colors.green : theme.colors.muted};
`;

export const EmptyCardContainer = styled.div`
    height: 120px;
    border: ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.5rem;
    gap: 4px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colors.accent2};
    }
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
    ${({ theme }) => theme.media.customDesktop(1600)} {
        height: 112px;
    }
`;
export const CoinLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;
export const TableWrapper = styled.div`
    .ant-table-wrapper,
    .ant-table {
        background: transparent;
        font-family: ${({ theme }) => theme.fontFamily.regular};
        color: ${({ theme }) => theme.colors.text};
        thead {
            tr {
                th {
                    background: transparent;
                    color: ${({ theme }) => theme.colors.muted} !important;
                    border-bottom: ${({ theme }) => `1px solid ${theme.colors.accent}`};
                    &::before {
                        display: none;
                    }
                }
            }
        }
        .ant-table-cell-row-hover {
            background: ${({ theme }) => theme.colors.accent} !important;
        }
        tbody {
            td {
                border-color: ${({ theme }) => theme.colors.accent};
            }
        }

        .ant-pagination-item {
            background: ${({ theme }) => theme.colors.background} !important;
            color: ${({ theme }) => theme.colors.text} !important;
            border: ${({ theme }) => `1px solid ${theme.colors.accent2}`} !important;
            a {
                color: ${({ theme }) => theme.colors.text} !important;
            }
        }
        .ant-pagination-item-active {
            background: ${({ theme }) => theme.colors.accent2} !important;
        }
        .ant-pagination-options .ant-select-selector {
            background: ${({ theme }) => theme.colors.accent2};
            border: ${({ theme }) => `1px solid ${theme.colors.accent2}`} !important;
            color: ${({ theme }) => theme.colors.text} !important;
        }
        ${({ theme }) => theme.media.mobile} {
            overflow-x: auto;
        }
    }
`;
