import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import  {getAllMovies} from '../../api/movie';
import { CSpinner } from "@coreui/react";
import { HandThumbsUpFill } from "react-bootstrap-icons";
import Footer from "../../components/footer/Footer";
import React from "react";

const LandingPage=()=>{


    const [movieList,setMovieList]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const initialise= async ()=>{

        const movies= await getAllMovies();
        console.log(movies);
        setMovieList(movies.data);
        setIsLoading(false);

    }

    const getLoader=()=>{
        return isLoading &&  <div  className="d-flex my-5 justify-content-center align-item-center" >
        <CSpinner variant="grow"/>
        </div>
    }

    useEffect(()=>{
        initialise();

    },[]);

    return (
        <div>
            <Navbar/>

            <div style={{minHeight:"85vh"}}>

            {getLoader()}


            {

            !isLoading && 

            (
                <>
                <Slider/>

            <div className="container my-4" >

                <h5> Recomended Movies </h5>

                <div className="row">

                {
                    movieList.map((movie)=>{
                        

                        return <div className="col-lg-3 col-xs-6 my-2" >
                            <Link to={`/movie/${movie._id}/details`} >
                            <div className="d-flex justify-content-center align-items-stretch" style={{height:"30rem"}}>

                                <div style={{width:"20rem"}} className="card bg-dark" >

                                    <img style={{height:"80%"}}src={movie.posterUrl} className="card-img-top" alt="movie"/>

                                    <div className="p-2" >
                                    
                                    <div className="d-flex justify-content-left align-items-center" >
                                    <HandThumbsUpFill className="text-success" />
                                    <span className="text-success px-2" >58K</span>
                                    </div>


                                    <p  className="text-white fw-bolder px-2 fs-5" > {movie.name} </p>

                                    </div>

                                </div>

                            </div>

                            </Link>
                        </div>

                    })
                }
                </div>

            </div>
            </> 
            
            )
            }
      </div>

        <Footer/>    
        </div>
        
    )
}

export default LandingPage;