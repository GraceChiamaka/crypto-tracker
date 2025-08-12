"use client";
import { Text, ArrowRightIcon, Loader, Error } from "@components/core";
import { SectionHeader, SectionActionButton, TableWrapper } from "./style";
import { useListCoinsQuery } from "@services/base";

const Activity = () => {
    const { isLoading, isError, isSuccess, data: CoinsData } = useListCoinsQuery("");

    if (isError) return <Error />;
    if (isLoading) return <Loader transparent />;

    return (
        isSuccess &&
        CoinsData && (
            <section data-component={"Dashboard-Activity"} style={{ marginBottom: "1.5rem" }}>
                <SectionHeader>
                    <Text variant="heading5" weight="semibold">
                        ACTIVITY
                    </Text>
                    <SectionActionButton>
                        <span>More</span>
                        <ArrowRightIcon />
                    </SectionActionButton>
                </SectionHeader>
                <TableWrapper>
                    <div style={{ padding: "20px", textAlign: "center" }}>
                        <Text variant={"heading5"}>Activity data will be displayed here</Text>
                    </div>
                </TableWrapper>
            </section>
        )
    );
};

export default Activity;
