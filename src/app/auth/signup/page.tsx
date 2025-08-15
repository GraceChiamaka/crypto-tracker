"use client";
import { FormHeading, SignupContent } from "../style";
import { Button, CustomInput, Text, PasswordInput, CustomSelect, Error, Loader } from "@components/core";
import { Col, Flex, Form, Row } from "antd";
import { useGetCurrenciesQuery, useSignupMutation } from "@services/index";
import Image from "next/image";
import { useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@src/app/store";
import { userAction } from "@src/app/store/slices/users";
import { useNotificationContext } from "@context/NotificationContext";
import Link from "next/link";

type CurrencyData = {
    flag_code: string;
    currency: string;
    country_code: string;
    id: string;
};

type SignupValues = {
    email: string;
    password: string;
    full_name: string;
    currency: string;
};

const Signup = () => {
    const { isError, isLoading, isSuccess, data: Currencies } = useGetCurrenciesQuery("");
    const [
        signup,
        { isError: isSignupError, isLoading: isSignupLoading, isSuccess: isSignupSuccess, data: SignupData, error },
    ] = useSignupMutation();
    const [form] = Form.useForm();
    const { openNotification } = useNotificationContext();

    const router = useRouter();
    const dispatch = useAppDispatch();

    const currenciesList = useMemo(() => {
        if (isSuccess && Currencies) {
            return Currencies.data.map(({ flag_code, currency, id, country_code }: CurrencyData) => ({
                label: (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <Image
                            src={`https://flagcdn.com/16x12/${flag_code.toLowerCase()}.png`}
                            width={16}
                            height={16}
                            alt={`country_code flag`}
                        />
                        <Text variant={"body5"}>{currency}</Text>
                    </div>
                ),
                value: id,
                key: country_code,
            }));
        }
    }, [isSuccess, Currencies]);

    useEffect(() => {
        if (isSignupError) {
            const err = error && "data" in error && (error as any).data?.message && (error as any).data.message;
            openNotification({
                type: "error",
                message: "Signup",
                description: err ?? "Something went wrong creating your account, please try again",
            });
        }
        if (isSignupSuccess) {
            openNotification({
                type: "success",
                message: "Signup",
                description: "Your account has been created successfully",
            });
            handleSuccess();
        }
    }, [isSignupError, isSignupSuccess]);

    const handleSuccess = () => {
        dispatch(userAction.setNewUserInfo({ data: SignupData.data }));
        router.push("/auth/confirm");
    };

    if (isError) {
        return <Error retryLabel={"Something went wrong fetching currencies "} />;
    }
    if (isLoading) {
        return <Loader transparent />;
    }

    const handleSubmit = (values: SignupValues) => {
        signup(values);
    };

    if (isSuccess && currenciesList) {
        return (
            <SignupContent data-component={"SignupContent"}>
                <Row justify={"center"}>
                    <Col xs={20} md={20} lg={18} xl={12} xxl={8}>
                        <FormHeading>
                            <Text variant={"heading3"} font="geist">
                                SIGNUP
                            </Text>
                            <Text variant={"body3"} font={"mono"}>
                                Fill the form to create an account
                            </Text>
                        </FormHeading>

                        <Form
                            initialValues={{
                                email: "",
                                full_name: "",
                                password: "",
                                currency: "",
                            }}
                            form={form}
                            onFinish={handleSubmit}
                            layout="vertical"
                            requiredMark={false}
                        >
                            <Form.Item
                                label={"Email"}
                                name={"email"}
                                rules={[{ required: true, message: "Please enter your email ", type: "email" }]}
                            >
                                <CustomInput rounded />
                            </Form.Item>
                            <Form.Item
                                label={"Full name"}
                                name={"full_name"}
                                rules={[{ required: true, message: "Please enter your full name " }]}
                            >
                                <CustomInput rounded />
                            </Form.Item>

                            <Form.Item
                                label={"Local currency"}
                                name={"currency"}
                                rules={[{ required: true, message: "Please select your currency " }]}
                            >
                                <CustomSelect
                                    showSearch
                                    filterOption={(input, option) =>
                                        (option?.key ?? "").toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={currenciesList}
                                />
                            </Form.Item>
                            <Form.Item
                                label={"Password"}
                                name={"password"}
                                rules={[{ required: true, message: "Please enter your password " }]}
                            >
                                <PasswordInput />
                            </Form.Item>
                            <Form.Item>
                                <Button type={"submit"} disabled={isSignupLoading}>
                                    Submit
                                </Button>
                            </Form.Item>
                            <Flex align="center" gap={4}>
                                <Text variant="body4">Already have an account?</Text>
                                <Link href={"/auth/login"}>
                                    <Text variant="body4" weight="semibold" font={"mono"}>
                                        Sign in
                                    </Text>
                                </Link>
                            </Flex>
                        </Form>
                    </Col>
                </Row>
            </SignupContent>
        );
    }
};
export default Signup;
