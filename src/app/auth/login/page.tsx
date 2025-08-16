"use client";
import { Button, Text, CustomSpin, CustomInput, PasswordInput } from "@components/core";
import { FormHeading, SignupContent } from "../style";
import { Col, Flex, Form, Row } from "antd";
import { useLoginMutation } from "@services/auth";
import { useRouter } from "next/navigation";
import { useNotificationContext } from "@context/NotificationContext";
import { useEffect } from "react";
import { useAppDispatch } from "@src/app/store";
import { userAction } from "@src/app/store/slices/users";
import { LoginPayload } from "@services/types";
import Link from "next/link";

const Login = () => {
    const router = useRouter();
    const { openNotification } = useNotificationContext();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

    const [login, { isLoading, isError, error, isSuccess, data: LoginData }] = useLoginMutation();

    useEffect(() => {
        if (isError) {
            const err = error && "data" in error && (error as any).data?.message && (error as any).data.message;
            openNotification({
                type: "error",
                message: "Login",
                description: err ?? "Something went wrong",
            });
        }
        if (isSuccess) {
            openNotification({
                type: "success",
                message: "Login",
                description: "Login successfull",
            });
            handleSuccess();
        }
    }, [isError, isSuccess, error]);

    const handleSuccess = () => {
        dispatch(userAction.setVerifiedUser({ data: LoginData.data }));
        router.push("/dashboard");
    };
    const handleLogin = (values: LoginPayload) => {
        login(values);
    };

    return (
        <SignupContent data-component={"ConfirmEmail"}>
            <Row justify={"center"}>
                <Col xs={20} md={20} lg={18} xl={12} xxl={8}>
                    <FormHeading>
                        <Text variant={"heading4"} weight="medium" font="geist" block>
                            Login
                        </Text>
                        <Text variant={"body4"} font="mono">
                            Please enter your login details
                        </Text>
                    </FormHeading>
                    <Form
                        layout="vertical"
                        initialValues={{ email: "", password: "" }}
                        onFinish={handleLogin}
                        requiredMark={false}
                        form={form}
                    >
                        <Form.Item
                            label={"Email"}
                            name={"email"}
                            rules={[{ required: true, message: "Please enter your email" }]}
                        >
                            <CustomInput />
                        </Form.Item>
                        <Form.Item
                            label={"Password"}
                            name={"password"}
                            rules={[{ required: true, message: "Please enter your password" }]}
                        >
                            <PasswordInput />
                        </Form.Item>

                        <Form.Item>
                            <Button type={"submit"} disabled={isLoading}>
                                Continue {isLoading && <CustomSpin />}
                            </Button>
                        </Form.Item>
                        <Flex align="center" justify="space-between">
                            <Flex align={"center"} gap={4}>
                                <Text variant={"body4"}>Don't have an account yet?</Text>
                                <Link href={"/auth/signup"}>
                                    <Text variant={"body4"} weight="semibold" font={"mono"}>
                                        Sign up
                                    </Text>
                                </Link>
                            </Flex>
                            <Flex>
                                <Link href={"/auth/forgot_password"}>
                                    <Text variant={"body4"} weight="semibold" font={"mono"}>
                                        Forgot Password?
                                    </Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Form>
                </Col>
            </Row>
        </SignupContent>
    );
};

export default Login;
