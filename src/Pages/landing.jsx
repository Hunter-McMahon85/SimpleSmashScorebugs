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
                            <p>want to help players know who they play at your event? The Ladderboard is essentially a transit departures/arrivals board but for matches at your event. <br/> <br/> To get started sign in with start.gg, enter the bracket link or SLUG and then select an option to display</p>
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
