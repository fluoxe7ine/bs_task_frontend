// Core
import React from 'react';
import './App.scss';
// Components
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Content, Header } from 'components/layout';

export const App = () => (
  <>
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  </>
);
