import SearchPage from './searchPage.js';
import LandingPage from './landingPage.js';
import React from "react";
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path = '/SearchPage' element={<SearchPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
