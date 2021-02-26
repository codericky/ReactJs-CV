import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";

// componets
import Header from './components/Header'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'


ReactDOM.render(
  <Router>
    <Header />
    <Route path='/'>
      <Jumbotron />
      <About />
      <Project />
      <Contact />
    <Footer />
    </Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
