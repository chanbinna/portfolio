import { useState } from "react";
import "./App.css";
import LightRays from './LightRays';

const TABS = [
  { name: "Home" },
  { name: "Projects" },
  { name: "Experience" },
  { name: "Resume" },
  { name: "Contact" },
];

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className='dark fullpage'>
      <LightRays
        raysOrigin="top-center"
        raysColor="#e1e0c3ff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <header className='navbar'>
        <img src='/devchanbin2.svg' alt='' className='logo' />
        <nav>
          {TABS.map((tab) => (
            <button
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </header>
      <main className='content'>
        {activeTab === "Home" && (
          <section>
            <h1>Welcome!</h1>
            <p>
              This is the home page of your portfolio. Use the tabs above to
              explore Projects, Experience, and Contact info.
            </p>
          </section>
        )}
        {activeTab === "Projects" && (
          <section>
            <h1>Projects</h1>
            <ul>
              <li>Project 1: Description</li>
              <li>Project 2: Description</li>
              <li>Project 3: Description</li>
            </ul>
          </section>
        )}
        {activeTab === "Experience" && (
          <section>
            <h1>Experience</h1>
            <ul>
              <li>Job 1: Details</li>
              <li>Job 2: Details</li>
            </ul>
          </section>
        )}
        {activeTab === "Resume" && (
          <section>
            <h1>Resume</h1>
            <p>
              Download my resume{" "}
              <a href='#' style={{ color: "#8ab4f8" }}>
                here
              </a>
              .
            </p>
            <ul>
              <li>Education: Your University, Degree, Year</li>
              <li>Skills: React, JavaScript, CSS, ...</li>
              <li>Certifications: Example Certification</li>
            </ul>
          </section>
        )}
        {activeTab === "Contact" && (
          <section>
            <h1>Contact</h1>
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
