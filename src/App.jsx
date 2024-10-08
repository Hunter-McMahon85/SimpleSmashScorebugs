import React from "react";
import { Route, Routes } from "react-router-dom";
import Controller from "./Pages/scorecontroller";
import Landing from "./Pages/landing";
import Comms from "./Components/NTZ/comms";
import About from "./Pages/about";
import HowToUse from "./Pages/howto";
import ScorebugSelect from "./Pages/scorebugs";
import Scoreboard from "./Pages/scoreboard";
import Callback from "./Pages/callback";
import PP from "./Pages/privacypolicy";
import Terms from "./Pages/Terms";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
      <Route path="/howtouse" element={<HowToUse />} />
      <Route path="/scorebugs" element={<ScorebugSelect />} />
      <Route path="/about" element={<About />} />
      <Route path="/controller" element={<Controller />} />
      <Route path="/comms" element={<Comms />} />
      <Route path="/TokenAuth" element={<Callback />} />
      <Route path="/PrivacyPolicy" element={<PP />} />
      <Route path="/TOS" element={<Terms />} />
    </Routes>
  );
}

export default App;
