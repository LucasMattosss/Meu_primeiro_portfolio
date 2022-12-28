import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './Nav.css'
import {AiOutlineHome}from 'react-icons/ai'
import {TbListDetails}from 'react-icons/tb'
import {BsCollection}from 'react-icons/bs'

function Nav(){
    const [animate, setanimate] = useState(false)
    
    
    useEffect(() => {
        console.log("renderizou")

    }, [])    

  
    return(

        <div className="nav">
            <ul className= {`menu ${animate ? 'active': 'false' }`}
             style={{'--d': 1}}> 
                <a href="Contato">
                    <AiOutlineHome/>
                

                </a>
                <div id='tooltip'>Home</div>
            </ul>

            <div className="menu"     style={{'--d':2}}>
                <a href="#Contato">
                    <TbListDetails/>


                </a>
                <div id='tooltip'>Home</div>
            </div>


            <div className="menu" style={{'--d':3}}>
                <a href="#Home">
                    <BsCollection/>


                </a>
                <div id='tooltip'>Home</div>
            </div>

            <div className="menu" style={{'--d':4}}>
                <a href="#Home">
                    <BsCollection/>


                </a>
                <div id='tooltip'>Home</div>
            </div>



        </div>



    )
}