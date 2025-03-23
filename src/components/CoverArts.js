import React, { useState, useEffect } from 'react';
import '../styles/CoverArts.css'
import c1 from '../assets/coverarts/c1.PNG';
import c2 from '../assets/coverarts/c2.png';
import c3 from '../assets/coverarts/c3.jpg';
import c4 from '../assets/coverarts/c4.png';
import c5 from '../assets/coverarts/c5.jpeg';
import c6 from '../assets/coverarts/c6.png';
import c7 from '../assets/coverarts/c7.png';

const CoverArts = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [c1, c2, c3, c4, c5, c6, c7];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex !== null) {
        if (event.key === 'ArrowRight') {
          showNextImage();
        } else if (event.key === 'ArrowLeft') {
          showPreviousImage();
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="cover-arts">
      <h2>Cover Arts</h2>
      <p>This is where I present my cover arts for singles, EPs, and albums</p>
      <div className="single-main-container">
        <div className="single-container">
          {images.map((image, index) => (
            <div key={index} className="card-content" onClick={() => handleImageClick(index)}>
              <img src={image} alt={`Artwork ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for zoomed image */}
      {selectedIndex !== null && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <button className="prev" onClick={showPreviousImage}>&lt;</button>
          <img className="modal-content" src={images[selectedIndex]} alt="Zoomed Artwork" />
          <button className="next" onClick={showNextImage}>&gt;</button>
        </div>
      )}
    </div>
  );
};



export default CoverArts;
