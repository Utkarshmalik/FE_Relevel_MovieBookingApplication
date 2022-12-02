import {useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import { CWidgetStatsC } from "@coreui/react";
import { useEffect } from "react";

const Admin=()=>{

    const [counterInfo,setCounterInfo]=useState({});

    const [theatersData,setTheatersData]=useState([]);
    const [moviesData,setMoviesData]=useState([]);
    const [usersData,setUsersData]=useState([]);

    const fetchTheatersData=()=>{

        //make an api call 
        //fetch list of theaters 
        //update the theaters state 
        //update the counterInfo state 

        const datafromAPI=[];

        setTheatersData(datafromAPI);

        counterInfo.theater=datafromAPI.length;
        setCounterInfo(counterInfo);
    }

    const fetchMoviesData=()=>{

        //make an api call 
        //fetch list of movies 
        //update the movies state 
        //update the counterInfo state 

        const datafromAPI=[];

        setMoviesData(datafromAPI);

        counterInfo.movie=datafromAPI.length;
        setCounterInfo(counterInfo);
    }

    const fetchUsersData=()=>{

        //make an api call 
        //fetch list of users 
        //update the users state 
        //update the counterInfo state 

        const datafromAPI=[];

        setUsersData(datafromAPI);

        counterInfo.user=datafromAPI.length;
        setCounterInfo(counterInfo);
    }

    useEffect(()=>{
        fetchTheatersData();
        fetchMoviesData();
        fetchUsersData();
    })


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
                    progress={{ color: 'success', value: 75 }}
                    text="Number of Theaters"
                    title="Theaters"
                    value="60"
        />
               </div>

               <div className="col">
                <CWidgetStatsC
                    className="mb-3 text-white"
                    icon={<i className="bi bi-card-list text-danger"></i>}
                    color={"dark"}
                    progress={{ color: 'success', value: 75 }}
                    text="Number of Movies"
                    title="Movies"
                    value="60"
        />
               </div>


               <div className="col">
                <CWidgetStatsC
                    className="mb-3 text-white"
                    icon={<i className="bi bi-card-list text-danger"></i>}
                    color={"dark"}
                    progress={{ color: 'success', value: 75 }}
                    text="Number of Users"
                    title="Users"
                    value="60"
        />
               </div>

           </div>

       </div>

    </div>

}

export default Admin;