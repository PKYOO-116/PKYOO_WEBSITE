import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { communityData } from "../../data/communityData";

export default function Community() {
  const sectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          setKey((k) => k + 1);
        } else {
          setStartTyping(false);
        }
      },
      { threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="community whoSec" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-1">
          <h1 className="comm__title">
            {startTyping && (
              <Typewriter
                key={key}
                words={["Leadership & Community Involvement"]}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={400}
                cursor
              />
            )}
          </h1>
        </div>

        <div className="grid grid-5">
          {communityData.map((item, index) => {
            const hasImage = item.pics?.length > 0;
            const hasLogo = !!item.logo;
            const isExpandable = item.pics?.length > 1;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`comm__card ${isExpandable ? "expandable" : ""} ${isExpanded ? "expanded" : ""}`}
                onClick={() => isExpandable && handleExpand(index)}
              >
                {(hasImage || hasLogo) && (
                  <div className="comm__media">
                    {hasImage && (
                      <img
                        src={item.pics[0]}
                        alt={`community-pic-${index}-0`}
                        className="comm__photo"
                      />
                    )}
                    {hasLogo && (
                      item.website ? (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={item.logo}
                            alt={`${item.organization} logo`}
                            className={`comm__logo clickable ${item.logoWhiteBg ? "white-bg" : ""}`}
                          />
                        </a>
                      ) : (
                        <img
                          src={item.logo}
                          alt={`${item.organization} logo`}
                          className={`comm__logo ${item.logoWhiteBg ? "white-bg" : ""}`}
                        />
                      )
                    )}
                  </div>
                )}

                <div className="comm__info">
                  <p className="comm__period">{item.period}</p>

                  <h2 className="comm__titleText">{item.title}</h2>
                  
                  {item.role && <h3 className="comm__role">{item.role}</h3>}
                  <p className="comm__organization">{item.organization}</p>
                  {item.location && <p className="comm__location">{item.location}</p>}

                  {item.bullets?.length > 0 && (
                    <ul className="comm__bullets">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {isExpandable && !isExpanded && (
                    <p className="comm__moreHint">▼ Click to view more images</p>
                  )}

                  {isExpandable && isExpanded && (
                    <div className="comm__expandedImgs">
                      {item.pics.map((img, j) => (
                        <img
                          key={j}
                          src={img}
                          alt={`expanded-${index}-${j}`}
                          className="comm__photo"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenImg(img);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Screen Image*/}
        {fullscreenImg && (
          <div className="comm__imgFullscreen" onClick={() => setFullscreenImg(null)}>
            <img src={fullscreenImg} alt="fullscreen" />
            <button className="comm__imgCloseBtn" onClick={() => setFullscreenImg(null)}>
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
}