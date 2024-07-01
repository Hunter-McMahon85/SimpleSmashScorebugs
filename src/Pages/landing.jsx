import React from 'react'
import '../css/Landing.css'

const Landing = () => {

    return (
        <>
            <div class="landcontain">
                <div class="navbar">
                    <nav class="topnav">
                        <ul class="navitems">
                            <li><a href="/">Home</a></li>
                            <li><a href="howtouse">How to Use</a></li>
                            <li><a href="scorebugs">Scorebugs</a></li>
                            <li><a href="about">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>Info</h2>

                <div class="instructions">
                    <ul class="navitems">
                        <li><a href="/">Home</a></li>
                        <li><a href="scoreboard">Scoreboard</a></li>
                        <li><a href="controller">Controller</a></li>
                        <li><a href="comms">Commentator Overlay</a></li>
                    </ul>
                    <p>This web app intends to provide a simple, easy to use score bug overlay for smash bros events. 
                        Other overlays require unneeded downloads when in reality it is just an webpage and some interface you are running locally on your machine.
                        On the Other hand Simple Smash scorebugs utilizes the Custom Browser Docks feature of OBS to provide a download free scorebug overlay for your smash bros stream.
                        Additionally, we provide integration with the start.gg api and its Stream Queue feature to allow you to automatically fetch tags for your scoebugs reducing downtime between games.
                    </p>
                    <p>Learn how to get started by clicking here</p>
                    <p>To view scorebugs, click here</p>
                </div>
            </div>
        </>
    )
}

export default Landing
