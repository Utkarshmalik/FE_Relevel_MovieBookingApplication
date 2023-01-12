import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import {useParams, Link} from 'react-router-dom';
import { getMovie } from '../../api/movie';
import Navbar from '../../components/navbar/Navbar';
import "./movieDetail.css";


const MovieDetais = () =>{

    const {movieId:selectedMovie}= useParams();
    const [movie,setMovie] =useState(null);
    const [isReleased,changeIsReleased] = useState(null);

    console.log(selectedMovie);


    const init = async ()=>{
        const response = await getMovie(selectedMovie);
        setMovie(response.data);
        changeIsReleased(response.data.releaseStatus=="RELEASED");
    }


    useEffect(()=>{
        init();

    },[])


    return  <>


   <Navbar/>


    {!movie && <Spinner className='center' />}
 
     
    { movie && 
         <>
        <div className="box bg-black">
            <ReactPlayer url={movie.trailerUrl} controls={true} className="video" width="80%" height="98%" />
        </div>

        <div className="container my-4 justify-content-center" >
            <div className='row'>
                <div className='col'>
                    <img src={movie.posterUrl} height={400} width={300} />
                </div>

                <div className='col'>
                    <h2 className='fw-bolder'> About The Movie </h2>
                    
                    <div>
                        <span className='badge rounded-pill text-bg-danger m-1'> {movie.description} </span>
                        <span className='badge rounded-pill text-bg-secondary m-1' > {movie.language} </span>
                        <span className='badge rounded-pill text-bg-secondary m-1'> {movie.releaseStatus}  </span>
                    </div>

                    <hr/>

                    <h3> {movie.name} </h3>
                    <h6> {movie.director} </h6>
                    <h6>  {movie.releaseDate} </h6>
                    <hr/>

                    <h5>  Cast </h5>

                    {
                        movie.casts.map(name => <li className='list-group-item' > {name} </li> )
                    }

                    <div className='text-center my-3' >

                        <Link key={selectedMovie} className="text-decoration-none btn btn-lg btn-danger text-center"
                            to={isReleased? `/buytickets/${movie.name}/${selectedMovie}` : "#"} >


                        {  isReleased ? "BOOK TIKCET" : "COMING SOON" }

                        </Link>

                    </div>

                </div>

            </div>
        </div>
        </>
        }

    </>

}  

export default MovieDetais;