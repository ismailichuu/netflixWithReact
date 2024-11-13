import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {api, imageUrl } from '../../Constants/Constants'
import YouTubePopup from '../YoutubePopup/YoutubePopup'

function RowPost(props) {
    const [poster, setPoster] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [videoId, setVideoId] = useState(null)

    useEffect(() => {
        axios.get(props.url).then(response => {
            setPoster(response.data.results)
        }).catch(err => {
            console.log('Axio error' + err);
        })
    }, [])

    const handleOpenModal = (posterId) => {
        axios.get(`https://api.themoviedb.org/3/movie/${posterId}/videos?api_key=${api}`).then(response=>{
            setVideoId(response.data.results[0].key)
            setIsModalOpen(true)
        }).catch(err=>{
            console.log('axios error'+err);
        })
      };

    const handleCloseModal = () => {
        setIsModalOpen(false); 
        setVideoId(null); 
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    poster.map(poster =>
                        <img alt='posters' key={poster.id} onClick={()=>{ handleOpenModal(poster.id)}} className={props.isSmall ? 'small_poster' :'poster'} src={`${imageUrl+poster.backdrop_path}`}/>
                    )
                }
            </div>
            <YouTubePopup
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoId={videoId}
      />
        </div>
        
    )
}

export default RowPost