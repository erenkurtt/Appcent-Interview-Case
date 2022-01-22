import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './css/movies.css'

const Movies = ( {type , mainTitle} ) => {

    const ApiKey = useSelector(state => state.ApiKey);
    const langParam = useSelector(state => state.langParam);
    const Url = useSelector(state => state.Url);

    const [movieList, setmovieList] = useState([]);


    useEffect(() => {

        axios.get(Url + type + "/popular" + ApiKey + langParam + '&page=1').then((data) => {
            if (movieList)
                setmovieList(data.data.results);
   
        })

        return () => { };

    }, []);





    return (

        <div>
            
         <h1 className='mainTitle' >Popular {mainTitle}</h1>
     
            <div className='movieList' id='movieList1'>
   
                {
                    movieList &&
                    movieList.map((item) =>
                        <MovieItem key={item.poster_path} item={item}  genre={type} />
                    )
                }

            </div>

        </div>

    );
};

export default Movies;
