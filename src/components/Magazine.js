import React, { useState, useEffect } from "react";
import "../styles/Magazine.css";
import m1 from "../assets/magazine/m1.png";
import m2 from "../assets/magazine/m2.png";
import m3 from "../assets/magazine/m3.jpeg";
import m4 from "../assets/magazine/m4.jpeg";
import m5 from "../assets/magazine/m5.jpg";
import m6 from "../assets/magazine/m6.jpg";

const Magazine = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [m1, m2, m3, m4, m5, m6];
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
    <div className="magazine">
      <h2>Magazine</h2>
      <p>
        Here are the sample of Layouts
      </p>

      <div className="layouts-main-container">
        <div className="layouts-container">
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

export default Magazine;
