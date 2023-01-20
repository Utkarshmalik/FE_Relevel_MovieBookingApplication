import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from "../../pages/authentication/Auth";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Admin from "../../pages/admin/Admin";
import React from "react";
import MovieDetais from "../../pages/movieDetail/movieDetail";
import MovieTheaters from "../../pages/movieTheaters/MovieTheaters"
import BookingsPage from "../../pages/bookings/Booking";

const AppRoute=()=>{

    return (
        <Router>

            <Routes>
                <Route exact path="/login" element={<AuthPage/>}  />

                <Route exact path="/" element={<LandingPage/>}  />

                <Route exact path="/admin" element={<Admin/>}  />

                <Route exact path="/movie/:movieId/details" element={<MovieDetais/>} /> 

                <Route exact path="/buytickets/:movieName/:movieId" element={<MovieTheaters/>} /> 


                <Route exact path="/movie/:movieId/:theaterId" element={<BookingsPage/>} /> 

            </Routes>

        </Router>

    )

}

export default AppRoute;