import{Link} from 'react-router-dom';
import minhaImagem  from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
           <h1> Junte-se às lendas do mundo fitness</h1>
          <p> 
          Ir para a academia não é tão fácil 
          como parece, requer esforço,
           determinação e muita força de vontade.

          </p>
           <Link to="/plans" className='btn lg'>Get Started</Link>
           
        </div>
        <div className="main__header-right">
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={minhaImagem} alt="Main Header Image"/>
          </div>

        </div>
      </div>
    </header>
  )
}

export default MainHeader