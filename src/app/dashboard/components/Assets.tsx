import { Text, ArrowRightIcon } from "@components/core";
import { Row, Col } from "antd";
import { SectionHeader, SectionActionButton } from "./style";
import { Card, EmptyCard } from "./Card";

export const Assets = () => {
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
                <Row gutter={18}>
                    <Col xs={24} md={12} xl={8}>
                        <Card variant="default" amount={"1,650"} />
                    </Col>
                    <Col xs={24} md={12} xl={8}>
                        <Card amount={"2,500"} variant="secondary" />
                    </Col>
                    <Col xs={24} md={24} xl={8}>
                        <EmptyCard />
                    </Col>
                </Row>
            </section>
        </section>
    );
};
