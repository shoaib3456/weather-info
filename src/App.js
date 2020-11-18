import React from 'react'
import Home from './component/Home'
import About from './component/About'
import {Switch,Route} from 'react-router-dom'

const App =()=>{
  return(
    <>
    <Switch>
      <Route  exact path="/" component={Home} />
      <Route   path="/about" component={About} />
    </Switch>
    
    </>
  )
}


export default App