import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SggAPI = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>
                    Using the start.gg API
                </h3>
                <p>Pre-Requisite: Your start.gg account must have admin/moderator access to the tournament page</p>
                <h4>
                    Start.gg setup:
                </h4>
                <ol>
                    <li>Open the tournament page on start.gg; ensure you are signed in with an account with admin access to the event</li>
                    <li>Navigate to, Settings then Stations & Streams</li>
                    <li>Click Add Stream</li>
                    <li>Fill in the fields. Keep a Note of the Channel Name as that will need to be entered into the scorebug later</li>
                    <li>Navigate to the bracket you are broadcasting</li>
                    <li>click on a match</li>
                    <li>click "stream"</li>
                    <li>click the username of the channel you are broadcasting on</li>
                    <li>Repeat steps 6-8 to add matches you plan on broadcasting</li>
                </ol>
                <h4>
                    Scorebug Controller Setup (aka this website):
                </h4>
                <ol>
                    <li>From the Score controller page, Click the "Login with Start.gg" button</li>
                    <li>sign into your start.gg account</li>
                    <li>Enter the tournament Slug. this can be found in the tournament URL as follows: https://www.start.gg/tournament/ <b>----SLUG----</b> /events</li>
                    <li>In the Streamer Name field, Enter the twitch/youtube channel name</li>
                    <li>Click the "Fetch From Stream Queue" button. This will auto populate the bug for the match at the front of the queue
                        <ul>
                            <li>Between matches, you will always need to click the "Fetch From Stream Queue" button to cycle to the next match</li>
                            <li>Note that the next match will not be moved to the front of the queue by Start.gg until the current match is marked as complete</li>
                        </ul>
                    </li>
                </ol>
                <h4>Additional Notes</h4>
                <p>Using the Stream queue requires proactive attention throughout your event. Make sure you add matches as needed to the queue on start.gg. Keep in mind that this portion requires admin access to start.gg so work closely with your Tournament Organizer (TO) if you dont have this access</p>
            </div>
        </>
    );
}

export default SggAPI;