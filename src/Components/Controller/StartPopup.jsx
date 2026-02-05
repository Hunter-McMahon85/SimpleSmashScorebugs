import React from "react";
import { Link } from "react-router-dom";
import "../../css/popup.css";
import Tutorial from "../Tutorials/tutorial";

function StartMsg({ onClose }) {
    return (
        <>
            <div className="Soscontain">
                <div className="sos">
                    <h2>Welcome to the Scorebug Controller</h2>
                    <h3>If you have set this up before, refresh the Browser Source in the stream scene sources</h3>
                    <button onClick={onClose}>Start Scorekeeping</button>

                    <Tutorial></Tutorial>
                    
                    <button onClick={onClose}>Start Scorekeeping</button>
                </div>
            </div >
        </>
    );
}

export default StartMsg;