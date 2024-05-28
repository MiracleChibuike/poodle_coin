import {useNavigate} from "react-router-dom"
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhiteP from "./components/WhiteP"
import Tokens from "./components/Tokens";
import Phase1 from "./components/Phase1";
import Phase2 from "./components/Phase2";
import Phase3 from "./components/Phase3";
import Phase4 from "./components/Phase4";
import Presale from "./components/Presale";
import Staking from "./components/Staking";
import Governance from "./components/Governance";
import BuyBack from "./components/BuyBack";
import Airdrop from "./components/Airdrop";
import Rewards from "./components/Rewards";
import Conclusion from "./components/Conclusion";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhiteP />}></Route>
        <Route path="/Tokens" element={<Tokens />}></Route>
        <Route path="/Phase1" element={<Phase1 />}></Route>
        <Route path="/Phase2" element={<Phase2 />}></Route>
        <Route path="/Phase3" element={<Phase3 />}></Route>
        <Route path="/Phase4" element={<Phase4 />}></Route>
        <Route path="/Presale" element={<Presale />}></Route>
        <Route path="/Staking" element={<Staking />}></Route>
        <Route path="/Governance" element={<Governance />}></Route>
        <Route path="/Buy-back" element={<BuyBack />}></Route>
        <Route path="/Airdrop" element={<Airdrop />}></Route>
        <Route path="/Rewards_Distribution" element={<Rewards />}></Route>
        <Route path="/Conclusion" element={<Conclusion />}></Route>
      </Routes>
    </Router>
  );



}

export default App