import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Portfolio, Charts, Alerts } from "../containers";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={"alerts"} element={<Alerts />} />
                <Route path={"charts"} element={<Charts />} />
                <Route path={"portfolio"} element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
