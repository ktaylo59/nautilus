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
        <a id = "homeLink"> READ MORE</a>

        <button id = "homeButton"> SEE FULL ISSUE</button>
        </div>
        </div>
    )
}
export default Home;