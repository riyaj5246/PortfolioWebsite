import React from "react";
import resumePDF from "./assets/resume.pdf";
import "./App.css";

function App() {
  return (
    <main className="container">
      <header className="profile-header">
        <img
          src="/profile3.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-content">
          <h1 className="name">RIYA JAIN</h1>
          <p className="tagline">
            BS/MCS in Computer Science @ UIUC 
          </p>
          <p className="fun-description">
            Hi! I'm a computer science student from Chicago studying at UIUC. I'm currently interning at IMC Trading, and prior to this, worked at SIG and Shedd Capital.
          </p>
          <p className="fun-description">
            I'm driven by opportunities to innovate in fast-paced & collaborative environments. I'm excited to apply cutting-edge tech to other 
            disciplines, inspiring my ML research at Argonne National Lab & executive leadership with the Disruption Lab at UIUC. 
          </p>
          <p className="fun-description">
            Outside of work, you'll find me at trying out a new recipe, popping open a 
            book, and cafe-hopping around town.
          </p>
          <div className="links">
            <a href="mailto:riyajj2@illinois.edu">📧 Email</a>
            <a href="https://github.com/riyaj5246" target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/riya-jain-uofi"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>
            <a href={resumePDF} target="_blank" rel="noreferrer">
              📄 Resume
            </a>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App;
