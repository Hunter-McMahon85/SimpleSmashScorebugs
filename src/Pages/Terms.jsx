import React from 'react'
import NavBar from "../Components/navbar";
import Foot from '../Components/footer';
import '../css/Landing.css'

const Terms = () => {
    return (
        <>
            <div className="landcontain">
                <NavBar></NavBar>
                <div className="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>Terms of Service</h2>
                <div className='content'>
                    <div className="instructions">
                        <div className='InstructionContent'>
                            <p>
                                Do not use simplesmashscorebugs or its api integrations for malicious purposes. (IE. accessing accounts that arent yours etc.). Otherwise feel free to use this scorebug service freely for your smash bros streams.
                                <br />
                                <br />
                                This service is the intelectual property of Hunter McMahon.
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
