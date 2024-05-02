import './Sidebar.css'
import home from '../../assets/home.png'
import icone_jogos from '../../assets/game_icon.png'
import automoveis from '../../assets/automobiles.png'
import esportes from '../../assets/sports.png'
import entretenimento from '../../assets/entertainment.png'
import tecnologio from '../../assets/tech.png'
import musica from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import noticias from '../../assets/news.png'
import pewdiepie from '../../assets/pewdiepie.png'
import mrBeast from '../../assets/mr-beast.jpg'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({sidebar, category, setCategory}) => {

  return (
    <div className={`sidebar ${sidebar ? "" : "sidebar-encolhida"}`}>
        <div className="links-atalhos">

            <div className={`side-link ${category===0 ? "ativado" : ""}`} onClick={() => setCategory(0)}>
                <img src={home} alt="" /><p>Início</p>
            </div>

            <div className={`side-link ${category===20 ? "ativado" : ""}`} onClick={() => setCategory(20)}>
                <img src={icone_jogos} alt="" /><p>Jogos</p>
            </div>

            <div className={`side-link ${category===2 ? "ativado" : ""}`} onClick={() => setCategory(2)}>
                <img src={automoveis} alt="" /><p>Automóveis</p>
            </div>

            <div className={`side-link ${category===17 ? "ativado" : ""}`} onClick={() => setCategory(17)}>
                <img src={esportes} alt="" /><p>Esportes</p>
            </div>

            <div className={`side-link ${category===24 ? "ativado" : ""}`} onClick={() => setCategory(24)}>
                <img src={entretenimento} alt="" /><p>Entretenimento</p>
            </div>

            <div className={`side-link ${category===28 ? "ativado" : ""}`} onClick={() => setCategory(28)}>
                <img src={tecnologio} alt="" /><p>Tecnologia</p>
            </div>

            <div className={`side-link ${category===10 ? "ativado" : ""}`} onClick={() => setCategory(10)}>
                <img src={musica} alt="" /><p>Música</p>
            </div>

            <div className={`side-link ${category===22 ? "ativado" : ""}`} onClick={() => setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            
            <div className={`side-link ${category===25 ? "ativado" : ""}`} onClick={() => setCategory(25)}>
                <img src={noticias} alt="" /><p>Notícias</p>
            </div>
            <hr />
        </div>
        <div className="lista-inscricoes">
            <h3>Inscrições</h3>
            <div className={`side-link ${category===0 ? "ativado" : ""}`}>
                <img src={pewdiepie} alt="" /> <p>PewDiePie</p>
            </div>

            <div className={`side-link ${category===0 ? "ativado" : ""}`}>
                <img src={mrBeast} alt="" /> <p>MrBeast</p>
            </div>

            <div className={`side-link ${category===0 ? "ativado" : ""}`}>
                <img src={tom} alt="" /> <p>Justin Bieber</p>
            </div>

            <div className={`side-link ${category===0 ? "ativado" : ""}`}>
                <img src={megan} alt="" /> <p>5-Minutes Crafts</p>
            </div>

            <div className={`side-link ${category===0 ? "ativado" : ""}`}>
                <img src={cameron} alt="" /> <p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar