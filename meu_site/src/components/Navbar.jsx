import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { links } from '../Date'
import {GoThreeBars} from 'react-icons/go'
import {AiFillHome} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {RiComputerFill} from 'react-icons/ri'
import  { useState, useEffect } from "react";


import {AiTwotoneReconciliation} from 'react-icons/ai'


import './Nav.css'

const NavBar = () => {

    const [animate, setanimate] =useState(false)

    useEffect(() =>{
        
            console.log("alo")
            setanimate(true)
            

    })
    
    return(
            <div className="nav">
                <div className={`menu ${animate && "active"}`} style={{"--d":2}}>
                    <a href='/home'>
                        <AiFillHome/>
                    </a>
                    <div id='tooltip'>Home</div>
                </div>





                <div className={`menu ${animate && "active"}`}style={{"--d":3}}>
                    <a href='projetos'>
                        <RiComputerFill/>
                    </a>
                    <div id='tooltip'>Projetos</div>
                </div>





                <div className={`menu ${animate && "active"}`} style={{"--d":4}}>
                    <a href='sobre'>
                        <AiTwotoneReconciliation/>
                    </a>
                    <div id='tooltip'>Sobre</div>
                </div>  



                <div className={`menu ${animate && "active"}`}style={{"--d":5}}>
                    <a href='contato'>
                        <IoIosContact/>
                    </a>
                    <div id='tooltip'>Contato</div>
                </div>





            </div>
            














            )











}

export default NavBar