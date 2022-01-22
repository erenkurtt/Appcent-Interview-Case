import React from 'react';
import Jumbotron from './content/jumbotron/Jumbotron';
import Movies from './content/lists/movies/Movies';

function MainPage() {




    return <div>
            <Jumbotron />
            <Movies type={"movie"} mainTitle={"Movies"} />  
            <Movies type={"tv"} mainTitle={"Tv Shows"} />  

        </div>;
}

export default MainPage;
