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
    transition: width 300ms ease-in, left 300ms ease-in;
    ${({ theme }) => theme.media.smallLaptop} {
        position: fixed;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(125, 103, 255, 0.4);
    }
    ${({ theme }) => theme.media.tablet} {
        position: fixed;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(125, 103, 255, 0.4);
    }
    ${({ theme }) => theme.media.mobile} {
        position: fixed;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(125, 103, 255, 0.4);
    }
`;
export const ContentContainer = styled.div<{ $collapse: boolean }>`
    height: 100%;
    width: calc(100% - ${({ $collapse }) => ($collapse ? "388px" : "526px")});
    position: absolute;
    right: 0;
    left: ${({ $collapse }) => ($collapse ? "120px" : "268px")};
    right: 268px;
    padding: 0;
    transition: width 300ms ease-in, right 300ms ease-in, left 300ms ease-in;
    ${({ theme }) => theme.media.smallLaptop} {
        position: absolute;
        width: calc(100% - ${({ $collapse }) => ($collapse ? "388px" : "268px")});
        left: ${({ $collapse }) => ($collapse ? "120px" : "0")};
    }
    ${({ theme }) => theme.media.tablet} {
        position: absolute;
        width: calc(100% - ${({ $collapse }) => ($collapse ? "120px" : "0px")});
        left: ${({ $collapse }) => ($collapse ? "120px" : "0")};
    }
    ${({ theme }) => theme.media.mobile} {
        position: absolute;
        width: calc(100% - ${({ $collapse }) => ($collapse ? "120px" : "0px")});
        left: ${({ $collapse }) => ($collapse ? "120px" : "0")};
    }
`;
export const ContentWrapper = styled.div`
    padding: 3rem;
    ${({ theme }) => theme.media.mobile} {
        padding: 1.5rem;
    }
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
    font-family: ${({ theme }) => theme.fontFamily.onest};
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
    ${({ theme }) => theme.media.tablet} {
        display: none;
    }
    ${({ theme }) => theme.media.mobile} {
        display: none;
    }
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
    margin-top: calc(100vh - 680px);
`;

export const StyledTopNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    flex-wrap: wrap;
    ${({ theme }) => theme.media.tablet} {
        padding: 1rem 1.5rem;
    }
    ${({ theme }) => theme.media.mobile} {
        padding: 1rem 1.5rem;
    }
`;

export const StyledSwitch = styled.div`
    padding: 0.5rem 1rem;
    gap: 2px;
    border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    border-radius: 4px;
`;

export const SwitchButton = styled.button<{ $active: boolean }>`
    background: ${({ theme, $active }) => ($active ? theme.colors.accent2 : theme.colors.background)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: ${({ theme, $active }) => ($active ? `0.5px solid ${theme.colors.primary} ` : "none")};
    box-shadow: ${({ $active }) => ($active ? "0 2px 4px rgba(125, 103, 255, 0.4)" : "none")};
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background: ${({ theme, $active }) => ($active ? "" : theme.colors.textAccent)};
    }
`;
