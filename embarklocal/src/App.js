import './App.css';
import SearchPage from './searchPage.js';
import LandingPage from './index.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/searchPage" component={SearchPage} />
    </BrowserRouter>
  );
};

export default App;
