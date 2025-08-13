import { Text, ArrowRightIcon, EmptyCard } from "@components/core";
import { SectionHeader, SectionActionButton, SectionContainer } from "./style";
import { Row, Col } from "antd";

export const Assets = () => {
    return (
        <SectionContainer data-component={"Dashboard-Assets"}>
            <SectionHeader>
                <Text variant="body3" weight="medium" font="mono">
                    Watchlist
                </Text>
                <SectionActionButton>
                    <span> More </span>
                    <ArrowRightIcon />
                </SectionActionButton>
            </SectionHeader>
            <section>
                <Row justify={"space-between"} gutter={18}>
                    {/* <Col xs={24} md={12} xl={8}>
                        <Card variant="default" amount={"1,650"} />
                    </Col>
                    <Col xs={24} md={12} xl={8}>
                        <Card amount={"2,500"} variant="secondary" />
                    </Col> */}
                    <Col xs={24} md={24} xl={8}>
                        <EmptyCard title={"Add assets to watch"} />
                    </Col>
                </Row>
            </section>
        </SectionContainer>
    );
};
export default Assets;
