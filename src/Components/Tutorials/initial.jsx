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
                <ol>
                    <li>Copy the link to the Scorebugs Page: https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/scorebugs</li>
                    <li>Open Open Broadcasting Software Studio (OBS)</li>
                    <li>From the OBS topbar, click on "Docks" then on "Custom Browser Docks"</li>
                    <li>In the "Custom Browser Docks" menu that pops up, put an arbitrary name in the dock name section and past the link to the scorebugs page in the "URL" field and click apply</li>
                    <li>At this point, the website will appear in an OBS window. This window can be dragged around or placed inside the OBS dashboard like any other dock, place it in your OBS as you please</li>
                    <li>Close the Custom Browser Docks menu, we do not need it anymore</li>
                    <li>Create a new Browser source in the sources panel in OBS</li>
                    <li>
                        In the properties tab, do the following before clicking ok:
                        <ul>
                            <li>set the URL field to be https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/scoreboard</li>
                            <li>set the width to 1920px and height to 1080px. This is Smash ultimates native resolution, the scorebugs are hard set to match this resolution as your stream output should match this resolution</li>
                            <li>Delete the Custom CSS field</li>
                        </ul>
                    </li>
                    <li>In the stream preview Make sure the Browser source we just added takes up the entire preview space. If not then you either improperly sized the browser soure or your stream output is not set to 1080p</li>
                    <li>The scoreboard is now completely setup and you are ready to use the overlay</li>
                    <li>To use and overlay, click on a scorebug theme from the "Scorebug Selection" page you added as a Custom Browser Dock</li>
                    <li>This will open a controller page that you will use to control the overlay. Once you see this page, Refresh the browser source in the stream sources panel</li>
                    <li> Upon refresh, you should now see the singles version of the scorebug theme appear you are now ready to to use your overlay</li>
                </ol>
            </div>
        </>
    );
}

export default Initial;