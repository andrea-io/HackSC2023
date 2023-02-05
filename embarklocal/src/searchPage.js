import React from 'react';
import ReactDOM from 'react-dom/client';
import './searchPage.css';
import reportWebVitals from './reportWebVitals';
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'

const SearchPage = () => {
    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //   const q = query(collection(db, 'tasks'))
    //   onSnapshot(q, (querySnapshot) => {
    //     setTasks(querySnapshot.docs.map(doc => ({
    //       id: doc.id,
    //       data: doc.data()
    //     })))
    //   })
    // },[])
    
    return(
    <div id = "parent">
      <div class="filter">
        <h1>Filter</h1>
            <h2>Length of Stay</h2>
                <label class="container">Longterm Stay
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
                <label class="container">Day Excursion
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
      </div>
    <div class="main">
        <div class = "search">
            <h1>Where do you want to go?</h1>
            <div class = "search-bar-container">
                <form action = "" class = "search-bar">
                    <input type = "text" placeholder="Enter your travel location" name = "search"></input>
                    <button type = "submit"><img src = "https://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png" alt = "search-icon"></img></button>
                </form>
            </div>
        </div>
        <div class = "profile">
            <button>
                <div id = "user">
                    <div id = "userPic">
                        <img src = "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt = "Username" ></img>
                    </div>
                    <div id = "userInfo">
                        <h1>Jake Wilson</h1>
                        <p class = "preferences">Open to host</p>
                        <p class = "location">Melbourne, Australia</p>
                        <p>Hey, I'm Jake, a street artist from Melbourne. I offer street art tours and workshops, showcasing the city's street art culture. When I'm not creating art, I explore Melbourne's music scene.</p>
                    </div>    
                </div>
            </button>
        </div>
        <div class = "profile">
            <button>
                <div id = "user">
                    <div id = "userPic">
                        <img src = "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt = "Username" ></img>
                    </div>
                    <div id = "userInfo">
                        <h1>Ana Silva</h1>
                        <p class = "preferences">Open to host</p>
                        <p class = "location">Rio de Janeiro, Brazil</p>
                        <p>Hi, I'm Ana, a surf instructor from Rio de Janeiro. I offer surf lessons for all levels, and love sharing my passion with travelers. When I'm not surfing, I explore the local street art and music scene.</p>
                    </div>    
                </div>
            </button>
        </div>
        <div class = "profile">
            <button>
                <div id = "user">
                    <div id = "userPic">
                        <img src = "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1844&q=80" alt = "Username" ></img>
                    </div>
                    <div id = "userInfo">
                        <h1>Miguel Garcia</h1>
                        <p class = "preferences">Open to day excursions</p>
                        <p class = "location">Madrid, Spain</p>
                        <p>Hello, I'm Miguel, a foodie from Madrid. I offer cooking classes in my home kitchen where you'll learn traditional Spanish cuisine and sample local wines. I enjoy exploring Madrid's food markets.</p>
                    </div>    
                </div>
            </button>
        </div>
        <div class = "profile">
            <button>
                <div id = "user">
                    <div id = "userPic">
                        <img src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt = "Username" ></img>
                    </div>
                    <div id = "userInfo">
                        <h1>Rachel Smith</h1>
                        <p class = "preferences">Open to host and day excursions</p>
                        <p class = "location">New York City, New York, USA</p>
                        <p>Hi, I'm Rachel, a contemporary dancer from New York. I offer dance workshops for all levels, showcasing the city's diverse music scene. When I'm not dancing, I check out local art exhibitions and theaters.</p>
                    </div>    
                </div>
            </button>
        </div>
      </div>
      </div>
    ) 
}

export default SearchPage;



