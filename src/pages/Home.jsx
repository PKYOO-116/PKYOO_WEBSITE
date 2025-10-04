import React, { useState, useEffect } from "react";
import LoadingReveal from "../components/LoadingReveal";
import HomeSection from "./sections/homeSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

// Animation
  const barDuration = 1.3;
  const barFade = 0.1;
  const gap = 0.05;
  const panelDuration = 1.7;
  const totalDuration = (barDuration + barFade + gap + panelDuration) * 1000;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), totalDuration);
    return () => clearTimeout(t);
  }, [totalDuration]);

  return (
    <>
      {loading && (
        <LoadingReveal
          barDuration={barDuration}
          barFade={barFade}
          gap={gap}
          panelDuration={panelDuration}
          onDone={() => setLoading(false)}
        />
      )}

      <main className="homePage">
        <HomeSection />
      </main>
    </>
  );
}