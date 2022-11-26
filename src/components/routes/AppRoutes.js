import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from "../../pages/authentication/Auth";
import LandingPage from "../../pages/LandingPage/LandingPage";


const AppRoute=()=>{

    return (
        <Router>

            <Routes>
                <Route exact path="/login" element={<AuthPage/>}  />

                <Route exact path="/" element={<LandingPage/>}  />

            </Routes>

        </Router>

    )

}

export default AppRoute;