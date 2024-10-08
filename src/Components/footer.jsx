import React from 'react'
import { Link } from "react-router-dom";
import '../css/Landing.css'

const Foot = () => {
    return (
        <>
            <div className="foot">
                <footer>
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/hunter-mcmahon-69984020a/">
                                Who made this
                            </Link>
                        </li>
                        <li>
                            <Link to="/PrivacyPolicy">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/TOS">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Foot;