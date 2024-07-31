import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar";
import '../css/Landing.css'

const About = () => {

    return (
        <>
            <div class="landcontain">
                <NavBar></NavBar>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>About</h2>

                <div class="instructions">
                    <div className='InstructionContent'>
                        <h3>Why this Utility works</h3>
                        <p>No matter if a website is added to OBS as a source or as a custom browser dock, OBS will behave like a single web browser window for both pages. Because of this, webpages added as custom browser docks to OBS can modify the state of a webpage added as a stream source by simply using the localStorage class in Javascript. In turn we are able to provide an simple and lightweight scorebug overlay solution that requires 0 downloads. This does come with the downside of not being usable offline (without some trickery). However considering that a livestream requires an internet connection, it is likely an edge case that will likely never be an prevalent issue</p>
                        <h3>History</h3>
                        <p>
                            Although I am not a smash bros player, during my time at the University of Oregon (2020-2024), my roomate was the president of the Smash Bros Club.
                            In this he would run a weekly, free local titled duck hunt. During my time, this tournament series revitalized the local scene after several
                            game stores which hosted events shut down during covid. These events drew roughly 30-40 people with and all time high in the 50s-60s with even a sponsored semi-pro
                            player, Big D, attending an duck hunt (and yes I ran the stream for this one). The idea to stream came from the fact there was demand from players to review their
                            games or leave early. This grew as the tournaments got larger resulting them in ending late to the point where facilities would kick us out of the host classroom meaning finals had to be played in our appartment often.
                            In turn, I decided to use some of my CS knowledge from my degree to create an custom overlay as most options out their didnt cut it for me.
                            <br />
                            <br />
                            Version 1 started with an primitive python application. I was very early in my path and discovered that obs could pull text sources from .txt files.
                            In turn, the first implementation was a jank contraption of a text sources over an image of artwork I made in MS paint.
                            From this, the text sources pulled from .txt files that were modified with a python script I made. Though after a few streams I realized that this version 1 would not be a sustainable option.
                            The python script I made used the python terminal to call the functions to change the .txt files.
                            Toying with options to remedy this, I came accross the realization that twitch and youtube steam overlays are nothing but webpages added to streams as browser sources. Thus version 2 was born.
                            <br />
                            <br />
                            Version 2 was a webpage made with raw HTML, CSS, and Javascript and was a significant improvement. In fact, implementation wise, it is very similar to this current version of the scoreboard.
                            That is, version 2 was the first version to use the OBS custom browser docks implementation that this utility uses. Furthermore, it was the first version to use the start.gg api to pull tags.
                            At the time, it was something I was proud enough to make a landing page for and publish onto github pages with a custom domain bought from namecheap.
                            This version served me well in my stream productions for 2 years though it was when I started to pick up react I gained the motivation to revise it once again.
                            <br />
                            <br />
                            What you see here is version 3 of the scorebug and it is made using the react framework. Version 2, while capable had some minor flaws that could use some fixing that have been patched in this version.
                            For one, version 2 could not do doubles matches. Additionally, it was stuck to a single scorebug template.
                            This was a problem as an mutual friend of myself and a roomate was intrested in commisioning me to run the stream a regional sized event (100 or so attendess was the expectation).
                            The event, No Tech Zone, ended up being canceld due to an frankly historic ice storm which left the whole ground covered in a sheet of 1-2 inch thick ice for a span of a week.
                            However, the preperation for this event laid the groundwork for version 3 of this scoreboard.
                            Unlike version 2s API call which used the match ID letter start.gg gives to each match, version 3 uses the stream queue feature of start.gg.
                            Additionally, with the transisition to react, I have been able to make the utility into a more modular format allowing for the use of more templates that can be used in case of a future commision.
                            <br />
                            <br />
                            In turn that comes to the present. This project will always live as a github page regardles of whether or not the commmunity around Smash Ultimate stays alive.
                            Regardless, I hope you are able to find this project interesting and if you made it this far, thank you for taking time to read this story of how this site came to be.
                        </p>

                        <h3>Creator</h3>
                        <p>
                            This is a solo project made by Hunter McMahon
                        </p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default About;
