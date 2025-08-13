"use client";

import { useEffect, useState } from "react";
import { Activity, Assets, Balances } from "./components/index";
import { Loader } from "@components/core";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (window !== undefined && document.readyState === "complete") {
            setLoading(false);
        } else {
            const onLoad = () => setLoading(false);
            window.addEventListener("load", onLoad);
            return () => window.removeEventListener("load", onLoad);
        }
    }, []);

    if (loading) return <Loader fullWidth />;

    return (
        <>
            <Balances />
            <Assets />
            <Activity />
        </>
    );
}

export const dynamic = "force-dynamic";
