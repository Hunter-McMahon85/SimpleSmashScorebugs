import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Initial = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>
                    Initial Setup Instructions
                </h3>
                <iframe width="600" height="330" src="https://www.youtube.com/embed/l4LkC63rK40?si=6EmPsv57TCPBQnEW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    If you would like to have a seprate scene for commentators, we have a graphic for that.
                    <br /><br />
                    To set this up add a browser source in the commentator scene but replace the link with:
                    <br /><br />
                    https://www.simplesmashscorebugs.com/#/comms
                    <br /><br />
                </p>
                <h4>
                    Final Checks
                </h4>
                <p>The scorebug utility should now be added to your stream. In case it looks funky or nothing appears. Consider the following:</p>
                <ul>
                    <li>In the stream preview, ensure your browser source takes up the entire preview space. If not, ensure it is sized to be 1080p (1920 pixels wide 1080 pixels tall) along with your stream output</li>
                    <li>If nothing appears in the stream preview. Make sure you select a scorebug theme from the scorebug app portion of the home page docked to OBS. Once you land on the controller screen, refresh your browser source from the sources panel. To do this, click on the browser source in the sources panel, upon doing so, a button to refresh the page should appear below the preview window, click this button to refresh the browser source.</li>
                </ul>
            </div>
        </>
    );
}

export default Initial;