import React from 'react'
import { Link } from "react-router-dom";
import '../css/Landing.css'

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <nav className="topnav">
                    <ul className="navitems">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/howtouse">
                                Tutorials
                            </Link>
                        </li>
                        <li>
                            <Link to="/scorebugs">
                                Scorebugs
                            </Link>
                        </li>
                        <li>
                            <Link to="/MBconfig">
                                MatchBoard
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar;