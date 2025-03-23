import React, { useState, useEffect } from 'react';
import '../styles/Illustrations.css'; // You can create a custom CSS file for this page
import i1 from '../assets/illustrations/i1.png';
import i2 from '../assets/illustrations/i2.JPG';
import i3 from '../assets/illustrations/i3.JPG';
import i4 from '../assets/illustrations/i4.JPEG';
import i5 from '../assets/illustrations/i5.JPEG';
import i6 from '../assets/illustrations/i6.png';
import i7 from '../assets/illustrations/i7.JPG';
import i8 from '../assets/illustrations/i8.JPG';
import i9 from '../assets/illustrations/i9.JPEG';
import i10 from '../assets/illustrations/i10.png';
import i11 from '../assets/illustrations/i11.png';
import i12 from '../assets/illustrations/i12.jpg';
import i13 from '../assets/illustrations/i13.JPG';
import i14 from '../assets/illustrations/i14.jpg';
import i15 from '../assets/illustrations/i15.jpg';
import i16 from '../assets/illustrations/i16.jpg';
import i17 from '../assets/illustrations/i17.jpg';
import i18 from '../assets/illustrations/i18.jpg';
import i19 from '../assets/illustrations/i19.JPG';
import i20 from '../assets/illustrations/i20.png';


const Illustrations = () => {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20];

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
    <div className="illustrations">
      <h2>Illustration Artworks</h2>
      <p><p>On this page, I share my collection of illustrations, featuring styles like anime and chibi</p>
      </p>
     
      <div className="anime-main-container">
        <div className="anime-container">
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


export default Illustrations;
