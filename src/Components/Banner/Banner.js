import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { api, imageUrl } from '../../Constants/Constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 20);
        axios.get(`/trending/all/week?api_key=${api}&language=en-US`).then(response=>{
            setMovie(response.data.results[randomIndex])
        }).catch(err=>{
            console.log('Movie db error'+err)
        })
    }, [])
    
    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} >
            <div className="content">
                <h1 className="title">{movie ? movie.name || movie.title :""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""} </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner