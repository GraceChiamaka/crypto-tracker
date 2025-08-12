import { Svg } from "@assets/svg";
import {
    CardContainer,
    CardBottom,
    CardTop,
    PriceLabel,
    PriceValue,
    CoinValue,
    FlipButton,
    EmptyCardContainer,
} from "./style";
import Image from "next/image";
import { Text } from "@components/core";

const { SwapIcon, SwapIconWhite, PlusIcon } = Svg;

type CardProps = {
    variant: "default" | "secondary";
    amount: string;
};

export const Card = ({ amount, variant = "default" }: CardProps) => {
    return (
        <CardContainer $variant={variant}>
            <CardTop>
                <div>
                    <CoinValue variant="heading6" weight="semibold" $containerVariant={variant}>
                        $
                    </CoinValue>
                    <CoinValue variant="heading3" weight="bold" $containerVariant={variant}>
                        {amount}
                    </CoinValue>
                </div>
                <div>
                    <FlipButton>
                        <Image
                            src={variant === "default" ? SwapIconWhite : SwapIcon}
                            width={24}
                            height={24}
                            alt={"toggle view"}
                        />
                    </FlipButton>
                </div>
            </CardTop>
            <CardBottom>
                <div>
                    <PriceLabel variant={"body4"} weight="medium" $containerVariant={variant} block>
                        5M
                    </PriceLabel>
                    <PriceValue variant={"body4"} $variant={"high"}>
                        +2.5%
                    </PriceValue>
                </div>
                <div>
                    <PriceLabel variant={"body4"} weight="medium" $containerVariant={variant} block>
                        24H
                    </PriceLabel>
                    <PriceValue variant={"body4"} $variant={"low"}>
                        -12.5%
                    </PriceValue>
                </div>
                <div>
                    <PriceLabel variant={"body4"} weight="medium" $containerVariant={variant} block>
                        MCap
                    </PriceLabel>
                    <PriceValue variant={"body4"} $variant="default">
                        +2.5%
                    </PriceValue>
                </div>
            </CardBottom>
        </CardContainer>
    );
};
export const EmptyCard = () => {
    return (
        <EmptyCardContainer>
            <FlipButton>
                <Image src={PlusIcon} width={24} height={24} alt={"add assets icon"} />
            </FlipButton>
            <Text variant="body4" weight="medium">
                New Asset
            </Text>
        </EmptyCardContainer>
    );
};
