import { useState } from 'react'
import Navbar from './Componentes/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import './App.css'

const App = () => {

  const [sidebar, setSidebar] = useState(true);
  const [modoNoturno, setModoNoturno] = useState(true);

  const toggleModoNoturno = () => {
    console.log('Modo noturno antes de alternar:', modoNoturno);
    setModoNoturno((prevMode) => !prevMode);
    console.log('Modo noturno depois de alternar:', !modoNoturno);
  };

  return (

      <div className={`app${modoNoturno?'-noturno':'-light'}`}>
        <Navbar setSidebar={setSidebar} toggleModoNoturno={toggleModoNoturno} modoNoturno={modoNoturno} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:idCategoria/:idVideo" element={<Video />} />
        </Routes>
      </div>

  )
}

export default App