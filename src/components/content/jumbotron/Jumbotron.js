import React from 'react';
import './jumbotron.css';

import { Carousel } from 'antd';

function contentStyle(src) {
    return {
        height: 'match-content',
        textAlign: 'center',
        padding: '1% 0',
        backgroundImage: "url(" + "'" + src + "'" + ")",
        backgroundSize: 'cover'
    };
}

const Jumbotron = () => {
    const slide1 = 'https://cdn.pixabay.com/photo/2016/09/14/08/13/video-1668906_960_720.jpg';
    return <div>
        <Carousel  >
            <div>
                <div style={contentStyle(slide1)} >
                    <h1 className='firstTitle' >Welcome to MovieApp</h1>
                    <p className='subTitle' > A Place for Movies and Tv Shows </p>
                </div>

            </div>
          
        </Carousel>
    </div>;
};

export default Jumbotron;


