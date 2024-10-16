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
                                Do not use simplesmashscorebugs or its api integrations for malicious purposes. 
                                (IE. accessing accounts that arent yours etc.). Otherwise feel free to use this scorebug service freely for your smash bros streams.
                                <br />
                                <br />
                                Additionally, please do not pass this service off as your own. This service is an independent third party from start.gg and Nintendo (who owns the rights to the smash bros franchise). We do not claim ownership of either parties assets. What we do claim ownership of is the functionality of the scorebug utility. The code and website content for this utility is authored by Hunter McMahon who reserves the right to restrict access to this service.
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
