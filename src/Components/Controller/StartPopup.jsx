import React from "react";
import "../../css/popup.css";

function StartMsg({ onClose }) {
    return (
        <>
            <div className="Soscontain">
                <div className="sos">
                    <h2>Welcome to the Scorebug Controller</h2>
                    <h3>
                        If this is your first time using, be sure to do the following to setup the scorebug:
                    </h3>
                    <ul>
                        <li>
                            In the "sources" tab, Add a new Browser source by right clicking on the sources list then clicking "Add" then "Browser". 
                            Alternatively click the "+" icon in the bottom left corner of the sources list and then on browser
                        </li>
                        <li>
                            Click "Create New", Enter "Scorebug" into the text box and Click "ok"
                        </li>
                        <li>
                            in the URL field, enter the link "https://www.simplesmashscorebugs.com/#/scoreboard". <br />
                            Since smash ultimate is capped to 1080p resolution, 
                            make sure your stream output is set to 1080x1920 (Width x Height) 
                            And also ensure the width and hieght fields for the scorebug are also set to 1080px and 1920px.
                            Additonally, ensure that the custom CSS field is empty (OBS will automatically populate this
                            with some styles). 
                        </li>
                        <li>
                            If the scorebug is not sized correctly or in the wrong spot, go to the sources tab, right click on "scoreboard", then on
                            "transform" and then on "fit to screen" to ensure it is size correctly. 
                            At fist a scorebug may not appear, in this case, refresh the page or select one of the options out of singles or doubles on the control panel.
                        </li>
                    </ul>
                    <p>
                        If you have already added the overlay to your stream sources, Then
                        refresh the browser source to update the overlay. To do this,
                        left-click on "scoreboard" in sources. This will bring up a grey bar
                        below the stream preview with a button to refresh the page. Clicking
                        this button will refresh the page and display your scoreboard.
                    </p>
                    <br></br>
                    <button onClick={onClose}>Start Smashing</button>
                </div>
            </div>
        </>
    );
}

export default StartMsg;