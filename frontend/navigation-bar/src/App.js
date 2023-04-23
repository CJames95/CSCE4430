import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page';
import About from './page/about';
import Help from './page/help';


// import AnnualReport from './pages/annual';
//import Teams from './pages/team';
//import Blogs from './pages/blogs';
//import SignUp from './pages/signup';

function navbar() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/help' component={Help} />
      </Routes>
    </Router>
  );
}

export default navbar;
