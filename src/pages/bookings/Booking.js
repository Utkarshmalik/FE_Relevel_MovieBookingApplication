import React, { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../api/movie';
import { getTheaterById } from '../../api/theater';
import Navbar from '../../components/navbar/Navbar';
import './booking.css';


const BookingsPage = ()=>{

    const {movieId: selectedMovieId} = useParams();
    const {theaterId: selectedTheaterId} = useParams();
    const [movieDetail, setMovieDetails]= useState({});
    const [theaterDetail, setTheaterDetails]= useState({});

    
    console.log(selectedMovieId);
    console.log(selectedTheaterId);

    useEffect(()=>{

        const init = async ()=>{

            const movieDetail = await getMovie(selectedMovieId);

            setMovieDetails(movieDetail.data);

            const theaterDetail = await getTheaterById(selectedTheaterId);

            setTheaterDetails(theaterDetail.data);

        }

        init();
    })


    return (

        <>

        <Navbar/>

        <div  className='text-light background'>

        <h2 className='fw-bold text-light' > {movieDetail.name} </h2>
        <ShowCase/>

        </div>


        </>
 
    )

}

function ShowCase(){

    return (
        <ul className='ShowCase text-light' >
           <li>
            <span className='seat' />   <small> Available </small>   
          </li> 
          <li>
            <span className='seat seatSelected'/> <small>Selected </small>   
          </li>            <li>
            <span className='seat seatOccupied'/> <small> Occupied </small> 
          </li> 
        </ul>
    )
}


export default BookingsPage;