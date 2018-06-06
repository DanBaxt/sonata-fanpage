import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CarouselA from "./components/Carousel";
import Jumbotron from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Jumbotron />
      <CarouselA />
      <Wrapper>

      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
