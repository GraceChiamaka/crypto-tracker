"use client";
import { Button, Text, CustomSpin, PasswordInput } from "@components/core";
import { FormHeading, SignupContent } from "../style";
import { Col, Form, Row } from "antd";
import { useResetPasswordMutation } from "@services/auth";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useNotificationContext } from "@context/index";

type FormValues = {
    password: string;
    confirm_password: string;
};

const ResetPassword = () => {
    const [resetPassword, { isLoading, isSuccess, isError, error }] = useResetPasswordMutation();
    const [form] = Form.useForm();
    const { openNotification } = useNotificationContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const tokenParams = searchParams.get("token");

    useEffect(() => {
        if (isSuccess) {
            openNotification({
                type: "success",
                message: "Reset password",
                description: "Your password has been reset successfully, log in with new password",
            });
            handleSuccess();
        }
        if (isError) {
            const err = error && "data" in error && (error as any).data?.message && (error as any).data.message;
            openNotification({
                type: "error",
                message: "Reset password",
                description: err ?? "Something went wrong with reset",
            });
        }
    }, [isError, isSuccess]);

    const handleSuccess = () => {
        form.resetFields();
        router.push("/auth/login");
    };

    const handleSubmit = (values: FormValues) => {
        const payload = {
            password: values.password,
            token: tokenParams,
        };
        resetPassword(payload);
    };
    return (
        <SignupContent data-component={"ConfirmEmail"}>
            <Row justify={"center"}>
                <Col xs={20} md={20} lg={18} xl={10} xxl={8}>
                    <FormHeading>
                        <Text variant={"heading4"} weight="medium" font="geist" block>
                            Reset Password
                        </Text>
                        <Text variant={"body4"} font="mono">
                            Please enter your new password
                        </Text>
                    </FormHeading>
                    <Form
                        layout={"vertical"}
                        initialValues={{ password: "", confirm_password: "" }}
                        requiredMark={false}
                        onFinish={handleSubmit}
                        form={form}
                    >
                        <Form.Item
                            label={"Password"}
                            name={"password"}
                            rules={[{ required: true, message: "please enter a password " }]}
                        >
                            <PasswordInput />
                        </Form.Item>
                        <Form.Item
                            label={"Confirm Password"}
                            name={"confirm_password"}
                            rules={[
                                { required: true, message: "please enter a your password to confirm" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error("Passwords do not match!"));
                                    },
                                }),
                            ]}
                        >
                            <PasswordInput />
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

export default ResetPassword;
