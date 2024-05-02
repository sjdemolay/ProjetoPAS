import React, { useEffect, useState } from 'react'
import './Player.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import icone_profile from '../../assets/user_profile.jpg'
import { API_KEY, conversor_de_valor } from '../../data'
import moment from 'moment';
import { useParams } from 'react-router-dom'


const Player = () => {

    const {idVideo} = useParams();

    const [apiData, setApiData] = useState(null);
    const [canalData, setCanalData] = useState(null);
    const [comentariosData, setComentariosData] = useState([]);

    const fetchVideoData = async () =>{
        const detalhesVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${idVideo}&key=${API_KEY}`;
        await fetch(detalhesVideo_url).then(response => response.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOutrosDados = async () =>{
        //Dados do canal
        const detalhesCanal_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(detalhesCanal_url).then(response => response.json()).then(data => setCanalData(data.items[0]));

        //Dados dos comentarios do video
        const comentarios_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&videoId=${idVideo}&key=${API_KEY}`;
        await fetch(comentarios_url).then(response => response.json()).then(data => setComentariosData(data.items));
    }

    useEffect(() =>{
        fetchVideoData();
    },[idVideo])

    useEffect(() =>{
        fetchOutrosDados();
        //console.log(comentariosData);
    },[apiData])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${idVideo}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData ? apiData.snippet.title : "Título Aqui"}</h3>
        <div className='play-video-info'>
            <p>{apiData ? conversor_de_valor(apiData.statistics.viewCount): "16K"} Visualizações &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
            <div>
                <span><img src={like} alt="" />{apiData ? conversor_de_valor(apiData.statistics.likeCount) : 404}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" /> Compartilhar</span>
                <span><img src={save} alt="" /> Salvar</span>
            </div>
        </div>
        <hr />
        <div className="autor">
            <img src={canalData ? canalData.snippet.thumbnails.default.url : ""} alt="" />
            <div>
                <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                <span>{canalData ? conversor_de_valor(canalData.statistics.subscriberCount) : ""} Inscritos</span>
            </div>
            <button>Inscrever-se</button>
        </div>
        <div className="desc-video">
            <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Descrição do vídeo aqui"}</p>
                <hr />
                <h4>{apiData ? conversor_de_valor(apiData.statistics.commentCount) : 404} comentários</h4>

                {comentariosData.map((item, index) =>{

                    return(
                        <div key={index} className="comentario">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 hora atrás</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="acoes-comentario">
                                    <img src={like} alt="" />
                                    <span>{conversor_de_valor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div> 
    </div>
  )
}

export default Player