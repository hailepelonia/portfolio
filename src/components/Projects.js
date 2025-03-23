import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Projects.css';
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import icon4 from '../assets/icons/icon4.png';
import icon5 from '../assets/icons/icon5.png';
import icon6 from '../assets/icons/icon6.png';
import icon7 from '../assets/icons/icon7.png';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="cards">
        <Link to="/hand-painted" className="card red"> {/* Hand-Painted link */}
          <div className="card-content">
            <img src={icon1} className="card-icon" alt="Hand Painted Icon" />
            <div className="card-text">
              <p className="tip">Hand-Painted</p>
              <p className="second-text">Wallets, Denims, Shoes</p>
            </div>
          </div>
        </Link>
        <Link to="/logos" className="card blue"> {/* Logos link */}
        <div className="card-content">
            <img src={icon2} className="card-icon2" alt="Hand Painted Icon" />
            <div className="card-text">
          <p className="tip">Logo</p> 
          <p className="second-text">Band, Business, Blog</p>
          </div>
          </div>
        </Link>
        <Link to="/cover-arts" className="card green"> {/* Cover Arts link */}
        <div className="card-content">
            <img src={icon3} className="card-icon3" alt="Hand Painted Icon" />
            <div className="card-text">
          <p className="tip">Cover Arts</p>
          <p className="second-text">Single/EP/Album</p>
          </div>
          </div>
        </Link>
        <Link to="/illustrations" className="card yellow"> {/* Illustrations link */}
        <div className="card-content">
            <img src={icon4} className="card-icon4" alt="Hand Painted Icon" />
            <div className="card-text">
          <p className="tip">Illustrations</p>
          <p className="second-text">Anime & Chibi</p>
          </div>
          </div>
        </Link>
        <Link to="magazine" className="card yellow"> {/* Magazine link */}
        <div className="card-content">
            <img src={icon5} className="card-icon5" alt="Hand Painted Icon" />
            <div className="card-text">
          <p className="tip">Magazine</p>
          <p className="second-text">Layouts</p>
          </div>
          </div>
        </Link>
        <Link to="/branding" className="card yellow"> {/* Branding link */}
        <div className="card-content">
            <img src={icon6} className="card-icon6" alt="Hand Painted Icon" />
            <div className="card-text">
          <p className="tip">Branding</p>
          <p className="second-text">Guidelines</p>
          </div>
          </div>
        </Link>
          <Link to="/mobile-app" className="card yellow"> {/* Mobile App link */}
        <div className="card-content">
            <img src={icon7} className="card-icon7" alt="Hand Painted Icon" />
            <div className="card-text">
          <p className="tip">Mobile App</p>
          <p className="second-text">Design</p>
          </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
