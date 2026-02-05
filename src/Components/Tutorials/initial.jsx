import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Initial = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>Initial Setup Instructions</h3>
                <iframe width="600" height="330" src="https://www.youtube.com/embed/l4LkC63rK40?si=6EmPsv57TCPBQnEW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Adding the Scorebug Controller</h4>
                <ol>
                    <li>Copy the website Link https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/</li>
                    <li>Open Open Broadcasting Software Studio (OBS)</li>
                    <li>From the OBS topbar, click on "Docks" then "Custom Browser Docks"</li>
                    <li>In the "Custom Browser Docks" menu, enter an Arbitrary name in "Dock Name" and Paste the link into the "URL" Field then click apply</li>
                    <li>The website will open a window in OBS this can moved around or snaped into OBS to your preference</li>
                    <li>Click on the "Scorebug App" button to open the controller</li>
                </ol>

                <h4>Adding Overlays</h4>
                <table>
                    <tr>
                        <th>Manual Setup</th>
                        <th>Scene Collection Setup</th>
                    </tr>
                    <tr>
                        <td>
                            <ol>
                                <li>Add a new Browser Source to from the sources window in OBS</li>
                                <li>When prompted, Click "Create New" & Enter "Scorebug" into the text box. Click "ok"</li>
                                <li>in the URL field, enter the game scorebug link found below</li>
                                <li>Set Width to 1920</li>
                                <li>Set Height is Set to 1080</li>
                                <li>Clear the "Custom CSS" field</li>
                                <li>Click "ok"</li>
                                <li>To add the commentator overlay, repeat these steps with the commentator link below and name the source "commentators"</li>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li><a>Click this Link to Download the Scene Collection</a></li>
                                <li>Open OBS and from the top bar, click on "Scene Collection" then "Import"</li>
                                <li>In the import menu, click "Browse" and select the downloaded .json file</li>
                                <li>Click "ok" to import the scene collection</li>
                                <li>From the top bar, click on "Scene Collection" then select the newly imported scene collection</li>
                                <li>Change the input source on "Capture Card" and "commentary camera" in their respective scenes to select your devices. add more devices/sources as needed for your production</li>
                            </ol>
                        </td>
                    </tr>
                </table>
                <h4>Scorebug Links</h4>
                <ul>
                    <li>Game Scorebug: https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/scorebug</li>
                    <li>Commentator Scorebug: https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/comms</li>
                    <li>Controller link (Direct): https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/controller</li>
                </ul>
                <br />
                <p>The scorebug should now be added and will appear in the stream preview. The scorebug source should show a text box with info about getting started. To get a scorebug to populate, select "Scorbug Options" then click on a theme. Once the theme applies, click close and you can begin scorekeeping on stream</p>
                <h4>Troubleshooting</h4>
                <p>if the overlay appears but has sizing issues:</p>
                <ul>
                    <li>Verify your stream output is set to 1080p</li>
                    <li>ensure the overlay is positioned properly in the preview</li>
                    <li>Right click on the scorebug source in OBS and select "Transform" then "Fit to Screen"</li>
                    <li>Verify that the browser source properties are correct per the manual setup section above</li>
                </ul>
            </div>
        </>
    );
}

export default Initial;