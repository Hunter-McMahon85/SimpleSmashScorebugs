import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Landing.css'

const SggAPI = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>
                    Using the start.gg API
                </h3>
                <p>Pre-Requisite: Your start.gg account must have admin/moderator access to the tournament page</p>
                <h4>
                    On Start.gg:
                </h4>
                <ol>
                    <li></li>
                </ol>
                <h4>
                    On the Simple Smash Scorebugs Controller page:
                </h4>
                <ol>
                    <li>From the Score controller page, Click the "Login with Start.gg" button</li>
                    <li>sign into your start.gg account</li>
                    <li>Enter the tournament Slug. this can be found in the tournament URL as follows: https://www.start.gg/tournament/ <b>----SLUG----</b> /events</li>
                    <li>Enter the username of the twitch/youtube channel for your stream into the streamer name field</li>
                    <li>Now you can click "Fetch From Stream Queue" and the scorebug will auto populate with the tags and info for the match at the front of the stream Queue</li>
                </ol>
                <h4>Final Check/Notice</h4>
                <p>Once added your work is not yet over.
                    You will need to ensure that your TO is adding matches to the stream Queue associated with your stream (start.gg supports multiple stream queues for events).
                    Additionally, matches are also not removed from the queue unless an admin either manually removes it or until a score for a match is entered into start.gg.
                    To ensure proper function please make sure that your Tournament Organizer promptly enters the scores of stream matches into start.gg.
                </p>
            </div>
        </>
    );
}

export default SggAPI;