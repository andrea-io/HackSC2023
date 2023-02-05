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
          <Route exact path = "/RegisterPage" element={<RegisterPage/>} />
          {/* <Route exact path = "/" component={LandingPage} /> */}
          <Route index element={<LandingPage/>} />
          </Routes>
      </Router>
  </>);
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
