import NavBar from './components/NavBar'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;