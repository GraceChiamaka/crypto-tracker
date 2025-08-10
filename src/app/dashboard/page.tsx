"use client";

import { Activity } from "./components/Activity";
import { Assets } from "./components/Assets";

export default function Dashboard() {
    return (
        <>
            <Assets />
            <Activity />
        </>
    );
}
