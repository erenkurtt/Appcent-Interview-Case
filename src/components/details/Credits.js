import React from 'react';
import { Card } from 'antd';

import '../content/lists/movies/css/movieItem.css';

const { Meta } = Card;

const Credits = ({ item }) => {


    return (

        <div className='movieItems'>


            <Card
                hoverable
                style={{ width: 150 }}
                cover={
                    <img alt="example" src={"https://image.tmdb.org/t/p/original/" + item.profile_path} />

                }
                className='cardOut'
            >
                {

                    <Meta title={item.name} description={item.character} />

                }

            </Card>


        </div>

    );
};

export default Credits;