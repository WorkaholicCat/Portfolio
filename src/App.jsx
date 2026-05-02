import { useState } from 'react'
import './App.css'
import Shape from "./assets/SVG/Asset10.svg?react";
import Star from "./assets/SVG/Background/Asset8.svg?react";
import Techstack from "./assets/SVG/Techstack/base.svg?react";
import Tool from "./assets/SVG/Tools/blob2.svg?react";
import Base from "./assets/SVG/Tools/base.svg?react";
import A1 from "./assets/SVG/Techstack/a1.svg?react";
import A2 from "./assets/SVG/Techstack/a2.svg?react";
import A3 from "./assets/SVG/Techstack/a3.svg?react";
import A4 from "./assets/SVG/Techstack/a4.svg?react";

function App() {
  return (
    <div>
      <h1> My Portfolio </h1>
      <AboutCard />
    </div>
  );
}

function AboutCard() {
  return (
    <div className="about-card">
      <div className="pic"></div>
      <Shape className="blob" />
      <Star className="star" />
      <div className="contact">
        <h3>Contacts</h3>
        <ul>
          <li>Email:</li>
          <li>Github:</li>
          <li>LinkedIn:</li>
        </ul>
      </div>
      <h2> About Me </h2>
      <p> Frontend-focused Web Developer with strong skills in HTML, CSS, and JavaScript, currently expanding into MERN stack. Experienced in Python, MySQL, R and data visualization, with the ability to build user-friendly interfaces and analyze data effectively. Passionate about creating responsive web applications and intuitive UI/UX designs. </p>
      <Techstack className="base" />
      <h3 className= 'Techstack'>Tech Stack</h3>
      <Tool className="blob2" />
      <A1 className="a1" />
      <A2 className="a2" />
      <A3 className="a3" />
      <A4 className="a4" />
      <h3 className= 'Tools'>Tools</h3>
      <Base className="base2" />
    </div>
  )
}
export default App
