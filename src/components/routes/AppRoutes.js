import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from "../../pages/authentication/Auth";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Admin from "../../pages/admin/Admin";

const AppRoute=()=>{

    return (
        <Router>

            <Routes>
                <Route exact path="/login" element={<AuthPage/>}  />

                <Route exact path="/" element={<LandingPage/>}  />

                <Route exact path="/admin" element={<Admin/>}  />


            </Routes>

        </Router>

    )

}

export default AppRoute;