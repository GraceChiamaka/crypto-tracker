import Image from "next/image";
import { Svg } from "@assets/svg";
import { DashboardIcon, PortfolioIcon, WatchlistIcon, AlertsIcon } from "../core/Icons";
import { Logo, SidebarContainer, SidebarMenuContainer, SidebarMenuItem, FooterButton, ToggleButton } from "./style";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@src/app/theme";
import { Button } from "../core/Button";
import Link from "next/link";

const { LogoWhite, ToggleIcon, LogoSmall } = Svg;

const MenuList = [
    {
        label: "Dashboard",
        key: "dashboard",
        url: "/dashboard",
        icon: DashboardIcon,
    },
    {
        label: "Portfolio",
        key: "portfolio",
        url: "/portfolio",
        icon: PortfolioIcon,
    },
    {
        label: "Watchlist",
        key: "watchlist",
        url: "/watchlist",
        icon: WatchlistIcon,
    },
    {
        label: "Alerts",
        key: "alerts",
        url: "/alerts",
        icon: AlertsIcon,
    },
    // {
    //     label: "Settings",
    //     key: "settings",
    //     url: "/settings",
    //     icon: DashboardIcon,
    // },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const { theme, isCollapsed, toggleSidebar } = useThemeContext();

    return (
        <SidebarContainer $collapse={isCollapsed}>
            <Logo>
                <Image
                    src={isCollapsed ? LogoSmall : LogoWhite}
                    width={isCollapsed ? 48 : 160}
                    height={isCollapsed ? 48 : 64}
                    alt={"logo"}
                />
                <ToggleButton onClick={toggleSidebar}>
                    <Image src={ToggleIcon} width={40} height={40} alt={"toggle"} />
                </ToggleButton>
            </Logo>
            <SidebarMenuContainer>
                {MenuList.map(({ key, label, url, icon: Icon }) => {
                    const isActive = pathname === url;
                    return (
                        <Link key={key} href={url}>
                            <SidebarMenuItem $active={isActive}>
                                <Icon color={isActive ? theme.colors.primary : theme.colors.muted} />
                                {!isCollapsed && label}
                            </SidebarMenuItem>
                        </Link>
                    );
                })}
                <FooterButton>
                    <Button>Guide</Button>
                </FooterButton>
            </SidebarMenuContainer>
        </SidebarContainer>
    );
};
