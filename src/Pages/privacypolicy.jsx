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
                                When signing in with start.gg, you consent to simplesmashscorebugs making API request to the start.gg api on your behalf.
                                Information such as your start.gg email account and username may be shared with simplesmashscorebugs if you choose to sign in with start.gg's oauth.
                                This Information is not collected by simplesmashscorebugs but is used to obtain an API token to make request on your behalf. 
                                <br />
                                <br />
                                At the moment of this policies current drafting, there may not be google adsense or other advertising materials on the site. 
                                However there is intent to add these to the webpage in the future and said services may utilize 3rd party trackers and cookies to target advertising. 
                                While these currently are not presently, they may be added in the future.
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
