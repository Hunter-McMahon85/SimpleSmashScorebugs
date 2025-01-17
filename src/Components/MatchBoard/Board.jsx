import React, { useState, useEffect } from "react";
import '../../css/matchboard.css'

function MatchBoard() {
    const endpoint = "https://api.start.gg/gql/alpha"
    let Slug = localStorage.getItem("MBslug")
   //let Token = localStorage.getItem("access_token");
    // -----------------------------Temporaily static for development----------------------------------------
    
    let DState = 6;
    // this is the number of rows in the table, eventually determined by window size but static for initial beta release
    let m = 3;
    //------------------------------
    const [Active, setActive] = useState([]);
    const [Idle, setIdle] = useState([]);
    const [Board, setBoard] = useState(<tr></tr>);

    function FetchSets() {
        const query = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer" + Token },
            body: JSON.stringify({
                "query": `query EventSets($slug: String) 
                {
                        event(slug: $slug) 
                        {
                            id
                            name
                            sets 
                            {
                            pageInfo {total}
                            nodes 
                            {
                                id
                                state
                                startedAt
                                fullRoundText
                                phaseGroup
                                {   
                                    phase 
                                    {
                                        name
                                    }
                                }
                                slots
                                {
                                    id
                                    entrant 
                                    {
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

            // two queus, one for active and one for inactive. each time a match is removed from the active queue we preform a check to see if the matches status is still the same
            // this can likely be done with an sliding pointer for better space efficency 
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

            setBoard("")
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
            //console.log("----------------------------------------------------------")
            setActive(AQ);
            setIdle(IQ);

            console.log(Active);
            //console.log(Idle);

            let rows = Active.map((item, i) => (
                <tr key={i}>
                    <td className="stime">
                        {new Intl.DateTimeFormat('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true,
                        }).format(new Date(item.startedAt*1000))}<br/>(+{Math.floor((Date.now() / 1000 - item.startedAt) / 60)} Minutes)
                    </td>
                    <td className="matchup">
                        <b>{item.slots[0]?.entrant?.name}</b> vs <b>{item.slots[1]?.entrant?.name}</b>
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
        }, 5000);

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
                                <th>Pool</th>
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