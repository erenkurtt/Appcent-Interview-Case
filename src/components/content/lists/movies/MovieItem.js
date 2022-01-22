import React from 'react';
import { Card } from 'antd';
import { Progress } from 'antd';
import {
    Link
} from "react-router-dom";

import './css/movieItem.css';

const { Meta } = Card;

const MovieItem = ({ item, genre }) => {


    return (

        <div className='movieItems'>

            <Link to={ `/details/${genre}/${item.id}`} > 
                <Card
                    hoverable
                    style={{ width: 150 }}
                    cover={
                        <img alt="example" src={"https://image.tmdb.org/t/p/original/" + item.poster_path} />

                    }
                    className='cardOut'
                >
                    {
                        genre === "movie" ?
                            <div>
                                <Meta title={item.original_title} description={item.release_date} />
                                <Progress type="circle" percent={item.vote_average * 10} className='rate'
                                    width={50} strokeWidth={8} format={(percent) => percent / 10} strokeColor='green' />
                            </div>
                            :
                            <div>
                                <Meta title={item.original_name} description={item.first_air_date} />
                                <Progress type="circle" percent={item.vote_average * 10} className='rate'
                                    width={50} strokeWidth={8} format={(percent) => percent / 10} strokeColor='green'  />
                            </div>
                    }

                </Card>
            </Link>

        </div>

    );
};

export default MovieItem;
