import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar";
import Foot from '../Components/footer';
import BoardConfig from '../Components/MatchBoard/BoardConfig';
import ScorebugSelect from '../Components/pages/Landing/scorebugs';
import '../css/Landing.css'

const Landing = () => {
    return (
        <>
            <div className="landcontain">
                <div className="title">
                    <h1>Welcome to Simple Smash Scorebugs</h1>
                </div>
                <NavBar></NavBar>
                <div className='content'>
                    <div className="instructions">
                        <div className='InstructionContent'>
                            <p>
                                Simple Smash Scorebugs provides a simple, download free, overlay solution for your Super Smash Bros ultimate Streams.
                                <br /><br />
                                To get Started, check out one of our turotial pages or click on one of the utilities below
                            </p>
                            <h3>Scorebug App</h3>
                            <ScorebugSelect></ScorebugSelect>
                            <h3>LadderBoard</h3>
                            <p>want to help players know when and who they play at your event? The Ladderboard is essentially a transit departures/arrivals board but for matches at your event. <br/> <br/> To get started sign in with start.gg then enter the link or SLUG to the specific bracket you want to display and select an option so see matches with that Status (ie. called, uncalled, in progress, completed etc.)</p>
                            <BoardConfig></BoardConfig>

                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        </>
    )
}

export default Landing
