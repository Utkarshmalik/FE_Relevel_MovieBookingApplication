import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovie } from '../../api/movie';
import { getAllTheaters } from '../../api/theater';
import Navbar from '../../components/navbar/Navbar';

const MovieTheaters = () => {

    const {movieId: selectedMovieId} = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [theaterDetail, setTheaterDetails] = useState({});
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(()=>{

        const init = async()=>{
        
            //get the movie details based on movie Id 

        const movieDetail = await getMovie(selectedMovieId);
        
        setMovieDetails(movieDetail.data);

        const theaterDetail = await getAllTheaters();


        const eligibleTheaters = theaterDetail.data.filter(theater=> theater.movies.includes(selectedMovieId));

       setTheaterDetails(eligibleTheaters);

       setPageLoaded(true);

    }

    init();

    },[])


    return (
        <div>
            <Navbar/>

            <div className='bg-light'>

                <div className='bg-black text-center py-3'>

                    <h2 className='fw-bolder text-light' > {movieDetails.name} </h2>
                    <span className='badge rounded-pill text-bg-danger m-1'> {movieDetails.description} </span>
                        <span className='badge rounded-pill text-bg-secondary m-1' > {movieDetails.language} </span>
                        <span className='badge rounded-pill text-bg-secondary m-1'> {movieDetails.releaseStatus}  </span>

                        <hr className='bg-light'/>


                        <h6 className='text-muted'> Director : {movieDetails.director} </h6>
                       <h6 className='text-muted'> Release Date :  {movieDetails.releaseDate} </h6>
                </div>

                <div className=''>

                    <h2 className='fw-bold text-dark text-center'> SELECT THEATRE </h2>

                    {
                        pageLoaded && 

                        theaterDetail.map(
                            theater => <li key={theater._id} className="list-group-item" >

                            
                            <Link key={theater._id} to={`/movie/${selectedMovieId}/${theater._id}`}>
                                <div className='row p-2 text-decoration-none text-dark fw-bold'>

                                    <div className='col'>
                                        {theater.name}
                                    </div>

                                    <div className='col'>
                                        <div className='p-2 text-success fw-bold'>
                                            <i className='bi bi-phone-fill text-success'> </i>
                                            m-Ticket
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='p-2 text-danger fw-bold'>
                                            <i className='bi bi-cup-straw text-danger'> </i>
                                            Food and Beverages
                                        </div>
                                    </div>

                                </div>

                                </Link>

                            </li>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default MovieTheaters;
