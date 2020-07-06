import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Post from './components/Post';
import './css/Global.css';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Hero />
    <Articles />
    <Post />
  </BrowserRouter>,
  document.getElementById('page')
);

