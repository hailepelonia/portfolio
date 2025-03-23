import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import HandPainted from './components/HandPainted';
import Contact from './components/Contact';
import Home from './components/Home';
import Logos from './components/Logos';
import CoverArts from './components/CoverArts';
import Illustrations from './components/Illustrations'; // New component for Illustrations page


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hand-painted" element={<HandPainted />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/cover-arts" element={<CoverArts />} />
          <Route path="/illustrations" element={<Illustrations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
