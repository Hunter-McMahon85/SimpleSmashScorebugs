import { useState, useEffect } from "react";
import oauthConfig from "../Controller/oauthConfig";
import NavBar from "../navbar";
import Foot from "../footer";
import { Link } from "react-router-dom";

function BoardConfig() {
    const endpoint = "https://api.start.gg/gql/alpha"
    let Token = localStorage.getItem("access_token");
    const [Slug, setSlug] = useState("");
    const [LoginTXT, setLoginTXT] = useState("Login with Start.gg");

    useEffect(() => {
        if (Token != null) {
            setLoginTXT("Refresh Start.GG Login");
        }
    }, [Token]);

    const submit = (DesiredState) => {
        
        //const url = "https://www.start.gg/tournament/api-testing-3/event/dev-testing/brackets/1534774/2307767";
        const match = Slug.match(/tournament\/.*?\/event\/.*?(?=\/|$)/);

        if (match) {
            console.log(match[0]); // Output: "tournament/api-testing-3/event/dev-testing"
        } else {
            console.log("No match found.");
        }
        
        console.log(Slug)
        localStorage.setItem('MBslug', match);
        localStorage.setItem('status_to_display', DesiredState);
    }

    const login = () => {
        localStorage.setItem('LoginContext', "MB");
        const authUrl = `https://start.gg/oauth/authorize?response_type=code&client_id=175&scope=user.identity%20user.email&redirect_uri=${encodeURIComponent(oauthConfig.redirect_uri)}`;
        window.location.href = authUrl;
    };

    return (
        <>

            <div>
                <button onClick={login}>{LoginTXT}</button>
                <form>
                    <br /><br />
                    <label>Enter Event Slug:
                        <input
                            type="text"
                            value={Slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </label>
                    <br /><br />
                    <label>
                        <Link to="/MatchBoard">
                            <button onClick={() => { submit(1); }}>
                                Uncalled Matches
                            </button>
                        </Link>
                        <Link to="/MatchBoard">
                            <button onClick={() => { submit(2); }}>
                                Called Matches
                            </button>
                        </Link>
                        <Link to="/MatchBoard">
                            <button onClick={() => { submit(0); }}>
                                Matches in Progress
                            </button>
                        </Link>
                        <Link to="/MatchBoard">
                            <button onClick={() => { submit(3); }}>
                                Completed Matches
                            </button>
                        </Link>
                        <Link to="/MatchBoard">
                            <button onClick={() => { submit(0); }}>
                                Ladder Matchmaking
                            </button>
                        </Link>
                    </label>
                </form>
            </div>
        </>
    )
}

export default BoardConfig;