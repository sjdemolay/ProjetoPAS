import './Video.css'
import Player from '../../Componentes/Player/Player'
import Recomendados from '../../Componentes/Recomendados/Recomendados'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {idVideo, idCategoria} = useParams();

  return (
    <div className='play-container'>
        <Player idVideo={idVideo}></Player>
        <Recomendados idCategoria={idCategoria}></Recomendados>
    </div>
  )
}

export default Video