import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'



const Footer = () => {
  return (
<footer>
    <div className='container footer__container'>
        <article>
            <Link to="/" className='logo'>
                <img src={Logo} alt = "Footer Logo"/>
            </Link>
            <p>
           Melhor academia do Brasil e do mundo
            </p>
            <div className="footer__socials">
              <a href='https://linkedin.com' target= "_blank" rel='noreferrer noopener'><FaLinkedin/></a>
              <a href='https://facebook.com' target= "_blank" rel='noreferrer noopener'><FaFacebookF  /></a>
              <a href='https://twitter.com' target= "_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
              <a href='https://instagram.com' target= "_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
            </div>
        </article>
        <article>

          <h4>Páginas</h4>
        <Link to= "/about">Sobre</Link>
        <Link to= "/plans">Planos</Link>
        <Link to= "/Treinos">Trainers</Link>
        <Link to= "/gallery">Galeria</Link>
        <Link to= "/contact">Contato</Link>


        </article>
      <article>

        <h4>Entrar em contato</h4>
        <Link to= "/contact">Sobre</Link>
        <Link to= "/s">Planos</Link>
  
      </article>
      
      <article>
      <h4>Insights</h4>
      <Link to= "/s">Blog</Link>
      <Link to= "/s"></Link>
      <Link to= "/s">Eventos</Link>
      <Link to= "/s">Comunidade</Link>
      <Link to= "/s">Perguntas</Link>
      </article>

    </div>
    <div className='footer__copyright'>
      <small>  Lucas Mattos - 2022<br/>llucasmattoscontato@gmail.com
</small>
    </div>
</footer>


  )
}

export default Footer