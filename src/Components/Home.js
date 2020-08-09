import React from 'react'

import matches from '../assets/matches.png';

function Home() {
    return (
        <div>
            <div className = "homeContainer">
                <div className = "homeBigImage">
                    <img src = {matches} alt="matches" />
        </div>
        <div className = "homeContent"></div>
        <span id = "homeSpan"> Issue 079</span>
        <h1 id = "homeHeader"> Catalysts</h1>
        <p id = "homeIntro"> Agents of change</p>
        <a id = "homeLink" > READ MORE
        <img src="./assets/global/curtain-down.png" alt="down button" />
       </a>

        <button id = "homeButton"> SEE FULL ISSUE</button>
        <button className = "down">  
            SCROLL DOWN
            </button>
        </div>
        </div>
    )
}
export default Home;