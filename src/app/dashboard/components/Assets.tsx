import { Text, ArrowRightIcon } from "@components/core";
import { SectionHeader, SectionActionButton } from "./style";
import { Card, EmptyCard } from "./Card";

const Assets = () => {
    return (
        <section data-component={"Dashboard-Assets"} style={{ marginBottom: "3rem" }}>
            <SectionHeader>
                <Text variant="heading5" weight="semibold">
                    ASSETS
                </Text>
                <SectionActionButton>
                    <span> More </span>
                    <ArrowRightIcon />
                </SectionActionButton>
            </SectionHeader>
            <section>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
                    <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
                        <Card variant="default" amount={"1,650"} />
                    </div>
                    <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
                        <Card amount={"2,500"} variant="secondary" />
                    </div>
                    <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
                        <EmptyCard />
                    </div>
                </div>
            </section>
        </section>
    );
};
export default Assets;
