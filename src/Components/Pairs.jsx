import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pairs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textBlockRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from(textBlockRef.current, {
        scrollTrigger: {
          trigger: textBlockRef.current,
          start: "top 95%",
        },
        opacity: 0,
        x: 80,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      // 
      className="max-w-[1540px] w-full mx-auto bg-black text-white px-4 sm:px-10 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10"
    >
    
      <div
        ref={headingRef}
        className="relative w-full md:w-1/2 text-center md:text-left group"
      >
     
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-48 h-48 border border-pink-400 rotate-45 opacity-30 blur-2xl animate-pulse" />
        </div>

        <h2 className="relative z-10 text-4xl md:text-5xl font-semibold leading-tight group-hover:-translate-y-1 transition duration-300 ease-in-out">
          Your Talent <br />
          <span className="text-pink-400 hover:tracking-wide transition-all duration-300">
            Our Spotlight
          </span>
        </h2>
      </div>

  
      <div
        ref={textBlockRef}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <div className="mb-3">
          <span className="bg-gray-800 text-sm px-4 py-1 rounded-full inline-block hover:bg-pink-800 transition-all">
            What is <span className="text-pink-400">Talent Hunt?</span>
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-4 hover:scale-105 transition">
          Join the Movement to Spotlight{" "}
          <span className="text-pink-400">India’s Top Creative Talent</span>
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm hover:text-white transition">
          Talent Hunt 2025 is a nationwide campaign launched by [Your Agency
          Name] to uncover and celebrate the brightest minds across design,
          marketing, content, technology, and digital innovation.
        </p>

        <p className="mt-3 text-gray-400 text-sm hover:text-white transition">
          If you're a passionate creator, strategist, or tech innovator, this is
          your moment. Submit your best work, get seen by top industry leaders,
          and unlock opportunities for internships, rewards, and national
          recognition.
        </p>
      </div>
    </section>
  );
};

export default Pairs;





















