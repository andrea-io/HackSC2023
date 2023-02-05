import SearchPage from './searchPage.js';
import LandingPage from './landingPage.js';
import React from "react";
import { BrowserRouter as BrowserRouter, Router, Switch, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SearchPage/>} />
        <Route path = '/LandingPage' element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
