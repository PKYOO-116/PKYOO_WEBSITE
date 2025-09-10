import React from "react";
import heroPhoto from "../pics/image2.png";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__grid">
          <div className="home__left">
            <img src={heroPhoto} alt="Paul K. Yoo" className="home__photo" />
          </div>
          <div className="home__right" style={{ fontFamily: "sans-serif" }}>
            <h1 className="home__title">Paul K. Yoo</h1>
            <p className="home__subtitle">Tech + Business</p>
            <p className="home__tagline">Inter-disciplinary professional</p>
            <ul className="home__roles">
              <li>Data Scientist</li>
              <li>Data Analyst</li>
              <li>Tech Project Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}