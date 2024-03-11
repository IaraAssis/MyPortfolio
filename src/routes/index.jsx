import { Route, Routes } from "react-router-dom";
import { HomePage } from "../componets/pages/HomePage";

export const RouteMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};