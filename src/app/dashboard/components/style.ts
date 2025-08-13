import styled from "styled-components";
import { Text } from "@components/core";

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SectionContainer = styled.section`
    margin-bottom: 1.5rem;
    background: ${({ theme }) => theme.colors.accent};
    padding: ${({ theme }) => theme.spacing.double(1, 1.3)};
    box-shadow: 0 2px 4px rgba(125, 103, 255, 0.4);
    /* border-radius: 2px; */
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
    font-family: ${({ theme }) => theme.fontFamily.sans};
    svg {
        width: 18px;
        height: 16px;
    }
`;

export const TableActionButton = styled.button`
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

export const TablePriceValue = styled(Text)<{ $variant: "low" | "high" | "default" }>`
    color: ${({ theme, $variant }) =>
        $variant === "low" ? theme.colors.red : $variant === "high" ? theme.colors.green : theme.colors.muted};
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
        font-family: ${({ theme }) => theme.fontFamily.sans};
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
