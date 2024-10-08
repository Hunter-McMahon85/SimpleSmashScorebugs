import React from 'react'
import NavBar from "../Components/navbar";
import Foot from '../Components/footer';
import '../css/Landing.css'

const PP = () => {
    return (
        <>
            <div className="landcontain">
                <NavBar></NavBar>
                <div className="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>Privacy Policy</h2>
                <div className='content'>
                    <div className="instructions">
                        <div className='InstructionContent'>
                            <p>
                                Information such as your start.gg email account and username may be shared with simplesmashscorebugs if you choose to use our start.gg api integration. This data is used to obtain an access token to make API request to the start.gg api and is not collected by simplesmashscorebugs. This info is stored in your web browsers local Storage and can be deleted by clearing your browser cache/cookie history.
                                <br/>
                                <br/>
                                At the moment of this policies current drafting, there may not be google adsense or other advertising materials on the site. However there is intent to add these to the webpage in the future and said services may utilize 3rd party trackers and cookies to target advertising. 
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
