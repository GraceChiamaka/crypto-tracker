import { Avatar, Button, Text } from "@components/core";
import { Divider } from "antd";
import { ProfileFooter, ProfileContainer, ProfileRow, ProfileHeader, Label } from "./style";
import { CoinLabel } from "@src/app/dashboard/components/style";

const assetsList = [
    {
        label: "Bitcoin",
        amount: 23.5,
        ticker: "BTC",
    },
    {
        label: "Ethereum",
        amount: 190.45,
        ticker: "ETH",
    },
    {
        label: "Doge",
        amount: 239500,
        ticker: "DOGE",
    },
    {
        label: "Ripple",
        amount: 65100,
        ticker: "XRP",
    },
];

export const UserProfile = () => {
    return (
        <ProfileContainer>
            <Text variant={"body3"} weight="bold" align="center" block>
                Trader Profile
            </Text>
            <Avatar name="Johnny Cage" />
            <div>
                <ProfileHeader variant={"body3"} weight={"semibold"}>
                    Account
                </ProfileHeader>
                <ProfileRow>
                    <Label variant={"body4"} weight="medium">
                        Joined
                    </Label>

                    <Text variant={"body4"} align="right">
                        June 22, 2020
                    </Text>
                </ProfileRow>
                <ProfileRow>
                    <Label variant={"body4"} weight={"medium"}>
                        Assets value
                    </Label>

                    <Text variant={"body4"} align="right">
                        $1,328,240.00
                    </Text>
                </ProfileRow>
            </div>
            <Divider />
            <div>
                <ProfileHeader variant={"body3"} weight={"semibold"}>
                    Assets
                </ProfileHeader>
                {assetsList.map(({ label, amount, ticker }) => (
                    <ProfileRow key={label}>
                        <Label variant={"body4"} weight={"medium"}>
                            {label}
                        </Label>
                        <CoinLabel>
                            <Text variant={"body4"}>{amount}</Text>
                            <Label variant="body4">{ticker}</Label>
                        </CoinLabel>
                    </ProfileRow>
                ))}
            </div>

            <ProfileFooter>
                <Button>Trade Now</Button>
            </ProfileFooter>
        </ProfileContainer>
    );
};
