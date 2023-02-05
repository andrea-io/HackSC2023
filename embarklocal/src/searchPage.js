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
                <a href = "#">Location</a>
                <a href = "#">Interests</a>
                <a href = "#">Length of Stay</a>
        </div>
        <div class="search">
            <input type="text" placeholder="Search.."></input>
        </div>
        <div class="main">
            <div class = "profile">
                <button>
                    <img src = "" alt = "Username" style = "width:100%"></img>
                    <h1>First Last</h1>
                    <p class = "location">Los Angeles, CA</p>
                    <p>Hi! I have lived in Los Angeles for 15 years. I would love to share my love for surfing and cooking. </p>
                </button>
            </div>
        </div>
        </>
    )

    
  }
}



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
