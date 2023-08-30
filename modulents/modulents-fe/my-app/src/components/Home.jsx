import { useState, useEffect } from "react";
import IndivTeamStats from "./IndivTeamStats.js";
import image from "./Penguins.jpeg"
import NavBar from "./nav_bar.js";
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import PlayerStats from "./playerStats.js";
import TeamsStats from "./teamStats.js";

function Home() {
    return (
        <div style={{
            backgroundImage: `url(${image})`
        }} className="App">
            <header className="App-header">
                <Header />
            </header>

            <Routes>
                <Route path="/teamdata" element={<TeamsStats />} />
                <Route path="/playerdata" element={<PlayerStats />} />
            </Routes>
        </div>
    );
}

export default App;