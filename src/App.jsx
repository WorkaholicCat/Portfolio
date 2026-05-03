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
import B1 from "./assets/SVG/Tools/des.svg?react";
import B2 from "./assets/SVG/Tools/github.svg?react";
import B3 from "./assets/SVG/Tools/vscode.svg?react";

function App() {
  return (
    <div>
      <div className="global">
      <h1> My Portfolio </h1>
      <AboutCard />
      </div>
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
            <li>Email: <b>aartha.tab@gmail.com</b></li>
            <li>Github: <a href="https://github.com/WorkaholicCat"> <b>WorkaholicCat</b></a> </li>
            <li>LinkedIn:<a href= "https://linkedin.com/in/aartha-singh-20226129b/?skipRedirect=true"><b>Aartha Singh</b></a></li>
          </ul>
        </div>
        <h2> About Me </h2>
        <p> Frontend-focused Web Developer with strong skills in HTML, CSS, and JavaScript, currently expanding into MERN stack. Experienced in Python, MySQL, R and data visualization, with the ability to build user-friendly interfaces and analyze data effectively. Passionate about creating responsive web applications and intuitive UI/UX designs. </p>
        <Techstack className="base" />
        <h3 className= 'Techstack'>Tech Stack</h3>
        <Tool className="blob2" />

        <div className= "t1">
          <div className="tooltip">Languages: C++, Python, JS</div>
          <A1 className="a1" />
        </div>

        <div className= "t2">
          <div className="tooltip">Frontend-dev: HTML5, CSS3, Bootstrap, React</div>
          <A2 className="a2" />
        </div>

        <div className= "t3">
          <div className="tooltip">Backend & Databases: Node.js, MySQL, MongoDB</div>
          <A3 className="a3" />
        </div>

        <div className= "t4">
          <div className="tooltip">Data Analysis & Visualization: R, Excel, PowerBI, python</div>
          <A4 className="a4" />
        </div>

        <h3 className= 'Tools'>Tools</h3>
        <Base className="base2" />

        <div className= "t5">
          <div className="tooltip">Design: Figma, Adobe Illustrator & Photoshop</div> 
          <B1 className="b1" />
        </div>

        <div className= "t6">
          <div className="tooltip">Version Control: Git, GitHub</div>
          <B2 className="b2" />
        </div>

        <div className= "t7">
          <div className="tooltip">Code Editor: VS Code</div>
          <B3 className="b3" />
        </div>
      </div>
  )
}
export default App
