import React from 'react'
//import react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AnimeInfo from './pages/AnimeInfo'
import Navbar from './pages/Navbar'
import Error from './pages/Error'
//components
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
//css
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
          <Hero />
          <Sidebar />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/animeinfo/:id'>
          <AnimeInfo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
