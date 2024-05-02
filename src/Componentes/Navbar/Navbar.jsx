import React from 'react'
import './Navbar.css'
import icone_menu from '../../assets/menu.png'
import logo from '../../assets/CrapTube_Logo.png'
import icone_procurar from '../../assets/search.png'
import icone_upload from '../../assets/upload.png'
import icone_mais from '../../assets/more.png'
import icone_notificacao from '../../assets/notification.png'
import icone_profile from '../../assets/icone_profile.jpg'
import night_mode_icon from '../../assets/night_mode_3.png'
import { Link } from "react-router-dom";


// Aquela função onClick, vai funcionar como uma opção de toggle
const Navbar = ({ setSidebar, modoNoturno, toggleModoNoturno }) => {

  return (
    <nav className={`nav${modoNoturno ? '-noturno' : ''}`}>
        <div className='nav-esquerdo flex-div'>
            <img className='icone-menu' onClick={()=> setSidebar(estadoAnterior => estadoAnterior === false ? true : false)} src={icone_menu} alt="icone do menu" />
            <Link to='/'><img className='logo' src={logo} alt="logo do app" /></Link>
        </div>

        <div className='nav-meio flex-div'>
            <div className='search-box flex-div'>
                <input type="text" placeholder='Que merda você tá procurando?'/>
                <img src={icone_procurar} alt="icone de procurar" />
            </div>
        </div>

        <div className='nav-direito flex-div'>
            <img src={night_mode_icon} alt="modo noturno" onClick={toggleModoNoturno}/>
            <img src={icone_upload} alt="icone de upload" />
            <img src={icone_mais} alt="icone de mostrar mais" />
            <img src={icone_notificacao} alt="icone de notificação" />
            <img className='icone-usuario' src={icone_profile} alt="icone do usuario" />
        </div>
    </nav>
  )
}

export default Navbar