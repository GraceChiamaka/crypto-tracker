"use client";
import { Button, CustomOtp, Text, CustomSpin } from "@components/core";
import { FormHeading } from "../style";
import { Col, Row, Space, message } from "antd";
import { useAppDispatch, useSelector } from "@src/app/store";
import { useConfirmEmailMutation } from "@services/auth";
import { useEffect } from "react";
import { userAction } from "@src/app/store/slices/users";
import { useRouter } from "next/navigation";

const Confirm = () => {
    const { newUser } = useSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [confirmEmail, { isLoading, isSuccess, isError, data: ConfirmEmailData }] = useConfirmEmailMutation();
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            messageApi.success("Email confirmed successfully!");
            dispatch(userAction.setVerifiedUser({ data: ConfirmEmailData.data }));
            router.push("/dashboard");
        }
        if (isError) {
            messageApi.error("something went wrong with confirmation");
        }
    }, [isError, isSuccess]);

    const handleInputComplete = (value: string[]) => {
        const payload = {
            token: value.join(""),
            email: newUser.email,
        };
        confirmEmail(payload);
    };
    return (
        <div>
            {contextHolder}
            <Row justify={"center"}>
                <Col xs={20} md={20} lg={18} xl={12} xxl={8}>
                    <FormHeading>
                        <Text variant={"heading4"} weight="medium" font="geist">
                            Enter verification code from email
                        </Text>
                        <Text variant={"body4"} font="mono">
                            Please enter the code we sent to your email
                        </Text>
                    </FormHeading>
                    <CustomOtp onInput={handleInputComplete} />
                    <Space />
                    <Button disabled={true}>Continue {isLoading && <CustomSpin />}</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Confirm;
