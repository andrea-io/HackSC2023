import SearchPage from './searchPage.js';
import LandingPage from './landingPage.js';
import RegisterPage from './register.js'
import ProfilePage from './profilePage.js'
import DashPage from './dashPage.js'
import LoginPage from './login.js';
import FAQPage from './faq.js';

import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

function App() {
  console.log("in app");
  return (<>
    <Router>
        <Routes>
          <Route exact path = "/SearchPage" element={<SearchPage/>} />
          <Route exact path = "/RegisterPage" element={<RegisterPage/>} />
          <Route exact path = "/ProfilePage" element={<ProfilePage/>} />
          <Route exact path = "/DashPage" element={<DashPage/>} />
          <Route exact path = '/LoginPage' element={<LoginPage/>} />
          <Route exact path = '/FAQPage'element={<FAQPage/>} />
          {/* <Route exact path = "/" component={LandingPage} /> */}
          <Route index element={<LandingPage/>} />
          </Routes>
      </Router>
  </>);
};


reportWebVitals();

export default App;
