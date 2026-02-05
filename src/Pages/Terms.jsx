import React from 'react'
import NavBar from "../Components/landing/navbar";
import Foot from '../Components/landing/footer';
import '../css/Landing.css'

const Terms = () => {
    return (
        <>
            <div className="landcontain">
                <div className="title">
                    <h1>Terms of Service</h1>
                </div>
                <NavBar></NavBar>
                <div className='content'>
                    <div className="instructions">
                        <div className='InstructionContent'>
                            <p>
                                Do not use Simple Smash Scorebugs for mallicous purposes. Bear in mind that the site owner reserves the right to proctor access as seen fit and modify or revoke your ability to access the service at any time. 
                                <br />
                                <br />
                                Start.gg, Super Smash Bros, Nintendo, Open Broadcasting Software are independent entities that hold no formal relation to this site. This website is not monetized in any fassion and borrowed assets are done so under fair use and are still property of their respective copyright owners. 
                            </p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        </>
    )
}

export default Terms;
