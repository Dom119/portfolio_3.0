import React from "react";

import Navbar from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

import AboutMe from "views/sections/AboutMe.js";
import Contact from "./sections/Contact";
import Projects from "./sections/projects/Projects.js";

function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
      <div className="main">
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
