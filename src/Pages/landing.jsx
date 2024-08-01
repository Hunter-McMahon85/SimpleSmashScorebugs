import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar";
import '../css/Landing.css'

const Landing = () => {
    return (
        <>
            <div className="landcontain">
                <NavBar></NavBar>
                <div className="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>Info</h2>

                <div className="instructions">
                    <div className='InstructionContent'>
                        <p>
                            Simple Smash Scorebugs provides a simple, download free, overlay solution for your Super Smash Bros ultimate Streams.
                            <br />
                            Using ths custom browser docks feature of OBS, we are able to provide a web based solution for your scorebug needs.
                            Additonally, our scorebugs allow you to use the start.gg API to automatically fetch match data. This helps reduce downtime
                            between matches on your stream allowing for a smoother event and viewer experience
                        </p>
                        <p>Learn how to get started by <Link to="/howtouse">clicking here</Link></p>
                        <p>To view our scorebug templates, <Link to="/scorebugs">click here</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
