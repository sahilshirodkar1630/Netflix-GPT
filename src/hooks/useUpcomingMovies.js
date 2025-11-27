import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

  const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const url = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
    const getUpcomingMovies = async () =>{
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addUpcomingMovies(json));
    };

    useEffect(()=>{
        getUpcomingMovies();
    },[])


  }
  
  export default useUpcomingMovies;

