import styled from "styled-components";
import { Text } from "@components/core";

export const Logo = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LayoutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
`;

export const SidebarContainer = styled.div<{ $collapse: boolean }>`
    width: ${({ $collapse }) => ($collapse ? "120px" : "268px")};
    height: 100vh;
    left: 0;
    background: ${({ theme }) => theme.colors.accent};
    position: fixed;
    overflow-y: auto;
`;
export const ToggleButton = styled.button`
    cursor: pointer;
    width: 2.5;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    flex: 1;
    background: transparent;
`;
export const SidebarMenuContainer = styled.div`
    margin-top: 3rem;
    padding-left: 2.5rem;
`;
export const SidebarMenuItem = styled.div<{ $active: boolean }>`
    padding: 0.2rem 0;
    position: relative;
    margin-bottom: 1.5rem;
    color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.muted)} !important;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
        width: 2rem;
        height: 2rem;
    }
    &::after {
        content: "";
        border-right: ${({ theme, $active }) => ($active ? `2px solid ${theme.colors.primary}` : "none")};
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
    }
    &:hover {
        background: ${({ theme }) => theme.colors.accent2};
    }
`;

export const FooterButton = styled.div`
    position: absolute;
    bottom: 24px;
    width: 100%;
    padding: 0 2rem;
    left: 0;
    right: 0;
`;

export const ProfileContainer = styled.div`
    width: 268px;
    height: 100vh;
    right: 0;
    background: ${({ theme }) => theme.colors.secondary};
    border-left: ${({ theme }) => `1px solid ${theme.colors.accent2}`};
    position: fixed;
    padding: 1.5rem;
    overflow-y: auto;
`;

export const ProfileHeader = styled(Text)`
    margin-bottom: 1.5rem;
    display: block;
`;
export const Label = styled(Text)`
    display: block;
    color: ${({ theme }) => theme.colors.textAccent};
`;
export const ProfileRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.3rem;
`;
export const ProfileFooter = styled.div`
    margin-top: 4rem;
`;

export const ContentContainer = styled.div<{ $collapse: boolean }>`
    height: 100%;
    width: calc(100% - ${({ $collapse }) => ($collapse ? "388px" : "526px")});
    position: absolute;
    right: 0;
    left: ${({ $collapse }) => ($collapse ? "120px" : "268px")};
    right: 268px;
    padding: 3rem;
`;
