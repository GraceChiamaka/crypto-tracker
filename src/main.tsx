import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AntThemeProvider } from "./theme/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import "./index.css";

import Router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <AntThemeProvider>
                <Router />
            </AntThemeProvider>
        </Provider>
    </StrictMode>,
);
