import { Link, useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.double(1, 7)};
    a {
        display: flex;
        flex: 1;
        text-decoration: none;
    }
`;
const NavButton = styled.button<{ active?: boolean }>`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.double(1, 0)};
    background: ${({ theme, active }) => (active ? theme.colors.blue[100] : theme.colors.neutral.grey[100])};
    border: ${({ theme }) => theme.border.custom("1px", theme.colors.neutral.grey[50])};
    cursor: pointer;
    border-radius: 4px;
    color: ${({ theme, active }) => (active ? theme.colors.blue[200] : theme.colors.neutral.grey[500])};
    font-weight: 500;
    font-size: 1rem;
    &:hover {
        background: ${({ theme }) => theme.colors.blue[300]};
    }
`;
const items = [
    { label: "Market", key: "market", url: "/" },
    {
        key: "portfolio",
        label: "Portfolio",
        url: "/portfolio",
    },
    {
        key: "charts",
        label: "Charts",
        url: "/charts",
    },
    {
        key: "alerts",
        label: "Alerts",
        url: "/alerts",
    },
];
export const TopNav = () => {
    const { pathname } = useLocation();
    console.log(location.pathname);

    return (
        <Container>
            {items.map(({ key, label, url }) => (
                <Link key={key} to={url}>
                    <NavButton active={pathname === url}>{label}</NavButton>
                </Link>
            ))}
        </Container>
    );
};
