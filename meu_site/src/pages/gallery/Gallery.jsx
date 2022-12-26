import './Gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

import React from 'react'

const Gallery = () => {
  return (
    <>
    <Header title='Galeeria de fotos' image={HeaderImage}>
    todas as fotos aqui
   </Header>    
    </>
  )
}

export default Gallery