import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CarouselA from "./components/Carousel";
import Header from "./components/Header";
import Jumbo from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div class = "box">
      <Header />
      
      <CarouselA />
      
      <Jumbo />
      <Wrapper>

      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
