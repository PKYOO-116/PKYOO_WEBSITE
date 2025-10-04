import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { logoUSC, logoMSU } from "../../assets";

export default function Education() {
  const sectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          setKey((k) => k + 1)
        } else {
          setStartTyping(false);
        }
      },
      {
        threshold: 0
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="education whoSec" id="education">
      <div className="container">
        <div className="grid grid-1">
          <div className="edu_title">
            <h1 className="edu__title">
              {startTyping && (
                <Typewriter
                  key={key}
                  words={["Education"]}
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={400}
                />
              )}
            </h1>
          </div>
        </div>
        <div className="grid grid-2"></div>
        <div className="grid grid-3"></div>
        <div className="grid grid-4">
          <div className="edu__stage">
            <article className="edu__item">
              <div className="edu__school">
                University of Southern California
                <div className="edu__locaTime">Los Angeles, CA | August 2023 – May 2025 </div>
              </div>
              <div className="edu__body">
                <img src={logoUSC} alt="USC" className="edu__logo" />
                <div>
                  <div className="edu__degree">Master of Science</div>
                  <div className="edu__major">Applied Data Science</div>
                </div>
              </div>
            </article>

            <article className="edu__item">
              <div className="edu__school">
                Mississippi State University
                <div className="edu__locaTime">Starkville, MS | January 2014 – May 2016</div>
              </div>
              <div className="edu__body">
                <img src={logoMSU} alt="MSU" className="edu__logo" />
                <div>
                  <div className="edu__degree">Bachelor of Business Administration</div>
                  <div className="edu__major">B.A. Finance Concentration</div>
                  <div className="edu__minor">Minor in Economics</div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="grid grid-5"></div>
        <div className="grid grid-6"></div>
        <div className="grid grid-7"></div>
        <div className="grid grid-8"></div>
        <div className="grid grid-9"></div>
      </div>
    </section>
  );
}