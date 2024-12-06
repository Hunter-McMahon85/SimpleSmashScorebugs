import React from "react";
import { Link } from "react-router-dom";
import "../../css/popup.css";

function StartMsg({ onClose }) {
    return (
        <>
            <div className="Soscontain">
                <div className="sos">
                    <h2>Welcome to the Scorebug Controller</h2>
                    <h3>
                        If you have set this up before, refresh the Browser Source in the stream scene sources
                    </h3>
                    <button onClick={onClose}>Start Scorekeeping</button>
                    <br />
                    <h3>
                        If This is your first Time do the following:
                    </h3>
                    <ul>
                        <li>
                            Add a Browser Source to your stream in the OBS sources window/tab.
                        </li>
                        <li>
                            When prompted, Click "Create New", Enter "Scorebug" into the text box and Click "ok"
                        </li>
                        <li>
                            in the URL field, enter the link:<br /><br /> https://www.simplesmashscorebugs.com/#/scoreboard<br /><br />
                            Then, ensure the following before clicking ok:
                            <ul>
                                <li>Width is Set to 1920</li>
                                <li>Height is Set to 1080</li>
                                <li>The custom CSS field is empty</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        The scorebug should now be added and will appear in the stream preview.
                        <br /><br />
                        If the scorebug is not sized correctly or in the wrong spot, do the following:
                        <br /><br />
                        In the sources Tab, right click on "scoreboard" then "transform" and then "fit to screen" to ensure it is size correctly.
                        <br /><br />
                    </p>
                    <h3>
                        Adding the commentator Scorebug:
                    </h3>
                    <p>
                        If you would like to have a seprate scene for commentators, we have a scorebug for that. 
                        <br /><br />
                        To set this up do the same process as before in the commentator scene but use the following link as the browser source URL:
                        <br /><br />
                        https://www.simplesmashscorebugs.com/#/comms
                        <br /><br />
                        For more in depth instuctions on setup and how to use the scorbug, <Link to="/howtouse">please view the setup/support documentation </Link>
                    </p>
                    <br />
                    <button onClick={onClose}>Start Scorekeeping</button>
                </div>
            </div >
        </>
    );
}

export default StartMsg;