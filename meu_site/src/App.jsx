import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'



const App = () => {
  return (
        <Router>
          <Navbar/>
        <Route path='/about' component={About}   />
        <Route path='/Contact' component={Contact}   />
        <Route path='/Gallery' component={Gallery}   />
        <Route path='/Plans' component={Plans}   />
        <Route path='/Trainers' component={Trainers}   />
        <Route path='/' exact component={Home}   />
        

        <Route exact path="/404" component={NotFound} />
        <Redirect to='/404' />
        

        </Router>
   
   
  )
    
}

export default App
