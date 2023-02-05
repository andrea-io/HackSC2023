import SearchPage from './searchPage.js';
import LandingPage from './landingPage.js';
import RegisterPage from './register.js'
import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

function App() {
  console.log("in app");
  return (<>
    <Router>
        <Routes>
          <Route exact path = "/SearchPage" element={<SearchPage/>} />
<<<<<<< HEAD
          <Route exact path = "/RegisterPage" element={<RegisterPage/>} />
          {/* <Route exact path = "/" component={LandingPage} /> */}
=======
>>>>>>> 63ae0792ccacc904101f6824d3ee6d9df1fa376c
          <Route index element={<LandingPage/>} />
          </Routes>
      </Router>
  </>);
};


reportWebVitals();

export default App;
