import React, { useEffect, useRef, useState } from "react";
import { skillsData } from "../../data/skillsData";
import { Typewriter } from "react-simple-typewriter";

export default function Skills() {
  const sectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);

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

  return (
    <section className="skills whoSec" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-1">
          <h1 className="skills__title">
            {startTyping && (
              <Typewriter
                key={key}
                words={["Skills"]}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={400}
                cursor
              />
            )}
          </h1>
        </div>

        <div className="grid grid-5">
          {skillsData.map((category, idx) => (
            <div className="skills__categoryBox" key={idx}>
              <h2 className="skills__categoryTitle">{category.category}</h2>
              <div className="skills__categoryItemBox">
                <div className="skills__iconBox">
                  {category.skills
                    .filter(skill => skill.logo)
                    .map((skill, i) => (
                      <div className={`skills__iconItem ${skill.whiteBg ? "whiteBg" : ""}`}
                        key={i}
                      >
                        <div className={`skills__iconImgWrapper ${skill.whiteBg ? "whiteBg" : ""}`}>
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="skills__iconImg"
                          />
                        </div>
                        <span className="skills__iconName">{skill.name}</span>
                      </div>
                    ))}
                </div>

                <div className="skills__pillBox">
                  {category.skills
                    .filter(skill => !skill.logo)
                    .map((skill, j) => (
                      <div className="skills__pill" key={j}>
                        # {skill.name}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}