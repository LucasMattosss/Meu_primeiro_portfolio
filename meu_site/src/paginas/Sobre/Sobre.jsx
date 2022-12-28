import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import  { useState, useEffect } from "react";

import figma from '../../imags/figma.png'
import css from '../../imags/css-3.png'
import html from '../../imags/html-5.png'
import javascript from '../../imags/js.png'
import node from '../../imags/nodejs.png'
import reaact from '../../imags/physics.png'

import './sobre.css'


const Sobre = () => {

    const [animate, setanimate] =useState(false)

    useEffect(() =>{
        
            console.log("alo")
            setanimate(true)
            

    })
    
    return(
            <div className='retangulo'>
            <div className="nav1">
                <div className={`menu ${animate && "active"}`} style={{"--d":2}}>
                    <a href='/home'>
                        <img src={css} alt='figma'/>
                    </a>
                    <div id='tooltip1'>CSS</div>
                </div>





                <div className={`menu ${animate && "active"}`}style={{"--d":3}}>
                    <a href='projetos'>
                    <img src={figma} alt='figma'/>
                    </a>
                    <div id='tooltip1'>Figma</div>
                </div>





                <div className={`menu ${animate && "active"}`} style={{"--d":4}}>
                    <a href='sobre'>
                    <img src={html} alt='figma'/>
                    </a>
                    <div id='tooltip1'>HTML</div>
                </div>  

                <br/>

                <div className={`menu ${animate && "active"}`}style={{"--d":5}}>
                    <a href='contato'>
                    <img src={javascript} alt='figma'/>
                    </a>
                    <div id='tooltip1'>Javascript</div>
                </div>



                <div className={`menu ${animate && "active"}`}style={{"--d":5}}>
                    <a href='contato'>
                    <img src={node} alt='figma'/>
                    </a>
                    <div id='tooltip1'>NodeJs</div>
                </div>

                <div className={`menu ${animate && "active"}`}style={{"--d":5}}>
                    <a href='contato'>
                    <img src={reaact} alt='figma'/>
                    </a>
                    <div id='tooltip1'>React</div>
                </div>



            <div className='skills'>
                <h1>Skills</h1>
            </div>
            </div>
            </div>














            )











}

export default Sobre