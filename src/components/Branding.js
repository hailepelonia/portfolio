import React, { useState, useEffect } from "react";
import "../styles/branding";
import b1 from "../assets/branding-app/b1.jpg";
import b2 from "../assets/branding-app/b2.jpg";
import b3 from "../assets/branding-app/b3.jpg";
import b4 from "../assets/branding-app/b4.jpg";
import b5 from "../assets/branding-app/b5.jpg";
import b6 from "../assets/branding-app/b6.jpg";
import b7 from "../assets/branding-app/b7.jpg";
import b8 from "../assets/branding-app/b8.jpg";
import b9 from "../assets/branding-app/b9.jpg";
import b10 from "../assets/branding-app/b10.jpg";
import b11 from "../assets/branding-app/b11.jpg";
import b12 from "../assets/branding-app/b12.jpg";

const Branding = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [b1, b2, b3, b4, b5, b6, b7, b8, b9 , b10, b11, b12];
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
    <div className="branding">
      <h2>Branding</h2>
      <p>
        Here are the sample logos I have designed for bands, businesses, and
        blogs. Check out my logo design work!
      </p>

      <div className="guidelines-main-container">
        <div className="guidelines-container">
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

export default Branding;
