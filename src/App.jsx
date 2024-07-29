import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Controller from "./Pages/scorecontroller";
import Landing from "./Pages/landing";
import Comms from "./Components/NTZ/comms";
import About from "./Pages/about";
import HowToUse from "./Pages/howto";
import ScorebugSelect from "./Pages/scorebugs";
import Scoreboard from "./Pages/scoreboard";



function App() {
  return (
    <Router basename="/SimpleSmashScorebugs">
      <Routes>
        <Route path="/SimpleSmashScorebugs" element={<Landing />} />
        <Route path="/SimpleSmashScorebugs/scoreboard" element={<Scoreboard />} />
        <Route path="/SimpleSmashScorebugs/howtouse" element={<HowToUse />} />
        <Route path="/SimpleSmashScorebugs/scorebugs" element={<ScorebugSelect/>} />
        <Route path="/SimpleSmashScorebugs/about" element={<About/>} />
        <Route path="/SimpleSmashScorebugs/controller" element={<Controller />} />
        <Route path="/SimpleSmashScorebugs/comms" element={<Comms />} />
      </Routes>
    </Router>
  );
}

export default App;
