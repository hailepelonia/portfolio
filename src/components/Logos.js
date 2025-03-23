import React, { useState, useEffect } from "react";
import "../styles/Logos.css";
import l1 from "../assets/logos/l1.jpg";
import l2 from "../assets/logos/l2.png";
import l3 from "../assets/logos/l3.PNG";
import l4 from "../assets/logos/l4.png";
import l5 from "../assets/logos/l5.PNG";
import l6 from "../assets/logos/l6.PNG";
import l7 from "../assets/logos/l7.png";

const Logos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [l1, l2, l3, l4, l5, l6, l7];
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
    <div className="logos">
      <h2>Logos</h2>
      <p>
        Here are the sample logos I have designed for bands, businesses, and
        blogs. Check out my logo design work!
      </p>

      <div className="band-main-container">
        <div className="band-container">
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

export default Logos;
