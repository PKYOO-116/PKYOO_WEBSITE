import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data/projectsData";
import { Typewriter } from "react-simple-typewriter";
import { icGitHub, icFile } from "../../assets";

export default function Project() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchIndex, setSearchIndex] = useState(0);

  const scrollToCard = (index) => {
    setActiveIndex((index + projectsData.length) % projectsData.length);
  };

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === "left"
        ? (activeIndex - 1 + projectsData.length) % projectsData.length
        : (activeIndex + 1) % projectsData.length;
    scrollToCard(newIndex);
  };

  const handleSearch = () => {
    if (!searchKeyword.trim()) return;

    const keyword = searchKeyword.toLowerCase();
    const matchedIndexes = projectsData
      .map((project, i) => {
        const inTitle = project.title.toLowerCase().includes(keyword);
        const inCompany = project.company?.toLowerCase().includes(keyword);
        const inBullets = project.bullets?.some(b => b.toLowerCase().includes(keyword));
        const inTech = project.tech?.some(t => t.toLowerCase().includes(keyword));
        const inKpis = project.kpis?.some(k => typeof k === 'string' && k.toLowerCase().includes(keyword));
        return (inTitle || inCompany || inBullets || inTech || inKpis) ? i : null;
      })
      .filter(i => i !== null);

    if (matchedIndexes.length === 0) {
      alert("No matching projects found.");
      return;
    }

    if (JSON.stringify(matchedIndexes) === JSON.stringify(searchResults)) {
      const nextIndex = (searchIndex + 1) % matchedIndexes.length;
      setSearchIndex(nextIndex);
      scrollToCard(matchedIndexes[nextIndex]);
    } else {
      setSearchResults(matchedIndexes);
      setSearchIndex(0);
      scrollToCard(matchedIndexes[0]);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (!container || isScrolling) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        setIsScrolling(true);

        if (e.deltaX > 80) handleArrowClick("right");
        else handleArrowClick("left");

        setTimeout(() => setIsScrolling(false), 500);
      }
    };

    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isScrolling]);

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
    <section className="projects whoSec" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-1">
          <h1 className="projects__title">
            {startTyping && (
              <Typewriter
                key={key}
                words={["Projects"]}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={400}
                cursor
              />
            )}
          </h1>
        </div>

        <div className="grid grid-5">
          <div className="projects__searchBar">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search keyword..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && document.activeElement === inputRef.current) {
                  handleSearch();
                }
              }}
              className="projects__searchInput"
            />
            <button className="projects__searchBtn" onClick={handleSearch}>Search</button>
          </div>


          <div className="projects__viewportBox">
            <button className="projects__arrowBtn left" onClick={() => handleArrowClick("left")}>‹</button>
            <div className="projects__viewport" ref={containerRef}>
              {projectsData.map((project, idx) => {
                const total = projectsData.length;
                let cardClass = "";
                if (idx === activeIndex) cardClass = "active";
                else if ((idx + 1) % total === activeIndex) cardClass = "left";
                else if ((idx - 1 + total) % total === activeIndex) cardClass = "right";
                else cardClass = "hidden";

                return (
                  <div className={`projects__card ${cardClass}`} key={project.id}>
                    <div className="projects__cardIcons">
                      {project.gh_website && (
                        <a href={project.gh_website} target="_blank" rel="noopener noreferrer" className="projects__ghWebBtn">
                          <img src={icGitHub} alt="GitHub" />
                        </a>
                      )}
                      {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="projects__WebBtn">
                          <img src={icFile} alt="Web" />
                        </a>
                      )}
                    </div>

                    <h2 className="projects__cardTitle">{project.title}</h2>
                    <h3 className="projects__cardCompany">{project.company}</h3>

                    <ul className="projects__bullets">
                      {project.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    {project.img?.length > 0 && (
                      <div className="projects__imgs">
                        {project.img.map((src, i) => (
                          <img
                            src={src}
                            key={i}
                            alt={`img-${i}`}
                            onClick={() => setFullscreenImg(src)}
                            className="clickable-img"
                          />
                        ))}
                      </div>
                    )}

                    <div className="projects__kpis">
                      {project.kpis.map((kpi, i) => (
                        <span className="projects__kpi" key={i}>{kpi}</span>
                      ))}
                    </div>
                    <div className="projects__tech">
                      {project.tech.map((tech, i) => (
                        <span className="projects__chip" key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
              <button className="projects__arrowBtn right" onClick={() => handleArrowClick("right")}>›</button>
            </div>
          </div>

          {fullscreenImg && (
            <div className="projects__imgFullscreen" onClick={() => setFullscreenImg(null)}>
              <img src={fullscreenImg} alt="fullscreen" />
              <button className="projects__imgCloseBtn" onClick={() => setFullscreenImg(null)}>✕</button>
            </div>
          )}


          <div className="projects__dots">
            {projectsData.map((_, i) => (
              <button
                key={i}
                className={`projects__dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
