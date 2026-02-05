import React from "react";
import { Route, Routes } from "react-router-dom";
import Controller from "./Pages/scorecontroller";
import Landing from "./Pages/landing";
import About from "./Pages/about";
import HowToUse from "./Pages/howto";
import Scoreboard from "./Pages/scoreboard";
import Callback from "./Pages/callback";
import PP from "./Pages/privacypolicy";
import Terms from "./Pages/Terms";
import MatchBoard from "./Components/MatchBoard/Board";
import Comms from "./Components/overlays/NTZ/comms";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
      <Route path="/tutorials" element={<HowToUse />} />
      <Route path="/about" element={<About />} />
      <Route path="/controller" element={<Controller />} />
      <Route path="/comms" element={<Comms />} />
      <Route path="/TokenAuth" element={<Callback />} />
      <Route path="/PrivacyPolicy" element={<PP />} />
      <Route path="/TOS" element={<Terms />} />
      <Route path="/MatchBoard" element={<MatchBoard />} />
    </Routes>
  );
}

export default App;
