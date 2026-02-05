import React, { useEffect, useState } from "react";
import NavBar from "../Components/landing/navbar";
import Foot from "../Components/landing/footer";
import Tutorial from "../Components/Tutorials/tutorial";
import '../css/Landing.css'


const HowToUse = () => {
    return (
        <>
            <div class="landcontain">
                <div class="title">
                    <h1>Simple Smash Scorebugs Tutorials</h1>
                </div>
                <NavBar></NavBar>
                <div className='content'><Tutorial></Tutorial></div>
                <Foot></Foot>
            </div >
        </>
    );
}

export default HowToUse;