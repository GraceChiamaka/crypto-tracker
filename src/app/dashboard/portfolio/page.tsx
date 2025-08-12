"use client";

import { EmptyState } from "./components/style";

export default function Portfolio() {
    return <EmptyState>Portfolio</EmptyState>;
}

// Force dynamic rendering to prevent SSR issues
export const dynamic = "force-dynamic";
