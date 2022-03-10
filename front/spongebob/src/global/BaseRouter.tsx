import Dashboard from "page/Dashboard";
import Login from "page/Login";
import SignUp from "page/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Login />}></Route>

                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<SignUp />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
