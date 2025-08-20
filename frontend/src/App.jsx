import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import LightRays from "./LightRays";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const TABS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

function App() {
  const location = useLocation();

  return (
    <div className='dark fullpage'>
      <LightRays
        raysOrigin='top-center'
        raysColor='#e1e0c3ff'
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className='custom-rays'
      />
      <header className='navbar'>
        <img src='/devchanbin2.svg' alt='' className='logo' />
        <nav>
          {TABS.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={
                location.pathname === tab.path ||
                (tab.path === "/" && location.pathname === "")
                  ? "active"
                  : ""
              }
              style={{ textDecoration: "none" }}
            >
              <button
                className={
                  location.pathname === tab.path ||
                  (tab.path === "/" && location.pathname === "")
                    ? "active"
                    : ""
                }
              >
                {tab.name}
              </button>
            </Link>
          ))}
        </nav>
      </header>
      <main className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
