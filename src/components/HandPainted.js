import React, { useState, useEffect } from 'react';
import '../styles/HandPainted.css';
import j1 from '../assets/hand-painted/j1.jpg';
import j3 from '../assets/hand-painted/j3.JPG';
import p1 from '../assets/hand-painted/p1.jpg';
import p2 from '../assets/hand-painted/p2.jpg';
import p3 from '../assets/hand-painted/p3.jpg';
import p4 from '../assets/hand-painted/p4.jpg';
import p5 from '../assets/hand-painted/p5.jpg';
import p6 from '../assets/hand-painted/p6.jpg';
import p7 from '../assets/hand-painted/p7.jpg';
import p9 from '../assets/hand-painted/p9.jpg';
import p10 from '../assets/hand-painted/p10.jpg';
import s1 from '../assets/hand-painted/s1.JPG';
import s2 from '../assets/hand-painted/s2.JPG';
import w1 from '../assets/hand-painted/w1.JPG';
import w2 from '../assets/hand-painted/w2.JPG';
import w3 from '../assets/hand-painted/w3.jpg';
import w4 from '../assets/hand-painted/w4.JPG';
import w5 from '../assets/hand-painted/w5.JPG';
import w6 from '../assets/hand-painted/w6.JPG';
import w7 from '../assets/hand-painted/w7.JPG';
import w8 from '../assets/hand-painted/w8.JPG';
import w9 from '../assets/hand-painted/w9.JPG';
import w10 from '../assets/hand-painted/w10.JPG';
import w11 from '../assets/hand-painted/w11.JPG';
import w12 from '../assets/hand-painted/w12.JPG';
import w13 from '../assets/hand-painted/w13.JPG';
import w14 from '../assets/hand-painted/w14.JPG';
import w15 from '../assets/hand-painted/w15.JPG';
import w16 from '../assets/hand-painted/w16.JPG';
import w17 from '../assets/hand-painted/w17.JPG';
import w18 from '../assets/hand-painted/w18.JPG';
import w19 from '../assets/hand-painted/w19.JPG';
import w20 from '../assets/hand-painted/w20.JPG';
import w21 from '../assets/hand-painted/w21.JPEG';
import w22 from '../assets/hand-painted/w22.jpg';
import w23 from '../assets/hand-painted/w23.jpg';
import w24 from '../assets/hand-painted/w24.jpg';
import w25 from '../assets/hand-painted/w25.jpg';
import w26 from '../assets/hand-painted/w26.jpg';
import w27 from '../assets/hand-painted/w27.jpg';
import w28 from '../assets/hand-painted/w28.jpg';
import w29 from '../assets/hand-painted/w29.jpg';
import w30 from '../assets/hand-painted/w30.jpg';
import w31 from '../assets/hand-painted/w31.jpg';
import w32 from '../assets/hand-painted/w32.jpg';
import w33 from '../assets/hand-painted/w33.jpg';
import w34 from '../assets/hand-painted/w34.JPG';
import w35 from '../assets/hand-painted/w35.JPG';
import w36 from '../assets/hand-painted/w36.jpg';
import w37 from '../assets/hand-painted/w37.jpg';
import w38 from '../assets/hand-painted/w38.jpg';
import w39 from '../assets/hand-painted/w39.JPG';
import w40 from '../assets/hand-painted/w40.jpg';
import w41 from '../assets/hand-painted/w41.JPEG';
import w42 from '../assets/hand-painted/w42.JPG';
import w43 from '../assets/hand-painted/w43.JPG';
import w44 from '../assets/hand-painted/w44.JPG';
import w45 from '../assets/hand-painted/w45.JPEG';
import w46 from '../assets/hand-painted/w46.JPEG';
import w47 from '../assets/hand-painted/w47.JPEG';
import w48 from '../assets/hand-painted/w48.JPG';
import w49 from '../assets/hand-painted/w49.JPG';
import w50 from '../assets/hand-painted/w50.JPEG';
import w51 from '../assets/hand-painted/w51.JPG';
import w52 from '../assets/hand-painted/w52.JPG';
import w53 from '../assets/hand-painted/w53.JPEG';
import w54 from '../assets/hand-painted/w54.JPEG';
import w55 from '../assets/hand-painted/w55.JPEG';
import w56 from '../assets/hand-painted/w56.jpg';
import w57 from '../assets/hand-painted/w57.jpg';
import w58 from '../assets/hand-painted/w58.jpg';
import w59 from '../assets/hand-painted/w59.JPG';
import w60 from '../assets/hand-painted/w60.JPG';
import w61 from '../assets/hand-painted/w61.JPEG';
import w62 from '../assets/hand-painted/w62.JPG';
import w63 from '../assets/hand-painted/w63.JPEG';
import w64 from '../assets/hand-painted/w64.JPEG';
import w65 from '../assets/hand-painted/w65.JPEG';
import w66 from '../assets/hand-painted/w66.JPG';
import w67 from '../assets/hand-painted/w67.jpg';
import w68 from '../assets/hand-painted/w68.jpg';
import w69 from '../assets/hand-painted/w69.JPG';
import w70 from '../assets/hand-painted/w70.JPG';
import w71 from '../assets/hand-painted/w71.png';
import w73 from '../assets/hand-painted/w73.jpg';
import w74 from '../assets/hand-painted/w74.jpg';
import w75 from '../assets/hand-painted/w75.JPG';
import w76 from '../assets/hand-painted/w76.jpg';
import w77 from '../assets/hand-painted/w77.jpg';
import w78 from '../assets/hand-painted/w78.jpg';
import w79 from '../assets/hand-painted/w79.JPG';
import w80 from '../assets/hand-painted/w80.JPG';
import w81 from '../assets/hand-painted/w81.JPG';
import w82 from '../assets/hand-painted/w82.JPG';
import w83 from '../assets/hand-painted/w83.JPG';
import w84 from '../assets/hand-painted/w84.JPG';
import w85 from '../assets/hand-painted/w85.JPG';
import w86 from '../assets/hand-painted/w86.JPEG';



const HandPainted = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [j1, j3, p1, p2, p3, p4, p5, p6, p7,p9,p10,s1,s2,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,
    w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,
    w46,w47,w48,w49,w50,w51,w52,w53,w54,w55,w56,w57,w58,w59,w60,w61,w62,w63,w64,w65,w66,w67,w68,w69,w70,w71,w73,w74,w75,
    w76,w77,w78,w79,w80,w81,w82,w83,w84,w85,w86];

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
    <div className="hand-painted">
      <h2>Hand-Painted Artworks</h2>
      <p>Welcome to my Hand-Painted Artworks collection! I paint on wallets, denims, and shoes. Here's where I showcase my creative work.</p>

      <div className="wallet-main-container">
        <div className="wallet-container">
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

export default HandPainted;
