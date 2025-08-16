"use client";
import { Button, CustomOtp, Text, CustomSpin } from "@components/core";
import { FormHeading, SignupContent } from "../style";
import { Col, Row } from "antd";
import { useAppDispatch, useSelector } from "@src/app/store";
import { useConfirmEmailMutation } from "@services/auth";
import { useEffect } from "react";
import { userAction } from "@src/app/store/slices/users";
import { useRouter } from "next/navigation";
import { useNotificationContext } from "@context/index";

const Confirm = () => {
    const { newUser } = useSelector((state) => state.user);
    const [confirmEmail, { isLoading, isSuccess, isError, data: ConfirmEmailData, error }] = useConfirmEmailMutation();

    const { openNotification } = useNotificationContext();
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            openNotification({
                type: "success",
                message: "Confirm email",
                description: "Email confirmed successfully",
            });
            handleSuccess();
        }
        if (isError) {
            const err = error && "data" in error && (error as any).data?.message && (error as any).data.message;
            openNotification({
                type: "error",
                message: "Confirm email",
                description: err ?? "Something went wrong with confirmation",
            });
        }
    }, [isError, isSuccess]);

    const handleSuccess = () => {
        dispatch(userAction.setVerifiedUser({ data: ConfirmEmailData.data }));
        router.push("/dashboard");
    };

    const handleInputComplete = (value: string[]) => {
        const payload = {
            token: value.join(""),
            email: newUser.email,
        };
        confirmEmail(payload);
    };
    return (
        <SignupContent data-component={"ConfirmEmail"}>
            <Row justify={"center"}>
                <Col xs={20} md={20} lg={18} xl={10} xxl={8}>
                    <FormHeading>
                        <Text variant={"heading4"} weight="medium" font="geist" block>
                            Enter verification code from email
                        </Text>
                        <Text variant={"body4"} font="mono">
                            Please enter the code we sent to your email
                        </Text>
                    </FormHeading>
                    <CustomOtp onInput={handleInputComplete} />
                    <Button disabled={true}>Continue {isLoading && <CustomSpin />}</Button>
                </Col>
            </Row>
        </SignupContent>
    );
};

export default Confirm;
