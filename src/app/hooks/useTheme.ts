import { useAppDispatch, useSelector } from "@store/index";
import { toggleMode, toggleSidebar as toggleSidebarAction } from "../store/slices/ui";
import { lightTheme, darkTheme } from "@theme/index";

export const useTheme = () => {
    const { mode, sidebarCollapsed } = useSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    const toggleDarkMode = () => dispatch(toggleMode());

    const toggleSidebar = () => dispatch(toggleSidebarAction());

    return {
        mode,
        isCollapsed: sidebarCollapsed,
        theme: mode === "dark" ? darkTheme : lightTheme,
        toggleDarkMode,
        toggleSidebar,
    };
};
