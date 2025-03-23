import React, { useRef, useState, useEffect } from "react";
import "../styles/Home.css";
import ads from "../components/videos/ads.mp4";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.volume = 0.5; // Set initial volume
      videoElement.addEventListener("play", () => setIsPlaying(true));
      videoElement.addEventListener("pause", () => setIsPlaying(false));
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", () => setIsPlaying(true));
        videoElement.removeEventListener("pause", () => setIsPlaying(false));
      }
    };
  }, []);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
        videoElement.muted = false; // Unmute on user interaction
      }
    }
  };

  const handleFullscreen = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="home">
      <div className="video-container" onClick={togglePlay}>
        <video
          className="responsive-video"
          ref={videoRef}
          autoPlay
          loop
        >
          <source src={ads} type="video/mp4" />
        </video>
        {!isPlaying && <div className="play-icon">&#9658;</div>}
        <button onClick={handleFullscreen} className="fullscreen-button">
          &#x26F6;
        </button> {/* Fullscreen icon */}
      </div>
    </div>
  );
};

export default Home;
