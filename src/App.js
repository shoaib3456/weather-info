import React from 'react'
import Home from './component/Home'
import About from './component/About'
import {Switch,Route} from 'react-router-dom'
import Error from './component/Error'

const App =()=>{
  return(
    <>
    <Switch>
      <Route  exact path="/weather-info/" component={Home} />
      <Route   path="/about" component={About} />
      <Route component={Error}/>
    </Switch>
    
    </>
  )
}


export default App