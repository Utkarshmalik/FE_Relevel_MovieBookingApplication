import {useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import { CWidgetStatsC } from "@coreui/react";
import { useEffect } from "react";
import React from "react";
import {Delete,Edit} from "@material-ui/icons"
import { getAllTheaters } from "../../api/theater";
import { getAllMovies, removeMovie } from "../../api/movie";
import { getAllUsers } from "../../api/user";

import MaterialTable from "material-table";

const Admin=()=>{

    const [counterInfo,setCounterInfo]=useState({});

    const [theatersData,setTheatersData]=useState([]);
    const [moviesData,setMoviesData]=useState([]);
    const [usersData,setUsersData]=useState([]);
    const [showTheaterTable,setShowTheaterTable] = useState(true);
    const [showMoviesTable,setShowMoviesTable] = useState(false);
    const [showUsersTable,setShowUsersTable] = useState(false);


    const fetchTheatersData= async ()=>{

        //make an api call 
        //fetch list of theaters 
        //update the theaters state 
        //update the counterInfo state 

        const theatersData = await getAllTheaters();

        const theaters = theatersData.data;

        console.log(theaters);

        setTheatersData(theaters);

        counterInfo.theater=theaters.length;
        setCounterInfo(counterInfo);
    }

    const fetchMoviesData=async ()=>{

        //make an api call 
        //fetch list of movies 
        //update the movies state 
        //update the counterInfo state 

        const datafromAPI=await getAllMovies();

        console.log(datafromAPI);

        const moviesData=datafromAPI.data;

         setMoviesData(moviesData);

        counterInfo.movie=moviesData.length;
        setCounterInfo(counterInfo);
    }

    const fetchUsersData= async ()=>{

        //make an api call 
        //fetch list of users 
        //update the users state 
        //update the counterInfo state 

        const datafromAPI=await getAllUsers();

        const users=datafromAPI.data;

        setUsersData(users);

        counterInfo.user=users.length;
        setCounterInfo(counterInfo);
    }

    useEffect(()=>{
            fetchTheatersData();
            fetchMoviesData();
            fetchUsersData();
       
    },[])

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



    const deleteMovie = async (movie) => {
        await removeMovie(movie);
        fetchMoviesData();
    }




    return <div>
       <Navbar/>

       <div>
           <h2 className="text-center"> Welcome, {localStorage.getItem("name")} !</h2>
       </div>

       <div className="p-5" >
           <p className="text-center text-secondary" > Take a quick look at your stats below </p>

           <div className="row">

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

              { showTheaterTable && 
              
               <>
               <MaterialTable
               title="THEATERS"
               columns={[
                { title: "Theater Name", field: "name" },
                { title: "City", field: "city" },
                { title: "Descriptions", field: "description"},
                {title:"Pin Code",field:"pinCode"}
              ]}
                data={theatersData}
                actions={[
                    {
                        icon: Delete,
                        tooltip: 'Delete Theatre',
                        onClick: (event, rowData) => {
                          // Do save operation
                        }
                      },
                      {
                        icon: Edit,
                        tooltip: 'Edit Theater',
                        onClick: (event, rowData) => {
                          // Do save operation
                        }
                      }
                ]}
                options={{
                    actionsColumnIndex: -1
                  }}
                
               />

              
               </>  
              }

              { showMoviesTable && 
              
              <>
              <MaterialTable
              title="MOVIES"
              columns={[
               { title: "Movie Name", field: "name" },
               { title: "Director", field: "director" },
               { title: "Release Date", field: "releaseDate"},
               {title:"Release Status",field:"releaseStatus"}
             ]}
               data={moviesData}
               actions={[
                   {
                       icon: Delete,
                       tooltip: 'Delete Movie',
                       onClick: (event, rowData) => deleteMovie(rowData)
                     },
                     {
                       icon: Edit,
                       tooltip: 'Edit Movie',
                       onClick: (event, rowData) => {
                         // Do save operation
                       }
                     }
               ]}
               options={{
                   actionsColumnIndex: -1
                 }}
               
              />

             
              </>  
              
              }
              { showUsersTable && 
              
              
              <>
              <MaterialTable
              title="USERS"
              columns={[
               { title: "USER ID", field: "userId" },
               { title: "Name", field: "name" },
               { title: "Email", field: "email"},
               {title:"Role",field:"userType"}
             ]}
               data={usersData}
               actions={[
                   {
                       icon: Delete,
                       tooltip: 'Delete Movie',
                       onClick: (event, rowData) => deleteMovie(rowData)
                     },
                     {
                       icon: Edit,
                       tooltip: 'Edit Movie',
                       onClick: (event, rowData) => {
                         // Do save operation
                       }
                     }
               ]}
               options={{
                   actionsColumnIndex: -1
                 }}
               
              />

             
              </>  

              }

           </div>


       </div>

    </div>

}

export default Admin;