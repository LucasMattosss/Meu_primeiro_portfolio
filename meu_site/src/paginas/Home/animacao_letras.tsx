import React from 'react'
import './home_2.css'
import{
    useScroll,
    motion,
    useTransform,
} from 'framer-motion';

import { techs } from '../../Date';
import ParallaxContainer from '../Home/ParallaxWord'


const animacao = () => {
   

    return (

        <ParallaxContainer>
            {techs.map(item =>(
                <ParallaxWord item = {item}>{item.name}</ParallaxWord>
            ))}
        </ParallaxContainer>









  )
}

export default animacao   