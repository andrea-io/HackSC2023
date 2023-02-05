import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


class SearchPage extends React.Component{
  render() {
    return(
        <>
        <div class="filter">
            <h1>Filter</h1>
            <input type = "checkbox"></input>
        </div>
        <div class="search">
            <input type="text" placeholder="Search.."></input>
        </div>
        <div class="main">

        </div>
        </>
    )

    
  }
}

export default SearchPage;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchPage/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
