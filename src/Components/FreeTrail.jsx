import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Apply from "../Pages/apply";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const FreeTrail = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* LEFT TEXT */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 group">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug transition-transform duration-300 group-hover:-translate-y-1">
          Don’t just showcase your{" "}
          <span className="text-pink-400 hover:text-pink-300 transition">
            talent
          </span>
          , <br />
          let the world{" "}
          <span className="text-pink-400 hover:text-pink-300 transition">
            celebrate
          </span>{" "}
          it!
        </h2>
        <p className="text-gray-400 text-sm sm:text-base hover:text-gray-200 transition">
          Be part of India’s most awaited Talent Hunt. Free to enter. Open to
          all. From creators to coders — this is your moment to shine.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-pink-400 text-black px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:scale-105 hover:bg-pink-100 transition"
          >
            Contact Us <span className="text-pink-500 text-xl">→</span>
          </button>
        </div>
      </div>

    
      <div
        ref={formRef}
        className=" text-black w-full md:w-1/2 flex items-center justify-center"
      >
        <Apply />
      </div>
    </section>
  );
};

export default FreeTrail;


