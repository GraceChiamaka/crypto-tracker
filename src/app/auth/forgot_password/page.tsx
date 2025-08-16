"use client";
import { Button, Text, CustomSpin, CustomInput } from "@components/core";
import { FormHeading, SignupContent } from "../style";
import { Col, Form, Row } from "antd";
import { useForgotPasswordMutation } from "@services/auth";
import { useEffect } from "react";

import { useNotificationContext } from "@context/index";

const ForgotPassword = () => {
    const [forgotPassword, { isLoading, isSuccess, isError, error }] = useForgotPasswordMutation();
    const [form] = Form.useForm();
    const { openNotification } = useNotificationContext();

    useEffect(() => {
        if (isSuccess) {
            openNotification({
                type: "success",
                message: "Forgot password",
                description: "Password reset link sent to your email",
            });
            form.resetFields();
        }
        if (isError) {
            const err = error && "data" in error && (error as any).data?.message && (error as any).data.message;
            openNotification({
                type: "error",
                message: "Forgot password",
                description: err ?? "Something went wrong with reset",
            });
        }
    }, [isError, isSuccess]);

    const handleInputComplete = ({ email }: { email: string }) => {
        forgotPassword(email);
    };
    return (
        <SignupContent data-component={"ConfirmEmail"}>
            <Row justify={"center"}>
                <Col xs={20} md={20} lg={18} xl={10} xxl={8}>
                    <FormHeading>
                        <Text variant={"heading4"} weight="medium" font="geist" block>
                            Forgot Password
                        </Text>
                        <Text variant={"body4"} font="mono">
                            Please enter your email to reset your password
                        </Text>
                    </FormHeading>
                    <Form
                        layout={"vertical"}
                        initialValues={{ email: "" }}
                        requiredMark={false}
                        onFinish={handleInputComplete}
                        form={form}
                    >
                        <Form.Item
                            label={"Email"}
                            name={"email"}
                            rules={[{ required: true, message: "please enter a valid email", type: "email" }]}
                        >
                            <CustomInput />
                        </Form.Item>
                        <Form.Item>
                            <Button type={"submit"} disabled={isLoading}>
                                Submit {isLoading && <CustomSpin />}
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </SignupContent>
    );
};

export default ForgotPassword;
