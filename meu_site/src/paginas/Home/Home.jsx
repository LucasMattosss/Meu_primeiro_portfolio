import React from 'react'
import {imagem1} from '../images/imagem1.jpg'
import './home.css'
import foto from '../Home/foto_de_perfil.jpg'

const Home = () => {
  return (
   <div className='tudo_card'>
    <div className='card__giratorio'>
      <div className='card__giratorio-conteudo '>
        <div className='card__giratorio-conteudo--frente'>


      </div>

      <div className='card__giratorio--conteudo--traseira'>
      <img src={foto} alt='Logo' class='logo'></img>
        




          
        </div>
          </div>
          </div>
    </div>





  )
}

export default Home