import NavBar from './components/NavBar'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './pages'
import About from './pages/about'
import Work from './pages/work'
import Recess from './pages/recess'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/recess" component={Recess}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;