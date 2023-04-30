import React from 'react';
import './About.css'
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Profile from './Profile';
import App from '../App.js'

function About() {
  const handleButtonClick = () => {
      window.open('https://discord.com/api/oauth2/authorize?client_id=1086632004273057792&permissions=8&scope=bot');
    };

  return (
      <div className="About">
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
          <nav class="navbar background">
              <ul class="nav-list">
                  <li>
                      <Link to="/limrodiscord">
                          <img class="logo"/>
                      </Link>
                  </li>
                  <li><a href ="https://discord.gg/55WjVBMDvH" class="bar-btns" target="_blank">Our Discord</a></li>
                  <li><a href="https://discord.com/api/oauth2/authorize?client_id=1086632004273057792&permissions=8&scope=bot" class="bar-btns" target="_blank">Invite Bot</a></li>
                  <li><a href="https://limro-studios.gitbook.io/limro-sama-docs/" class="bar-btns" target="_blank">Help</a></li>
                  <li><a href="/about" class="bar-btns">About</a></li>
                  <li><a href='https://www.patreon.com/limrostudios/membership' class="bar-btns" target="_blank">Premium</a></li>
              </ul>

              <div class="rightNav">
                  <button class="btn2">Login</button>
              </div>
          </nav>
          <footer className="footer">
              <p className="text-footer">
                  Copyright � 2023 Limro Studios | All rights are reserved
              </p>
          </footer>
      </div>
  )
}

export default About;