"use client";
import { Loader, StyledLayout } from "@components/core";
import { useSelector } from "../store";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { verifiedUser } = useSelector((state) => state.user);
    const router = useRouter();
    if (verifiedUser === null) {
        router.push("/auth/login");
        return <Loader fullWidth transparent />;
    }
    return <StyledLayout>{children}</StyledLayout>;
}
