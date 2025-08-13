import styled from "styled-components";

export const Container = styled.nav`
    padding: ${({ theme }) => theme.spacing.double(1.2, 8)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 12px rgba(125, 103, 255, 0.35);
    margin-bottom: 1rem;
    ${({ theme }) => theme.media.customDesktop(1600)} {
        padding: ${({ theme }) => theme.spacing.double(1.2, 12)};
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(1.2, 2)};
        display: block;
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(1.2, 2)};
        display: block;
    }
`;
export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.medium};
    ${({ theme }) => theme.media.tablet} {
        display: block;
    }
    ${({ theme }) => theme.media.mobile} {
        display: block;
    }
`;
export const NavMenuContainer = styled.div<{ show: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.medium};

    ${({ theme }) => theme.media.smallLaptop} {
        a {
            display: inline-block;
        }
    }

    ${({ theme }) => theme.media.tablet} {
        display: ${({ show }) => (show ? "flex" : "none")};
        flex-direction: column;
        margin-top: 2rem;
        width: 100%;
        align-items: flex-start;
        gap: 0.8rem;
        transition: all 0.3s ease-in-out;
    }
    ${({ theme }) => theme.media.mobile} {
        display: ${({ show }) => (show ? "flex" : "none")};
        flex-direction: column;
        margin-top: 2rem;
        width: 100%;
        align-items: flex-start;
        gap: 0.8rem;
        transition: all 0.3s ease-in-out;
    }
`;
export const NavButtons = styled.div<{ show: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.medium};
    ${({ theme }) => theme.media.tablet} {
        display: ${({ show }) => (show ? "flex" : "none")};
        margin-top: 1rem;
    }
    ${({ theme }) => theme.media.mobile} {
        display: ${({ show }) => (show ? "flex" : "none")};
        flex-direction: column;
        margin-top: 1rem;
        a {
            display: block;
            width: 100%;
            button {
                width: 100%;
            }
        }
    }
`;

export const NavMenu = styled.div`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.normal};

    ${({ theme }) => theme.media.smallLaptop} {
        width: 100%;
        padding: ${({ theme }) => theme.spacing.double(0.8, 0)};
    }
    ${({ theme }) => theme.media.mobile} {
        width: 100%;
        padding: ${({ theme }) => theme.spacing.double(0.8, 0)};
    }
`;

export const NavMobileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const MenuButton = styled.button`
    height: 40px;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background};
    display: none;
    ${({ theme }) => theme.media.tablet} {
        display: flex;
    }
    ${({ theme }) => theme.media.mobile} {
        display: flex;
    }
`;
