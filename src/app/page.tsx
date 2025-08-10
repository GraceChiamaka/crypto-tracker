"use client";
import { Nav, Loader } from "@components/core";
import { CTA, Hero, Features, Newsletter, Contact, Footer } from "@components/index";
import { useEffect, useState } from "react";
export default function Home() {
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

    return loading ? (
        <Loader fullWidth />
    ) : (
        <div>
            <Nav />
            <Hero />
            <Features />
            <CTA />
            <Newsletter variant={"default"} />
            {/* pricing block */}
            {/* events */}
            {/* contact */}
            <Contact />
            <Newsletter variant="news" />
            <Footer />
        </div>
    );
}
