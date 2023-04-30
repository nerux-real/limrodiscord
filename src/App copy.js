import logo from './logo.svg';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import { Link } from "react-router-dom";

function App() {
    const handleButtonClick = () => {
        window.open('https://discord.com/api/oauth2/authorize?client_id=1086632004273057792&permissions=8&scope=bot');
      };

    return (
        <div className="App">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>
            <nav class="navbar background">
                <ul class="nav-list">
                    <li><a href ="https://discord.gg/55WjVBMDvH" class="bar-btns" target="_blank">Our Discord</a></li>
                    <li><a href="https://discord.com/api/oauth2/authorize?client_id=1086632004273057792&permissions=8&scope=bot" class="bar-btns" target="_blank">Invite Bot</a></li>
                    <li><a href="https://limro-studios.gitbook.io/limro-sama-docs/" class="bar-btns" target="_blank">Help</a></li>
                    <li><a href="/about" class="bar-btns" target="_blank">About</a></li>
                    <li><a href='https://www.patreon.com/limrostudios/membership' class="bar-btns" target="_blank">Premium</a></li>
                </ul>

                <div class="rightNav">
                    <button class="btn2">Login</button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-verybig">
                            Limro Discord Bot
                        </h1>
                        <p class="text-small">
                            Start making your discord server better right now!
                        </p>
                        <button class="btn" onClick={handleButtonClick}>Invite Bot</button>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Why Limro?
                        </h1>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Music functions for guild!
                        </h1>
                        <p class="text-small">
                            You can use music bot functions in your server voice chat for free!
                        </p>
                        <p class="text-small">
                            Many commands for usage like /play /volume /pause /resume!
                        </p>
                        <p class="text-small">
                            No song duration limit! You can listen 10hour mixes!
                        </p>
                        <p class="text-small">
                            Music effects soon! (3d, bassboost, nightcore and etc.)
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Moderation functions for guild!
                        </h1>
                        <p class="text-small">
                            Available many commands like /ban /kick /mute /unmute /unban, so you can moderate server like a real mod.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Other commands!
                        </h1>
                        <p class="text-small">
                            Available other many commands like /suggest /createevent /dice /randpic /randgif and many many more!
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Games and leaderboards!
                        </h1>
                        <p class="text-small">
                            You can play many casino games like coinflip, roulette and slot machine!
                        </p>
                        <p class="text-small">
                            Bet, win, lose and be a champion of leaderboard!
                        </p>
                        <p class="text-small">
                            Level system, so other can see how much are you playing ;)
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright � 2023 Limro Studios | All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default App;
