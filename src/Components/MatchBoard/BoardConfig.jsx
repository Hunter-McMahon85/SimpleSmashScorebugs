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

    const submit = () => {
        console.log(Slug)
        localStorage.setItem('MBslug', Slug);
    }

    const login = () => {
        localStorage.setItem('LoginContext', "MB");
        const authUrl = `https://start.gg/oauth/authorize?response_type=code&client_id=175&scope=user.identity%20user.email&redirect_uri=${encodeURIComponent(oauthConfig.redirect_uri)}`;
        window.location.href = authUrl;
    };

    return (
        <>
            <div className="landcontain">
                <NavBar></NavBar>
                <div className="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>Info</h2>
                <div className='content'>
                    <div className="instructions">
                        <div className='InstructionContent'>

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
                                    <label>
                                        <Link to="/MatchBoard">
                                            <button onClick={() => { submit(); }}>
                                                Submit
                                            </button>
                                        </Link>
                                    </label>
                                </form>
                            </div>

                            <br />

                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        </>
    )
}

export default BoardConfig;