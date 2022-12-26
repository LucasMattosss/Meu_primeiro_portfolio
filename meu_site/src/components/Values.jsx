import React from 'react'
import Image from '../images/values.jpg' 
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
import SectionHead from './SectionHead'



const Values = () => {
  return (
<section claassName='Values'>

    <div className='container values__container'>
        <div className="values__left">
            <div className="values__image">
                <img src={Image} alt="Values Image"/>
            </div>
        </div>

        <div className="values__right">
            <SectionHead icon={<GiCutDiamond/>} title="Valores Dos Planos"/>
            <p>

               
            </p>
            <div className="values__wrapper">
                {
                   values.map(({id, icon, title, desc}) => {
 
                           return <Card className="values__value">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                           </Card>
                    
                   })
                   } 
                

            </div>
        </div>

    </div>
</section>
    
    
      )
}

export default Values