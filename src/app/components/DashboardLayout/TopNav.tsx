import { Text } from "@components/core";
import { StyledTopNav, StyledSwitch, SwitchButton } from "./style";
import { useTheme } from "@hooks/useTheme";
import Image from "next/image";
import { Svg } from "@assets/svg";

const { LightModeIcon, DarkModeIcon } = Svg;

export const TopNav = () => {
    const { mode, toggleDarkMode } = useTheme();
    const onChange = () => {
        console.log(`switch to ${mode}`);
        toggleDarkMode();
    };
    const LightIcon = () => <Image src={LightModeIcon} width={18} height={18} alt={"light mode "} />;
    const DarkIcon = () => <Image src={DarkModeIcon} width={18} height={18} alt={"light mode "} />;
    return (
        <StyledTopNav>
            <Text variant={"heading4"}>Dashboard</Text>
            <div>
                <StyledSwitch>
                    <SwitchButton
                        $active={mode === "dark"}
                        title={"Dark mode"}
                        aria-label="Dark mode"
                        aria-roledescription="turns dark mode on"
                        onClick={onChange}
                        disabled={mode === "dark"}
                    >
                        <DarkIcon />
                    </SwitchButton>
                    <SwitchButton
                        $active={mode === "light"}
                        title={"Light mode"}
                        aria-label="Light mode"
                        aria-roledescription="turns dark mode off"
                        onClick={onChange}
                        disabled={mode === "light"}
                    >
                        <LightIcon />
                    </SwitchButton>
                </StyledSwitch>
            </div>
        </StyledTopNav>
    );
};
