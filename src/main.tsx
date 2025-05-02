import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AntThemeProvider } from "./theme/theme-provider.tsx";
import "./index.css";

import Router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AntThemeProvider>
            <Router />
        </AntThemeProvider>
    </StrictMode>,
);
