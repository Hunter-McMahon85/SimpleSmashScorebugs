import React, { useState, useEffect } from "react";
import oauthConfig from "./oauthConfig";



function SQFetch() {
    const endpoint = "https://api.start.gg/gql/alpha"
    let Token = localStorage.getItem("access_token");
    const [Streamer, setStreamer] = useState("None");
    const [Slug, setSlug] = useState("None");
    const [LoginTXT, setLoginTXT] = useState("Signed Out");
    const [showFields, setshowFields] = useState(false);

    const toggleSection = () => {
        setshowFields(!showFields);
        localStorage.setItem("streamconfig", JSON.stringify(!showFields));
    };

    useEffect(() => {
        setshowFields(JSON.parse(localStorage.getItem("streamconfig")));
        let TimeFromLastLogin = (Date.now() - parseInt(localStorage.getItem("login_time"))) / 3600000
        if (Token != null && (TimeFromLastLogin > 24)) {
            setLoginTXT("Signed In");
        }
    }, [Token]);

    const handleStream = (event) => {
        setStreamer(event.target.value);
    }

    const handleSlug = (event) => {
        setSlug(event.target.value);
    }

    function FetchQueue() {
        const query = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer" + Token },
            body: JSON.stringify({
                "query": `query StreamQueueOnTournament($tourneySlug: String!) {
                tournament(slug: $tourneySlug) 
                {
                  streamQueue 
                  {
                    stream 
                    {
                      streamName
                    }
                    sets 
                    {
                      fullRoundText
                      slots 
                      {
                        entrant 
                        {
                          participants {
                            gamerTag
                            user{
                              genderPronoun
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }`,
                "operationName": "StreamQueueOnTournament",
                "variables": { "tourneySlug": Slug }
            })
        };

        async function fetch_data() {
            let response = fetch(endpoint, query)
                .then((res) => res.json())
                .then((result) => {
                    return result.data;
                });
            let data = await response;
            data = JSON.stringify(data);
            return data;
        }

        async function set_data() {
            let data = await fetch_data();
            data = JSON.parse(data);
            let Queues = data["tournament"]["streamQueue"];

            let is_valid = false;
            let desired_Q = null;
            for (let i = 0; i < Queues.length; i++) {
                if (Streamer === Queues[i]["stream"]["streamName"]) {
                    is_valid = true;
                    desired_Q = Queues[i];
                    break;
                }
            }
            if (is_valid === true) {
                localStorage.setItem("p11", "");
                localStorage.setItem("p12", "");
                localStorage.setItem("p21", "");
                localStorage.setItem("p22", "");
                localStorage.setItem("Pronoun11", "");
                localStorage.setItem("Pronoun12", "");
                localStorage.setItem("Pronoun21", "");
                localStorage.setItem("Pronoun22", "");
                localStorage.setItem("round", "");


                localStorage.setItem("round", desired_Q["sets"][0]["fullRoundText"]);
                localStorage.setItem("p11", desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][0]["gamerTag"]);
                if (desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][0]["user"]) {
                    localStorage.setItem("Pronoun11", desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][0]["user"]["genderPronoun"]);
                }

                localStorage.setItem("p21", desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][0]["gamerTag"]);
                if (desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][0]["user"]) {
                    localStorage.setItem("Pronoun21", desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][0]["user"]["genderPronoun"]);
                }

                if (desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][1]) {
                    localStorage.setItem("p12", desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][1]["gamerTag"]);
                    if (desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][1]["user"]) {
                        localStorage.setItem("Pronoun12", desired_Q["sets"][0]["slots"][0]["entrant"]["participants"][1]["user"]["genderPronoun"]);
                    }
                }

                if (desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][1]) {
                    localStorage.setItem("p22", desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][1]["gamerTag"]);
                    if (desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][1]["user"]) {
                        localStorage.setItem("Pronoun22", desired_Q["sets"][0]["slots"][1]["entrant"]["participants"][1]["user"]["genderPronoun"]);
                    }
                }
            }
        }

        set_data();
    }

    const login = () => {
        localStorage.setItem('LoginContext', "SQ");
        const authUrl = `https://start.gg/oauth/authorize?response_type=code&client_id=175&scope=user.identity%20user.email&redirect_uri=${encodeURIComponent(oauthConfig.redirect_uri)}`;
        window.location.href = authUrl;
    };

    return (
        <>
            <div className="qStatus">
                <h3>Stream Queue Status</h3>
                <p>Current Stream: {Streamer} </p>
                <p> Current SLUG: {Slug}</p>
                <p>Start.GG: {LoginTXT}</p>
            </div>
            <h2><button onClick={toggleSection}>Configure Stream Queue</button></h2>

            {showFields && (
                <div className="modcontain">
                    <div className="mod">
                        <button onClick={login}>Sign In</button>
                        <p className="modtxt">Current Status: {LoginTXT}</p>
                        <br />
                        <input type="text" placeholder="Enter Tourney Slug" onChange={handleSlug} />
                        <br />
                        <input type="text" placeholder="Enter Streamer Name" onChange={handleStream} />

                        <br /><br />
                        <button onClick={toggleSection}>Close</button>
                    </div>
                </div>
            )}

            <h2><button onClick={() => FetchQueue()}>Fetch Tags From Stream Queue</button></h2>
        </>)
}

export default SQFetch;