import logo from './logo.svg';
import './App.css';
import SearchPage from './searchPage.js';
import LandingPage from './index.js';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/search" component={SearchPage} />
    </Router>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
