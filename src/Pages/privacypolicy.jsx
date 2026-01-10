import React from 'react'
import NavBar from "../Components/navbar";
import Foot from '../Components/footer';
import '../css/Landing.css'

const PP = () => {
    return (
        <>
            <div className="landcontain">
                <div className="title">
                    <h1>Privacy Policy</h1>
                </div>
                <NavBar></NavBar>
                <div className='content'>
                    <div className="instructions">
                        <div className='InstructionContent'>
                            <p>
                                This website does not collect any user data. However, when using start.gg integrations, you consent to it making calls to the start.gg API on your behalf
                                <br />
                                <br />
                                No form of tracking or adverstising for monetization has been added at this time. 
                            </p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        </>
    )
}

export default PP
