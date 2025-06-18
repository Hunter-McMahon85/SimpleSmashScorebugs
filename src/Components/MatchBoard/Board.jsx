import React, { useState, useEffect } from "react";
import '../../css/matchboard.css'

function MatchBoard() {
    const endpoint = "https://api.start.gg/gql/alpha"
    let Slug = localStorage.getItem("MBslug")
    //let DState = localStorage.getItem("display");

    let DState = localStorage.getItem("status_to_display");;
    let Token = localStorage.getItem("access_token");
    // -----------------------------Temporaily static for development----------------------------------------
    

    // this is the number of rows in the table, eventually determined by window size but static for initial beta release
    let m = 10;
    //------------------------------
    const [Active, setActive] = useState([]);
    const [Idle, setIdle] = useState([]);
    const [Board, setBoard] = useState(<tr></tr>);
    const [NumPages, setNumPages] = useState(1);
    const [CurPage, setCurPage] = useState(1);

    useEffect(() => {
        console.log(DState)
        switch (DState) {
            case 1:
                // uncalled match
                break;
            case 2:
                // match in progress
                break;
            case 3:
                // completed match
                break;
            case 6:
                // match has been called
                break;
                // case to be added for ladders matchmaking
            default:
                break;
        }
    }, [DState]);

    function FetchSets() {
        let query = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer" + Token },
            body: JSON.stringify({
                "query": `query EventSets($slug: String, $DesiredState: [Int], $CurPage: Int) 
                {
                    event(slug: $slug) {
                        id
                        name
                        sets(perPage: 142, page: $CurPage, filters: {state: $DesiredState}) {
                            pageInfo {
                                total
                                totalPages
                                page
                            }
                            nodes {
                                id
                                state
                                startedAt
                                fullRoundText
                                phaseGroup {
                                    phase {
                                        name
                                    }
                                }
                                slots {
                                    entrant {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }`,
                "operationName": "EventSets",
                "variables": { "slug": Slug, "DesiredState": DState, "CurPage": CurPage }
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
            // api call rate limit is 80 per 60 seconds. must average below 1.33 calls per second
            let data = await fetch_data();
            data = JSON.parse(data);
            //console.log(data)
            let sets = data["event"]["sets"];
            setNumPages(data["event"]["sets"]["pageInfo"].totalPages);

            if (CurPage >= NumPages)
            {
                setCurPage(1);
            }
            else
            {
                setCurPage(CurPage + 1);
            }

            // two que's, one for active and one for inactive. each time a match is removed from the active queue we preform a check to see if the matches status is still the same
            // this can likely be done with an sliding pointer for better space efficency 
            let AQ = []
            let n = sets["nodes"].length;

            
            setIdle(prevIdle => {
                let updatedIdle = [...prevIdle]; // Copy of the previous Idle queue
        
                // Only add nodes that aren't already in the queue (no duplicates)
                for (let i = 0; i < n; i++) {
                    const node = sets["nodes"][i];
                    if (!updatedIdle.some(item => item.id === node.id)) {
                        updatedIdle.push(node); // Add new node if it's not already in the queue
                    }
                }
        
                return updatedIdle; // Return the updated Idle state
            });
        
            
            setBoard("");

            // set the active queue: double checks if match is queued match is still active
            let i = 0;
            setIdle(prevIdle => {
                let updatedIdle = [...prevIdle]; // Copy of the previous state
        
                while (i < m) {
                    let toADD = updatedIdle.shift(); // Remove the first element of the Idle queue
                    if (toADD === undefined) {
                        break; // If no more items in Idle, exit
                    }

                    AQ.push(toADD);
                    i++;
                }
        
                return updatedIdle; // Return the updated Idle state after removal
            });

            setActive(AQ);

            // console.log(Active);
            console.log(Idle);
            // console.log("----------------------------------------------------------")

            let rows = Active.map((item, i) => (
                <tr key={i}>
                    <td className="stime">
                        {new Intl.DateTimeFormat('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true,
                        }).format(new Date(item.startedAt * 1000))}<br />(+{Math.floor((Date.now() / 1000 - item.startedAt) / 60)} Minutes)
                    </td>
                    <td className="matchup">
                        <b>{item.slots[0]?.entrant?.name}</b> <span className="vs-text">vs</span> <b>{item.slots[1]?.entrant?.name}</b>
                    </td>
                    <td className="roundtxt">{item.fullRoundText}</td>
                    <td className="pooltxt">{item.phaseGroup?.phase?.name}</td>
                </tr>
            ));

            setBoard(rows);
        }

        set_data();
    }

    useEffect(() => {
        // just let it run, code will spaz out is fetch sets is called elsewhere
        // and will be rate limited
        const interval = setInterval(() => {
            
            FetchSets();
        }, 6000);

        // this is so if this page is used as a component the interval ends
        // when the component is closed
        return () => {
            clearInterval(interval);
        };
    });


    return (
        <>
            <div className="MBcontain">
                <div className="MBhead">
                    <h1>CALLED MATCHES</h1>
                </div>
                <div className="MBBoard">
                    <table>
                        <thead>
                            <tr>
                                <th>Call Time</th>
                                <th>Matchup</th>
                                <th>Round</th>
                                <th>Phase</th>
                            </tr>
                        </thead>
                        <tbody>{Board}</tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div className="MBfoot">
                    <p>Utility Provided By SimpleSmashScorebugs.com</p>
                </div>
            </div>
        </>
    )
}

export default MatchBoard;