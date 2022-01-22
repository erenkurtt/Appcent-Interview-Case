
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import './css/movieDetail.css';
import '../content/lists/movies/css/movies.css';
import axios from 'axios';
import { useParams } from 'react-router';
import Credits from './Credits';
import { Progress } from 'antd';

const TvDetails = (props) => {



    
    let { id } = useParams();

    const [state, setstate] = useState({
        genres: [{ id: 0, name: '' }],
        production_countries: [{ iso_3166_1: "" }],
        first_air_date: "1234",
        spoken_languages : [{  english_name: '' }],
        in_production: true,
        last_air_date: "1234"
    });

    const [credits, setcredits] = useState([{ name: '', character: '', poster_path: 'sdfs' }]);

    useEffect(() => {

        axios.get(props.Url + "tv/" + id + props.ApiKey + props.langParam).then((data) => {
            setstate(data.data)
          
        })

        axios.get(props.Url + "tv/" + id + "/credits" + props.ApiKey + props.langParam).then((data) => {
            setcredits(data.data.cast)
        
        })

        return () => {

        };
    }, []);

    function ReturnScore(point){

        if(point >= 7.5){
            return (
                <Progress type="circle" percent={state.vote_average * 10} className='detailedRate' strokeColor="green"
                width={80} strokeWidth={8} format={(percent) => percent / 10} />
            )
        }
        else if( point <7.5 && point >=5 ){
            return (
                <Progress type="circle" percent={state.vote_average * 10} className='detailedRate' strokeColor="yellow"
                width={80} strokeWidth={8} format={(percent) => percent / 10} />
            )
        }
        else {
            return (
                <Progress type="circle" percent={state.vote_average * 10} className='detailedRate' strokeColor="red"
                width={80} strokeWidth={8} format={(percent) => percent / 10} />
            )
        }

    }

    return (
        <div style={{ position: 'relative' }}>
            {

                state !== {
                    genres: [{ id: 0, name: '' }],
                    production_countries: [{ iso_3166_1: "" }]

                } &&
                <div style={{
                    backgroundImage: "url(" + "'" + "https://image.tmdb.org/t/p/original/" + state.backdrop_path + "'" + ")",
                    backgroundSize: 'cover'
                }}>
                    <Row className='mainRow'  >
                        <Col className='imgSegment' span={6} xs={24} sm={24} md={12} lg={6}>

                            <img className='mainImg' src={"https://image.tmdb.org/t/p/original/" + state.poster_path} ></img>

                        </Col>

                        <Col className='infoSegment' span={18} xs={24} sm={24} md={12} lg={18}>

                            <h1>{state.original_name}</h1>


                            {
                            <div>
            <span>{state.first_air_date.slice(0,4)} - {state.in_production === true ? "Current" : state.last_air_date.slice(0,4) } ({ state.spoken_languages[0].english_name })</span>
                                    <span >
                                        {

                                            state.genres.map((item) => (

                                                (state.genres.indexOf(item) !== state.genres.length - 1) ?
                                                    item.name + ", "
                                                    :
                                                    item.name + ""
                                            )
                                            )

                                        }
                                    </span>

                                    <span>{state.number_of_seasons}s {state.number_of_episodes}e </span>
                                    

                                    <p className='tagLine'><i>{state.tagline}</i></p>
                                    <p className='overView'>{state.overview}</p>

                                </div>


                            }

                        </Col>

                    </Row>



                </div>
            }


            {

                state !== {
                    genres: [{ id: 0, name: '' }],
                    production_countries: [{ iso_3166_1: "" }]

                } && credits &&
                <div className='movieList' id='movieList1'>



                    {
                        credits &&
                        credits.slice(0, 10).map((item) =>
                            <Credits key={item.name} item={item} />
                        )
                    }

                </div>}

            {
                ReturnScore(state.vote_average)
            }



        </div>

    );

};

const mapStateToProps = (state) => {
    return {
        Url: state.Url,
        ApiKey: state.ApiKey,
        langParam: state.langParam,
    }
}

export default connect(mapStateToProps, {})(TvDetails)

