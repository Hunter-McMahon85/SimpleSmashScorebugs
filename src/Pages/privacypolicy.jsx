import React from 'react'
import NavBar from "../Components/landing/navbar";
import Foot from '../Components/landing/footer';
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
                                <p><i>Last updated: 07/29/2026</i></p>
                            <p>
                                Simple Smash Scorebugs ("this site," "we," "our") is a free, non-commercial overlay tool for Super Smash Bros. Ultimate streams. This policy explains what data the site touches and why.
                            </p>

                            <h3>Data We Do Not Collect</h3>
                            <p>
                                We do not run analytics, tracking pixels, or advertising of any kind. We do not collect, sell, or share personal information, and we have no server-side database of user data.
                            </p>

                            <h3>Data Stored On Your Device</h3>
                            <p>
                                The Scorebug Controller uses your browser's local storage to save match info you enter (player tags, pronouns, round/pool names, character selections, scores, theme preferences, and similar). This data stays on your device, is used only to display the overlay, and is never transmitted to us. Clearing your browser data or local storage will remove it.
                            </p>

                            <h3>Start.gg Integration</h3>
                            <p>
                                If you choose to sign in with start.gg (used for the Stream Queue and MatchBoard features), you will be redirected to start.gg to authorize access. We request only the minimum scopes needed (your basic identity/email) to make API calls to start.gg on your behalf, such as pulling stream queue or bracket data. The resulting access token is stored in your browser's local storage and used only to make those API calls directly from your browser to start.gg — it is not sent to or stored on any server we operate. You can revoke this access at any time from your start.gg account settings.
                            </p>

                            <h3>Third Parties</h3>
                            <p>
                                Using the start.gg integration means your requests go to start.gg's API, which is governed by start.gg's own privacy policy — we encourage you to review it. We are not affiliated with start.gg, Nintendo, or any other third party mentioned on this site.
                            </p>

                            <h3>Children's Privacy</h3>
                            <p>
                                This site is not directed at children and we do not knowingly collect information from children.
                            </p>

                            <h3>Changes to This Policy</h3>
                            <p>
                                We may update this policy as the site changes. Continued use after an update means you accept the revised policy.
                            </p>
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
