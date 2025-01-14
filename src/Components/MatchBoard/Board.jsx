import React, { useState, useEffect } from "react";


function MatchBoard() {
    const endpoint = "https://api.start.gg/gql/alpha"
    // let Token = localStorage.getItem("access_token");
    // -----------------------------Temporaily static for development----------------------------------------
    let Token = "no token 4 u";
    let DState = 6;
    let m = 3;
    //------------------------------
    const [Slug, setSlug] = useState(localStorage.getItem("MBslug"));
    const [Active, setActive] = useState([]);
    const [Idle, setIdle] = useState([]);
    const [Board, setBoard] = useState("");

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
                "variables": { "slug": Slug }
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
            //console.log(data)
            let sets = data["event"]["sets"];

            // two stacks, one for active and one for inactive. each time a match is removed from the active queue we preform a check to see if the matches status is still the same
            let AQ = Active;
            let IQ = Idle;
            let n = sets["nodes"].length;

            // ensure the idle queue is up to date with new matches
            for (let i = 0; i < n; i++) {
                const node = sets["nodes"][i];
                const isActive = AQ.some(item => item.id === node.id);
                const isIdle = IQ.some(item => item.id === node.id);

                if (isActive || isIdle) {
                    continue;
                } else if (sets["nodes"][i]["state"] === DState) {
                    IQ.push(node);
                }
            }

            // Replace the active queue and remove matches whose state no longer match the desired state dstate
            for (let i = 0; i < m; i++) {
                let x = AQ.length;
                let y = IQ.length;

                if (y == 0) {
                    // no more matches to add to the board
                    break;
                }

                if (x == m) {
                        AQ.push(IQ.shift())
                        IQ.push(AQ.shift())
                        continue;
                }
                
                AQ.push(IQ.shift())
            }
            console.log("----------------------------------------------------------")
            setActive(AQ)
            setIdle(IQ)

            console.log(Active)
            console.log(Idle)

            setBoard(<><p>{Active[0]["id"].toString()} <br/><br/> {Active[1]["id"].toString()}  <br/><br/>{Active[2]["id"].toString()}</p></>)

        }

        set_data();
    }

    useEffect(() => {
        // just let it run, code will spaz out is fetch sets is called elsewhere
        // and will be rate limited
        const interval = setInterval(() => {
            FetchSets();
        }, 5000);

        // this is so if this page is used as a component the interval ends
        // when the component is closed
        return () => {
            clearInterval(interval);
        };
    });


    return (
        <>
            <div>
                <div>
                    <h1>CALLED MATCHES</h1>
                </div>
                <div>
                    <table></table>
                    {Board}
                </div>
                <div>
                    <p>Utility Provided By SimpleSmashScorebugs.com</p>
                </div>
            </div>
        </>
    )
}

export default MatchBoard;