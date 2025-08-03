import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardRef = useRef([]);
  const stepsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  cardRef.current = [];
  stepsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const levels = ["Beginner", "Intermediate", "Expert"];
  const steps = ["Register Online", "Submit Your Work", "Get Featured"];

  return (
    <section
      id="How It Works"
      ref={sectionRef}
      className="max-w-[1540px] w-full mx-auto relative bg-black text-white py-16 px-4 sm:px-8 md:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold transition duration-300 hover:-translate-y-1">
          Comes from <span className="text-pink-400">Big</span>
        </h2>
        <p className="text-gray-400 mt-2 hover:text-pink-300 transition">
          Your journey to get discovered starts here
        </p>
      </div>

     
      <div className="relative max-w-6xl mx-auto flex justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-r from-pink-500/20 to-pink-400/10 blur-3xl opacity-40 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {levels.map((level, i) => (
            <div
              key={i}
              ref={(el) => (cardRef.current[i] = el)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-[280px] h-auto md:h-44 p-4 md:p-6 rounded-xl text-center md:text-left transition-all duration-300 flex flex-col justify-between items-center md:items-start
                ${
                  hoveredIndex === i ? "scale-105 shadow-2xl" : "scale-100"
                }
                ${
                  level === "Expert"
                    ? "bg-white/10 border border-pink-400 shadow-pink-400/30"
                    : level === "Intermediate"
                    ? "bg-white/10 border border-blue-400 shadow-blue-400/20"
                    : "bg-white/10 border border-green-400 shadow-green-400/20"
                }`}
            >
              <p className="text-lg font-semibold">{level}</p>
              <p className="text-sm text-gray-400 text-center md:text-left">
                {level === "Beginner"
                  ? "Just getting started? We've got you!"
                  : level === "Intermediate"
                  ? "Take your skills to the next level"
                  : "Ready to showcase your best work?"}
              </p>
              <button
                onClick={() => navigate("/apply")}
                className={`mt-3 px-4 py-1 rounded-full transition 
                  ${
                    level === "Expert"
                      ? "bg-pink-500 hover:bg-pink-400"
                      : level === "Intermediate"
                      ? "bg-blue-400 hover:bg-pink-400"
                      : "bg-green-400 hover:bg-pink-400"
                  }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-6 text-center">
        {steps.map((title, i) => (
          <div
            key={i}
            ref={(el) => (stepsRef.current[i] = el)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`transition-transform duration-300 p-4 rounded-lg 
              ${
                hoveredIndex === i
                  ? "bg-white/10 scale-105 shadow-lg shadow-pink-300/20"
                  : ""
              }`}
          >
            <h3 className="text-pink-400 font-bold">[ STEP {i + 1} ]</h3>
            <h4 className="text-xl font-semibold mt-2">{title}</h4>
            <p className="text-gray-400 text-sm mt-2 px-4">
              {i === 0 &&
                "Fill out a quick application form to enter the Talent Hunt. It’s free and open to everyone!"}
              {i === 1 &&
                "Upload a portfolio or a sample project based on the category you’re applying to."}
              {i === 2 &&
                "Shortlisted entries will be showcased to top agencies, mentors, and hiring partners!"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;




