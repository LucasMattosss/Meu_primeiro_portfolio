
import{ useState} from 'react'
import {Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import './navbar.css'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import React from 'react'


const Navbar = () => {
    const[isNavShowing, setIsNavShowing] =useState(false);




  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
              <u1 className ={`nav__links ${isNavShowing ? 'show__nav': 'hide__Nav'}`}>
                {
                  links.map(({name, path}, index) =>{
                    return (
                         /*  <li>
                            <NavLink to={path} className= {isActive => (isActive ? 'active-nav' : 
                             '') }>{name}</NavLink> 
                          </li> */
                          <li key={index}>
                            <NavLink to={path} className={(isActive) => (isActive ? 'active-nav': '')} onClick={() => setIsNavShowing
            ( prev => !prev) }>{name}</NavLink>
                          
                          </li>

                          )
                    
                  
                  })
                }

              </u1>

            
          <button className='nav__toggle-btn' onClick={() => setIsNavShowing
            ( prev => !prev) }>
              {
                isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
              }

            
          </button> 
             
        </div>
    </nav>
  )
}

export default Navbar