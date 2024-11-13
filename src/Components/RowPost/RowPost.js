import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { api, imageUrl } from '../../Constants/Constants'

function RowPost(props) {
    const [poster, setPoster] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response => {
            setPoster(response.data.results)
        }).catch(err => {
            console.log('Axio error' + err);
        })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    poster.map(poster =>
                        <img alt='posters' className={props.isSmall ? 'small_poster' :'poster'} src={`${imageUrl+poster.backdrop_path}`}/>
                    )
                }
            </div>
        </div>
    )
}

export default RowPost