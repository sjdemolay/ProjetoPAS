import './Home.css'
import Sidebar from '../../Componentes/Sidebar/Sidebar'
import Carrossel from '../../Componentes/Carrossel/Carrossel'
import Feed from '../../Componentes/Feed/Feed'
import { useState } from 'react'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Carrossel/>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}></Sidebar>
      <div className={`container ${sidebar ? "" : 'container-grande'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home