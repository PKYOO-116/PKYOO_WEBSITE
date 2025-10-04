import { useEffect, useState, useRef } from "react";
import {
  dailyPhoto1, dailyPhoto2, dailyPhoto3, dailyPhoto4, dailyPhoto5,
  dailyPhoto6, dailyPhoto7, dailyPhoto8, dailyPhoto9, dailyPhoto10,
  dailyPhoto11, dailyPhoto12, dailyPhoto13, dailyPhoto14, dailyPhoto15,
  dailyPhoto16, dailyPhoto17, dailyPhoto18, dailyPhoto19, dailyPhoto20,
  dailyPhoto21, dailyPhoto22, dailyPhoto23, dailyPhoto24, dailyPhoto25,
  dailyPhoto26, dailyPhoto27
} from "../assets";

const dailyPhotos = [
  dailyPhoto1, dailyPhoto2, dailyPhoto3, dailyPhoto4, dailyPhoto5,
  dailyPhoto6, dailyPhoto7, dailyPhoto8, dailyPhoto9, dailyPhoto10,
  dailyPhoto11, dailyPhoto12, dailyPhoto13, dailyPhoto14, dailyPhoto15,
  dailyPhoto16, dailyPhoto17, dailyPhoto18, dailyPhoto19, dailyPhoto20,
  dailyPhoto21, dailyPhoto22, dailyPhoto23, dailyPhoto24, dailyPhoto25,
  dailyPhoto26, dailyPhoto27
];

export default function Daily() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);

  const [visibleImages, setVisibleImages] = useState([]);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const usedPositionsRef = useRef([]);

  const isFarEnough = (x1, y1) => {
    const minDistance = 250;
    return usedPositionsRef.current.every(([x2, y2]) => {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy) > minDistance;
    });
  };

  const getRandomPosition = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let attempts = 0;

    while (attempts < 100) {
      const left = Math.floor(Math.random() * (vw - 150));
      const top = Math.floor(Math.random() * (vh * 1.4)) + 30;

      if (isFarEnough(left, top)) {
        return { left, top };
      }
      attempts++;
    }

    const left = Math.floor(Math.random() * (vw - 150));
    const top = Math.floor(Math.random() * (vh * 1.4)) + 30;
    return { left, top };
  };

  useEffect(() => {
    usedPositionsRef.current = [];

    const titleTimeout = setTimeout(() => setShowTitle(true), 100);
    const subtitleTimeout = setTimeout(() => setShowSubtitle(true), 600);
    const instructionTimeout = setTimeout(() => setShowInstruction(true), 1100);

    const imageTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index >= dailyPhotos.length) {
          clearInterval(interval);
          return;
        }

        const photo = dailyPhotos[index];
        const position = getRandomPosition();
        setVisibleImages(prev => {
          usedPositionsRef.current.push([position.left, position.top]);
          return [...prev, { photo, position: { left: `${position.left}px`, top: `${position.top}px` } }];
        });
        index += 1;
      }, 200);
    }, 1400);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
      clearTimeout(instructionTimeout);
      clearTimeout(imageTimeout);
    };
  }, []);

  return (
    <section className="daily whoSec">
      <div className="container">
        <div className="grid grid-1">
          {showTitle && <h1 className="daily__title">Daily Paul</h1>}
          {showSubtitle && <h2 className="daily__photograph">Photograph</h2>}
          {showInstruction && (
            <div className={`daily__instruction`}>
              ▼ Keep scrolling to check out my photos!
            </div>
          )}
        </div>

        <div className="grid grid-5 daily__grid">
          {visibleImages.map(({ photo, position }, index) => (
            <img
              key={index}
              src={photo}
              className="daily__photo"
              alt={`daily-${index}`}
              style={{
                ...position,
                animation: `fadeIn 1s ease ${index * 0.2}s forwards, bounceDown 4s ease-in-out infinite`,
                opacity: 0,
              }}
              onClick={() => setFullscreenImg(photo)}
            />
          ))}
        </div>

        {fullscreenImg && (
          <div className="daily__fullscreenOverlay" onClick={() => setFullscreenImg(null)}>
            <img src={fullscreenImg} alt="fullscreen" />
            <button className="daily__imgCloseBtn" onClick={() => setFullscreenImg(null)}>✕</button>
          </div>
        )}
      </div>
    </section>
  );
}