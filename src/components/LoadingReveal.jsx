import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function LoadingReveal({
  barDuration = 1.0,
  barFade = 0.3,
  gap = 0.15,
  panelDuration = 1.2,
  onDone,
}) {
  const ease = [0.22, 1, 0.36, 1];
  const bar = useAnimation();
  const left = useAnimation();
  const right = useAnimation();

  useEffect(() => {
    let mounted = true;

    (async () => {
      await bar.start({
        scaleY: [0, 1],
        opacity: 1,
        transition: { duration: barDuration, ease }
      });

      await bar.start({
        opacity: [1, 0],
        transition: { duration: barFade, ease }
      });

      await new Promise((res) => setTimeout(res, gap * 1000));
      await Promise.all([
        left.start({ x: "-100%", transition: { duration: panelDuration, ease } }),
        right.start({ x: "100%",  transition: { duration: panelDuration, ease } }),
      ]);

      if (mounted) onDone?.();
    })();

    return () => { mounted = false; };
  }, [barDuration, barFade, gap, panelDuration, onDone, bar, left, right]);

  return (
    <div className="loader">
      <motion.div
        className="loader__bar"
        initial={{ scaleY: 0, opacity: 1 }}
        animate={bar}
      />
      <motion.div
        className="loader__panelHalf loader__panelLeft"
        initial={{ x: 0 }}
        animate={left}
      />
      <motion.div
        className="loader__panelHalf loader__panelRight"
        initial={{ x: 0 }}
        animate={right}
      />
    </div>
  );
}