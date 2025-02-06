import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScorebugSelect = () => {
    const HandleSelection = (B) => {
        localStorage.setItem("BugTheme", B);
    }

    return (
        <>
            <div className='InstructionContent'>
                <p>Select a scorebug by selecting a button below. To learn how to set up this utility, see the <Link to="/tutorials">tutorials</Link> page</p>
                <div className="themebuttons">
                    <Link to="/controller">
                        <button className="themebutton" onClick={() => { HandleSelection("NTZ"); }}>
                            <img src="../../SBpreview/NTZpreview.PNG" alt="NTZ" className="button-image" />
                            No Tech Zone
                        </button>
                    </Link>
                    <Link to="/controller">
                        <button className="themebutton" onClick={() => { HandleSelection("DH"); }}>
                            <img src="../../SBpreview/DHpreview.PNG" alt="Duck Hunt" className="button-image" />
                            Duck Hunt
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ScorebugSelect;