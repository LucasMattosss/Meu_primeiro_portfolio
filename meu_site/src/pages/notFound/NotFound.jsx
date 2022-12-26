import './NotFound.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
  <section>
    <div className='container notfound__container'>
      <h2>Página não encontrada</h2>
      <Link to="/" className='btn'>Página inicial</Link>
    </div>
  </section>
  )
}

export default NotFound