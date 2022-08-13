import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Account from './pages/Account';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Nav from './components/Nav';
import './style.css';
import Services from './pages/Services';
import About from './pages/About';
import Profile from './pages/Profile';
function App() {
  
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = ()=>{
    if(document.body.getBoundingClientRect().y < 0){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  document.addEventListener('scroll' , ()=>handleScroll())
  return (
    <Router>
      <Box textAlign="center" fontSize="xl" >
        <Switch>
          <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/account" >
            <Nav scrolled = {scrolled} />
            <Account />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/courses">
            <Nav scrolled = {scrolled}/>
            <Courses />
          </Route>
          <Route path="/services">
            <Nav scrolled = {scrolled}/>
            <Services />
          </Route>
          <Route path="/about">
            <Nav scrolled = {scrolled}/>
            <About />
          </Route>
          <Route path="/profile">
            <Nav scrolled = {scrolled}/>
            <Profile />
          </Route>
          <Route exact path="/">
            <Home scrolled = {scrolled} />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
