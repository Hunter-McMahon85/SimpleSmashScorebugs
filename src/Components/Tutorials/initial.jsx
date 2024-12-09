import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Landing.css'

const Initial = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>
                    Initial Setup Instructions
                </h3>
                <iframe width="600" height="330" src="https://www.youtube.com/embed/ICGO1dxtRzo?si=ejdblGuucgBPk8Ab" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <ol>
                    <li>Copy the link to the Scorebugs Page: https://www.simplesmashscorebugs.com/#/scorebugs</li>
                    <li>Open Open Broadcasting Software Studio (OBS)</li>
                    <li>From the OBS topbar, click on "Docks" then on "Custom Browser Docks"</li>
                    <li>In the "Custom Browser Docks" menu, put an name in the dock name section and paste the link to the scorebugs page in the "URL" field and click apply</li>
                    <li>the website will appear in an OBS window. This window can be dragged around or placed inside the OBS dashboard like any other dock, place it in your OBS as you please</li>
                    <li>Close the Custom Browser Docks menu, we do not need it anymore</li>
                    <li>
                        Now Add a new Browser Source to your stream in the OBS sources window/tab.
                    </li>
                    <li>
                        When prompted, Click "Create New", Enter "Scorebug" into the text box and Click "ok"
                    </li>
                    <li>
                        in the URL field, enter the link: https://www.simplesmashscorebugs.com/#/scoreboard<br />
                        Then, ensure the following before clicking ok:
                        <ul>
                            <li>Width is Set to 1920</li>
                            <li>Height is Set to 1080</li>
                            <li>The custom CSS field is empty</li>
                        </ul>
                    </li>
                </ol>
                <h4>
                    Final Checks
                </h4>
                <p>The scorebug utility should now be added to your stream. In case it looks funky or nothing appears. Consider the following:</p>
                <ul>
                    <li>In the stream preview, ensure your browser source takes up the entire preview space. If not, ensure it is sized to be 1080p (1920 pixels wide 1080 pixels tall) along with your stream output</li>
                    <li>
                        The controller page we added initially is the scorebug theme selection page. To begin a stream, do the following:
                        <ol>
                            <li>Select a scorebug theme from the selection page. This will open the actual controller page</li>
                            <li>Refresh the browser source in the stream sources panel</li>
                            <li> Upon refresh, you should now see the singles version of the scorebug theme appear you are now ready to to use your overlay</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Initial;