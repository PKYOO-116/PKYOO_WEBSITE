import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { flagUS, flagKR } from "../../assets";

export default function Pkyoo() {
  const sectionRef = useRef(null);
  const [key, setKey] = useState(0);
  const [startTyping, setStartTyping] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);
  const [typedLength, setTypedLength] = useState(0);

  const Name = "Paul Keunchan Yoo";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDoneTyping(false);
          setStartTyping(false);
          setTypedLength(0);
          setKey((k) => k + 1);
          setStartTyping(true);
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
    <section ref={sectionRef} className="pkyoo">
      <div className="container">
        <div className="grid grid-1"></div>
        <div className="grid grid-2"></div>
        <div className="grid grid-3"></div>
        <div className="grid grid-4"></div>
        <div className="grid grid-5">
          <h1 className="pkyoo__title">
            {startTyping && (
              <Typewriter
                key={key}
                words={[Name]}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={400}
                cursor
                onType={(char) => {
                  setTypedLength((current) => {
                    const count = current + 1;

                    if (count === Name.length && !doneTyping) {
                      setDoneTyping(true);
                    }
                    return count;
                  });
                }}
              />
            )}
          </h1>
        </div>
        <div className="grid grid-6"></div>
        <div className="grid grid-7"></div>
        <div className="grid grid-8">
          {doneTyping && (
            <div className={`pkyoo__flags ${doneTyping ? "visible" : ""}`}>
              <div className="pkyoo__flagBox">
                <div className="pkyoo__flagLabel">U.S.</div>
                <img src={flagUS} alt="USflag" className="pkyoo__flag" />
              </div>
              <div className="pkyoo__flagBox">
                <img src={flagKR} alt="KRflag" className="pkyoo__flag" />
                <div className="pkyoo__flagLabel">R.O.K.</div>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-9"></div>
      </div>
    </section>
  );
}