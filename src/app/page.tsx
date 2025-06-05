"use client";
import { Nav } from "@components/core";
import { CTA, Hero, Features, Newsletter, Contact, Footer } from "@components/index";
export default function Home() {
    return (
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
