import SearchPage from './searchPage.js';
import LandingPage from './landingPage.js';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  <>
    <Router>
        <Routes>
          <Route exact path = "/" component={LandingPage} />
          <Route exact path = "/SearchPage" component={SearchPage} />
        </Routes>
      </Router>
  </>
};

export default App;
