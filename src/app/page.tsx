"use client";
import { Nav, Loader } from "@components/core";

import { CTA, Hero, Features, Newsletter, Contact, Footer } from "@components/index";
import { useEffect, useState } from "react";
import { useTheme } from "@hooks/useTheme";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const { mode } = useTheme();

    useEffect(() => {
        if (window !== undefined && document.readyState === "complete") {
            setLoading(false);
        } else {
            const onLoad = () => setLoading(false);
            window.addEventListener("load", onLoad);
            return () => window.removeEventListener("load", onLoad);
        }
    }, []);

    return loading ? (
        <Loader fullWidth />
    ) : (
        <div>
            <Nav mode={mode} />
            <Hero mode={mode} />
            <Features mode={mode} />
            <CTA />
            <Newsletter />
            <Contact />
            <Footer />
        </div>
    );
}
