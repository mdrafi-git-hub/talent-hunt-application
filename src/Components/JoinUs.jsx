import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const JoinUs = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
    >
   
      <div className="fade-in mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-300 rounded-2xl flex items-center justify-center text-black font-bold text-xl shadow-xl">
          TH
        </div>
      </div>

     
      <h1 className="fade-in text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
        Discover the Power of{" "}
        <span className="text-pink-300">Talent Hunt Campaign</span>
      </h1>

      <p className="fade-in text-gray-400 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
        Launch campaigns that resonate. The Talent Hunt Campaign connects visionary
        brands with exceptional creative talent to craft unforgettable stories and
        drive real growth.
      </p>

     
      <div className="fade-in flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("./apply")}
          className="px-6 py-3 text-white bg-pink-400 border border-pink-400 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Apply Now
        </button>
        <button
          onClick={() => navigate("./contact")}
          className="px-6 py-3 border border-pink-400 text-pink-400 rounded-full bg-white hover:bg-pink-500 hover:text-black transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default JoinUs;


