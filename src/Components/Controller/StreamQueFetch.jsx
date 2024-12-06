import React, { useState, useEffect } from "react";
import oauthConfig from "./oauthConfig";



function SQFetch() {
    const endpoint = "https://api.start.gg/gql/alpha"
    let Token = localStorage.getItem("access_token");
    const [Streamer, setStreamer] = useState("");
    const [Slug, setSlug] = useState("");
    const [LoginTXT, setLoginTXT] = useState("Login with Start.gg");
    const [showFields, setshowFields] = useState(true);

    const toggleSection = () => {
        setshowFields(!showFields);
    };

    useEffect(() => {
        if (Token != null) {
            setLoginTXT("Refresh Start.GG Login");
        }
    }, [Token]);

    const handleStream = (event) => {
        setStreamer(event.target.value);
        console.log(Streamer);
    }

    const handleSlug = (event) => {
        setSlug(event.target.value);
        console.log(Slug);
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
        const authUrl = `https://start.gg/oauth/authorize?response_type=code&client_id=175&scope=user.identity%20user.email&redirect_uri=${encodeURIComponent(oauthConfig.redirect_uri)}`;
        window.location.href = authUrl;
    };

    return (
        <>
            <h2>
                Start.gg Stream Queue <button onClick={toggleSection}> {showFields ? 'Hide Fields' : 'Show Fields'}</button>
            </h2>


            {showFields && (
                <div>
                    <button onClick={login}>{LoginTXT}</button>
                    <br />
                    <input type="text" placeholder="Enter Tourney Slug" onChange={handleSlug} />
                    <br />
                    <input type="text" placeholder="Enter Streamer Name" onChange={handleStream} />
                </div>
            )}
            <br />
            <button onClick={() => FetchQueue()}>Fetch From Stream Queue</button>

        </>)
}

export default SQFetch;