import { useEffect, useRef, useState } from "react";
import { experienceData } from "../../data/experienceData";
import { Typewriter } from "react-simple-typewriter";

export default function Experience() {
  const sectionRef = useRef(null);
  const [Slogan1Key, setSlogan1Key] = useState(0);
  const [Slogan2Key, setSlogan2Key] = useState(0);
  const [titleKey, setTitleKey] = useState(0);

  const [typedSlogan1Len, setTypedSlogan1Len] = useState(0);
  const [typedSlogan2Len, setTypedSlogan2Len] = useState(0);
  const [doneSlogan1, setDoneSlogan1] = useState(false);
  const [doneSlogan2, setDoneSlogan2] = useState(false);

  const [showSlogan1, setShowSlogan1] = useState(false);
  const [showSlogan2, setShowSlogan2] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const Slogan1Text = "Where the world overflows,";
  const Slogan2Text = "the unseen calls for light.";
  const titleText = "Experience";

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSlogan1(false);
          setShowSlogan2(false);
          setShowTitle(false);
          setTypedSlogan1Len(0);
          setTypedSlogan2Len(0);
          setDoneSlogan1(false);
          setDoneSlogan2(false);

          setSlogan1Key((k) => k + 1);
          setSlogan2Key((k) => k + 1);
          setTitleKey((k) => k + 1);

          setTimeout(() => setShowSlogan1(true), 50);
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typedSlogan1Len === Slogan1Text.length && !doneSlogan1) {
      setDoneSlogan1(true);
      setTimeout(() => setShowSlogan2(true), 200);
    }
  }, [typedSlogan1Len]);

  useEffect(() => {
    if (typedSlogan2Len === Slogan2Text.length && !doneSlogan2) {
      setDoneSlogan2(true);
      setTimeout(() => setShowTitle(true), 200);
    }
  }, [typedSlogan2Len]);

  useEffect(() => {
    const items = document.querySelectorAll(".timeline__item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="experience whoSec">
      <div className="container">
        <div className="grid grid-1">
          <div className="exp__sloganWrapper">
            <div className="exp__sloganLine top" />
              <div className="exp__slogan">
                <h2 className="exp__sloganText">
                  {showSlogan1 && (
                    <Typewriter
                      key={Slogan1Key}
                      words={[Slogan1Text]}
                      typeSpeed={40}
                      deleteSpeed={0}
                      delaySpeed={500}
                      cursor={false}
                      onType={() => setTypedSlogan1Len((prev) => prev + 1)}
                    />
                  )}
                </h2>
                <h2 className="exp__sloganText">
                  {showSlogan2 && (
                    <Typewriter
                      key={Slogan2Key}
                      words={[Slogan2Text]}
                      typeSpeed={40}
                      deleteSpeed={0}
                      delaySpeed={500}
                      cursor={false}
                      onType={() => setTypedSlogan2Len((prev) => prev + 1)}
                    />
                  )}
                </h2>
              </div>
            <div className="exp__sloganLine bottom" />
          </div>

          <h1 className="exp__title">
            {showTitle && (
              <Typewriter
                key={titleKey}
                words={[titleText]}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={0}
                cursor
              />
            )}
          </h1>
        </div>
        <div className="grid-5">
          {experienceData.map((item, index) => (
            <div className="timeline__item" key={index}>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                <img src={item.logo} className="timeline__logo" />
              </a>
              <div className="timeline__content">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__role">{item.title}</h3>
                <h4 className="timeline__company">{item.company}</h4>
                <p className="timeline__location">{item.location}</p>
                <ul className="timeline__bullets">
                  {item.bullets?.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                {item.kpis?.some(k => k.label && k.value) && (
                  <div className="timeline__kpis">
                    {item.kpis
                      .filter(k => k.label && k.value)
                      .map((kpi, idx) => (
                        <span key={idx} className="timeline__kpi">
                          {kpi.label}:&nbsp;&nbsp;{kpi.value}
                        </span>
                      ))}
                  </div>
                )}
                <div className="timeline__tech">
                  {item.tech?.map((tech, idx) => (
                    <span key={idx} className="timeline__chip">{tech}</span>
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