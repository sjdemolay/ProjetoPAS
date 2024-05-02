import React, { useEffect, useState } from 'react'
import './Recomendados.css'
import { API_KEY, conversor_de_valor } from '../../data'
import { Link } from 'react-router-dom'


const Recomendados = ({idCategoria}) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () =>{

        const videosRecomendados_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=45&regionCode=BR&videoCategoryId=${idCategoria}&key=${API_KEY}`;

        await fetch(videosRecomendados_url).then(response => response.json()).then(data => setApiData(data.items));

    }

    useEffect(() =>{
        fetchData();
    }, [])

  return (
    <div className='recomendados'>
        {apiData.map((item, index) =>{
            return(        
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="lista-lateral-videos">
                    <img src={item.snippet.thumbnails.medium.url} alt="thumb do video recomendado" />
                    <div className="video-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{conversor_de_valor(item.statistics.viewCount)} visualizações</p>
                    </div>
                </Link>)
        })}
    </div>
  )
}

export default Recomendados