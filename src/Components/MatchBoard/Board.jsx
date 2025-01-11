import React, { useState, useEffect } from "react";


function MatchBoard() {
    const endpoint = "https://api.start.gg/gql/alpha"
    let Token = localStorage.getItem("access_token");
    const [Slug, setSlug] = useState("");
    const [Pages, setPages] = useState(0);
    const [Page, setPage] = useState(0);
    const [X, setX] = useState(0);

    function FetchSets() {
        const query = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer" + Token },
            body: JSON.stringify({
                "query": `query EventSets($slug: String) {
                        event(slug: $slug) {
                            id
                            name
                            sets {
                            pageInfo {
                                total
                            }
                        nodes {
                        id
                        state
                        startedAt
                        slots {
                            id
                            entrant {
                                id
                                name
                            }
                        }
                    }
                }
            }
        }`,
                "operationName": "EventSets",
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
                // logic will need to change. likely will do an array of dictionaries and only store called and uncalled matches, 
                // insert called at the front and uncalled at the top of the stack

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


    const reload = () => {
        setPage(X+1)
        if (Page > Pages)
        {
            FetchSets()
            setPage(0)
        } else {


        }
    };

    useEffect(() => {
        reload();
        const interval = setInterval(reload, 4000);
        
        // this is so if this page is used as a component the interval ends
        // when the component is closed
        return () => {
            clearInterval(interval);
        };
    });


    return (
        <>

        </>
    )
}

export default MatchBoard;