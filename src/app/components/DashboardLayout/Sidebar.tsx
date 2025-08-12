import { Svg } from "@assets/svg";
import { DashboardIcon, PortfolioIcon, WatchlistIcon, AlertsIcon } from "../core/Icons";
import { Logo, SidebarContainer, SidebarMenuContainer, SidebarMenuItem, FooterButton, ToggleButton } from "./style";
import { usePathname } from "next/navigation";
import { Button } from "../core/Button";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@hooks/useTheme";
const { LogoWhite, ToggleIcon, LogoSmall, LogoBlack, HelpIcon } = Svg;

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
        url: "/dashboard/portfolio",
        icon: PortfolioIcon,
    },
    {
        label: "Watchlist",
        key: "watchlist",
        url: "/dashboard/watchlist",
        icon: WatchlistIcon,
    },
    {
        label: "Alerts",
        key: "alerts",
        url: "/dashboard/alerts",
        icon: AlertsIcon,
    },
    {
        label: "Settings",
        key: "settings",
        url: "/dashboard/settings",
        icon: DashboardIcon,
    },
];

export const Sidebar = () => {
    const { mode, isCollapsed, toggleSidebar, theme } = useTheme();
    const pathname = usePathname();
    const logoImage = () => {
        if (isCollapsed) {
            return LogoSmall;
        } else {
            if (mode === "dark") return LogoBlack;
            return LogoWhite;
        }
    };

    return (
        <SidebarContainer data-component={"Sidebar"} $collapse={isCollapsed}>
            <Logo>
                <Image src={logoImage()} width={isCollapsed ? 48 : 160} height={isCollapsed ? 48 : 64} alt={"logo"} />
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
                    <Button>
                        {isCollapsed ? <Image src={HelpIcon} width={20} height={20} alt={"Guide"} /> : "Guide"}
                    </Button>
                </FooterButton>
            </SidebarMenuContainer>
        </SidebarContainer>
    );
};
