import React, { useEffect, useState } from "react";
import "./newYearWish.css";

const NewYearWish: React.FC = () => {
  const [celebrateClicked, setCelebrateClicked] = useState(false);

  const createFirework = () => {
    const fireworksContainer = document.querySelector(".fireworks");
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
    firework.style.backgroundColor = getRandomColor();
    fireworksContainer?.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(createFirework, 100);
    return () => clearInterval(interval);
  }, []);

  const handleCelebrateClick = () => {
    setCelebrateClicked(true);

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        createFirework();
      }, i * 100);
    }

    setTimeout(() => {
      setCelebrateClicked(false);
    }, 2000);
  };

  const params = new URLSearchParams(window.location.search);
  const encodedName = params.get("name");
  const name = encodedName ? decodeURIComponent(encodedName) : "Friend";

  return (
    <div className="new-year-wish min-h-screen bg-background flex items-center justify-center text-text overflow-hidden relative">
      <div className="fireworks absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      <div className="container text-center px-6 py-12 rounded-xl relative z-10 animate__animated animate__fadeIn animate__delay-1s sm:px-8 md:px-12 bg-transparent">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-accent mb-4 text-shadow-lg">
          🎉 Happy New Year 2025! 🎊
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient mb-6">
          Hi👋, <span className="text-accent">{name}</span>!
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-text mb-6 leading-relaxed">
          🌟 Wishing you an extraordinary year ahead filled with boundless
          opportunities, incredible success, and cherished moments. Let this be
          your year to shine brighter than ever!
        </p>
        <button
          onClick={handleCelebrateClick}
          className={`inline-block text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 ease-in-out transform shadow-lg ${
            celebrateClicked
              ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 scale-110 animate-bounce"
              : "bg-gradient-to-r from-blue-500 to-green-500 hover:scale-105 hover:shadow-xl"
          } ${
            celebrateClicked ? "ring-4 ring-yellow-400 ring-opacity-50" : ""
          }`}
        >
          🎉 {celebrateClicked ? "Let’s Party!" : "Celebrate"} 🎉
        </button>
      </div>
    </div>
  );
};

const getRandomColor = () => {
  const colors = [
    "#FF6D00",
    "#FF4081",
    "#4CAF50",
    "#00BCD4",
    "#9C27B0",
    "#FFC107",
    "#FFEB3B",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default NewYearWish;
