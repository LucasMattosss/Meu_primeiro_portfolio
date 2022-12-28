import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {MdAlternateEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import  { useState, useEffect } from "react";


import {AiTwotoneReconciliation} from 'react-icons/ai'


import './projeto.css'

const Projeto = () => {

    const [animate, setanimate] =useState(false)

    useEffect(() =>{
        
            console.log("alo")
            setanimate(true)
            

    })
    
    return(
            <div className="nav1">
                <div className='menu1 animate && active  youtube'>
                    <a href='/https://www.google.com/' target="_blank">
                        <FaLinkedinIn/>
                    </a>
                    <div id='tooltip2'>Linkedin</div>
                    <div id='tooltip1'>lucasmattos123</div>

                </div>

               



                <div className='menu1 animate && active  facebook'>
                    <a href='projetos'>
                        <AiOutlineWhatsApp/>
                    </a>
                    <div id='tooltip2'>WhatsApp</div>

                    <div id='tooltip1'> (67)99209―2613 </div>
                </div>





                <div className='menu1 animate && active  facebook1'>
                    <a href='sobre'>
                        <BsInstagram/>
                    </a>
                    <div id='tooltip2'>Instagram</div>

                    <div id='tooltip1'>@codigo.dolucas</div>
                </div>  



                <div className='menu1 animate && active  twitter'>
                    <a href='contato'>
                        <FiGithub/>
                    </a>
                    <div id='tooltip2'>GitHub</div>

                    <div id='tooltip1'>LucasMattosss</div>
                </div>

            
                <div className='contato'>
                <h1>Contato</h1>
                 </div>


            </div>
            














            )











}

export default Projeto