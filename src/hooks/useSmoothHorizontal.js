// hooks/useSmoothHorizontal.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothHorizontal(sectionRef, trackRef, cardRefs) {
  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    const cards   = cardRefs.current;

    if (!section || !track || !cards.length) return;

    const gap = 160;
    const cardWidth = 520;
    const cardSpace = cardWidth + gap;

    const totalWidth = cardSpace * (cards.length - 1);

    // INITIAL STATES -------------------------------
    cards.forEach((card, i) => {
      gsap.set(card, {
        scale: i === 0 ? 1 : 0.85,
        transformOrigin: "center center"
      });
    });

    // START track off-screen right -------------------
    gsap.set(track, { x: window.innerWidth });

    // HORIZONTAL MOVEMENT ---------------------------
    gsap.to(track, {
      x: window.innerWidth - totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=" + totalWidth,
        scrub: 1,
        pin: true,
      },
    });

    // CENTER SCALE TRIGGERS -------------------------
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: () => "top+=" + i * cardSpace + " top",
        end: () => "top+=" + (i + 1) * cardSpace + " top",
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress;
          const isCenter = progress > 0 && progress < 1;

          if (isCenter) {
            gsap.to(card, { scale: 1, duration: 0.25 });
          } else {
            gsap.to(card, { scale: 0.85, duration: 0.25 });
          }
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(s => s.kill());
  }, []);
}
