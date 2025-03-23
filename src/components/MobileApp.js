import React, { useState, useEffect } from "react";
import "../styles/mobile-app";
import mo1 from "../assets/mobile-app/mo1.jpg";
import mo2 from "../assets/mobile-app/mo2.jpg";
import mo3 from "../assets/mobile-app/mo3.jpg";
import mo4 from "../assets/mobile-app/mo4.jpg";
import mo5 from "../assets/mobile-app/mo5.jpg";
import mo6 from "../assets/mobile-app/mo6.jpg";
import mo7 from "../assets/mobile-app/mo7.jpg";
import mo8 from "../assets/mobile-app/mo8.jpg";
import mo9 from "../assets/mobile-app/mo9.jpg";
import mo10 from "../assets/mobile-app/mo10.jpg";

const MobileApp = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [mo1, mo2, mo3, mo4, mo5, mo6, mo7, mo8, mo9 , mo10];
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
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex !== null) {
        if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "ArrowLeft") {
          showPreviousImage();
        } else if (event.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="mobile-app">
      <h2>Mobile App</h2>
      <p>
        Here are the sample logos I have designed for bands, businesses, and
        blogs. Check out my logo design work!
      </p>

      <div className="designs-main-container">
        <div className="designs-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="card-content"
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Artwork ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for zoomed image */}
      {selectedIndex !== null && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <button className="prev" onClick={showPreviousImage}>
            &lt;
          </button>
          <img
            className="modal-content"
            src={images[selectedIndex]}
            alt="Zoomed Artwork"
          />
          <button className="next" onClick={showNextImage}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileApp;
