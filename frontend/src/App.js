import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-gray-900 font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
