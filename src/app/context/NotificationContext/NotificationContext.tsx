"use client";
import { useMemo, createContext, ReactNode, useContext } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import { Text } from "@components/core";
import { icons } from "./icons";
import { Svg } from "@assets/svg";
import Image from "next/image";

const { CloseIcon } = Svg;

type NotificationProps = {
    message: NotificationArgsProps["message"];
    description?: NotificationArgsProps["description"];
    duration?: NotificationArgsProps["duration"];
    type?: NotificationArgsProps["type"];
};

type NotificationCtxState = {
    openNotification: (props: NotificationArgsProps) => void;
};

export const NotificationContext = createContext({} as NotificationCtxState);

export const NotificationContextProvider = ({ children }: { children: ReactNode }) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = ({ message, description, type = "info", duration = 3 }: NotificationProps) => {
        api[type]({
            icon: icons[type],
            message: (
                <Text variant={"body3"} weight={"medium"} font={"sans"}>
                    {message}
                    {type === "success" && "🎉"}
                </Text>
            ),
            description: <Text variant={"body4"}>{description}</Text>,
            placement: "topRight",
            duration: duration,
            closeIcon: <Image src={CloseIcon} width={24} height={24} alt={"close notification"} />,
        });
    };

    const contextValue = useMemo(() => ({ name: "Ant Design", openNotification }), []);

    return (
        <NotificationContext.Provider value={contextValue}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = (): NotificationCtxState => {
    const context = useContext(NotificationContext);
    if (!context || typeof context.openNotification !== "function") {
        throw new Error("useAuthCtx must be used within an AuthCtx");
    }
    return context;
};
