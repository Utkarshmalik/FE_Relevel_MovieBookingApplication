import {useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import { CWidgetStatsC } from "@coreui/react";
import { useEffect } from "react";

const Admin=()=>{

    const [counterInfo,setCounterInfo]=useState({});

    const [theatersData,setTheatersData]=useState([]);
    const [moviesData,setMoviesData]=useState([]);
    const [usersData,setUsersData]=useState([]);
    const [showTheaterTable,setShowTheaterTable] = useState(true);
    const [showMoviesTable,setShowMoviesTable] = useState(false);
    const [showUsersTable,setShowUsersTable] = useState(false);


    const fetchTheatersData=()=>{

        //make an api call 
        //fetch list of theaters 
        //update the theaters state 
        //update the counterInfo state 

        const datafromAPI=[1,2,3,4,5,6,7,9,10,1,2,3,4,5,6,7,9,10,1,2,3,4,5,6,7,9,10,1,2,3,4,5,6,7,9,10];

        setTheatersData(datafromAPI);

        counterInfo.theater=datafromAPI.length;
        setCounterInfo(counterInfo);
    }

    const fetchMoviesData=()=>{

        //make an api call 
        //fetch list of movies 
        //update the movies state 
        //update the counterInfo state 

        const datafromAPI=[1,2,3,4,5,6,7,9,10];

        setMoviesData(datafromAPI);

        counterInfo.movie=datafromAPI.length;
        setCounterInfo(counterInfo);
    }

    const fetchUsersData=()=>{

        //make an api call 
        //fetch list of users 
        //update the users state 
        //update the counterInfo state 

        const datafromAPI=[1,2,3,4,5,6,7,9,10,1,2,3,4,5,6,7,9,10];

        setUsersData(datafromAPI);

        counterInfo.user=datafromAPI.length;
        setCounterInfo(counterInfo);
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetchTheatersData();
            fetchMoviesData();
            fetchUsersData();
        },1000)
       
    })

    const showMovies=()=>{
        setShowMoviesTable(true);
        setShowTheaterTable(false);
        setShowUsersTable(false);
    }

    const showTheaters=()=>{
        setShowMoviesTable(false);
        setShowTheaterTable(true);
        setShowUsersTable(false);
    }

    const showUsers=()=>{
        setShowMoviesTable(false);
        setShowTheaterTable(false);
        setShowUsersTable(true);
    }


    return <div>
       <Navbar/>

       <div>
           <h2 className="text-center"> Welcome, {localStorage.getItem("name")} !</h2>
       </div>

       <div>
           <p className="text-center text-secondary" > Take a quick look at your stats below </p>

           <div className="row p-5">

                <div className="col">
                <CWidgetStatsC
                    className="mb-3 text-white"
                    icon={<i className="bi bi-card-list text-danger"></i>}
                    color={"dark"}
                    progress={{ color: 'success', value: counterInfo.theater }}
                    text="Number of Theaters"
                    title="Theaters"
                    value={counterInfo.theater}
                    onClick={()=>showTheaters()}
        />
               </div>

               <div className="col">
                <CWidgetStatsC
                    className="mb-3 text-white"
                    icon={<i className="bi bi-card-list text-danger"></i>}
                    color={"dark"}
                    progress={{ color: 'success', value: counterInfo.movie }}
                    text="Number of Movies"
                    title="Movies"
                    value={counterInfo.movie}
                    onClick={()=>showMovies()}
        />
               </div>


               <div className="col">
                <CWidgetStatsC
                    className="mb-3 text-white"
                    icon={<i className="bi bi-card-list text-danger"></i>}
                    color={"dark"}
                    progress={{ color: 'success', value:counterInfo.user }}
                    text="Number of Users"
                    title="Users"
                    value={counterInfo.user}
                    onClick={()=>showUsers()}

        />
               </div>

           </div>

           <div>

              { showTheaterTable && <h1>Theater Table</h1>}
              { showMoviesTable && <h1>Movies Table</h1> }
              { showUsersTable && <h1>Users Table</h1> }

           </div>


       </div>

    </div>

}

export default Admin;