import React from 'react'
import './redes.css'
import {MdAlternateEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'


const Redes = () => {
  return (

    <div class="app">
    <div class="social">
        <div className='coisas'>

        
        <a href="#" target="_blank" class="button facebook">
            
            <i class="fab fa-facebook-f"><FaLinkedinIn/>
            </i>
            <div id='tooltip_1'>Linkedin:lUCAS</div>

          </a>
        </div>



        <a href="#" target="_blank" class="button facebook1">
            <i class="fab fa-whats-f"><AiOutlineWhatsApp/></i>
        </a>



        <a href="#" target="_blank" class="button twitter">
            <i class="fab fa-twitter"><BsInstagram/></i>
        </a>



        <a href="#" target="_blank" class="button youtube">
            <i class="fab fa-youtube"><FiGithub/></i>
        </a>


        
        <a href="#" target="_blank" class="button discord">
            <i class="fab fa-discord"><MdAlternateEmail/></i>
        </a>
    
</div>

</div>





    )
}

export default Redes