import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef([]);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  const addToButtonsRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(subheadingRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(
        headingRef.current,
        { scale: 2.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=0.3"
      )
      .fromTo(paragraphRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.6")
      .fromTo(
        buttonsRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.5"
      );


    gsap.to(blob1Ref.current, {
      x: 80, y: 50, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut",
    });
    gsap.to(blob2Ref.current, {
      x: -100, y: -70, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut",
    });
    gsap.to(blob3Ref.current, {
      x: 60, y: -90, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut",
    });

    return () => {
      buttonsRef.current = [];
    };
  }, []);

  return (

    <section className="max-w-[1540px] w-full mx-auto relative flex flex-col justify-center items-center min-h-screen px-4 md:px-10 lg:px-20 bg-black text-white overflow-hidden">


      <div className="absolute inset-0 z-0">
        <div ref={blob1Ref} className="absolute w-[400px] h-[400px] bg-pink-500 opacity-30 rounded-full blur-3xl top-[-120px] left-[-80px]" />
        <div ref={blob2Ref} className="absolute w-[300px] h-[300px] bg-indigo-500 opacity-30 rounded-full blur-3xl bottom-[15%] right-[10%]" />
        <div ref={blob3Ref} className="absolute w-[350px] h-[350px] bg-blue-500 opacity-30 rounded-full blur-3xl top-[40%] left-[60%]" />
      </div>


      <div className="z-10 max-w-3xl text-center">


        <h1 ref={headingRef} className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Discover <span className="text-pink-400">Extraordinary</span> Talent.
          <br />
          <span className="text-pink-400">Build</span>   Unstoppable  Teams.
        </h1>

        <p ref={paragraphRef} className="text-gray-300 text-md md:text-lg mb-6 max-w-2xl mx-auto">
          Are you ready to stand out? Join our nationwide talent hunt campaign to showcase your skills and connect with top recruiters across creative, strategic, and digital domains.
        </p>



        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate('/apply')}
            className="bg-pink-500 text-black px-6 py-2 rounded-full hover:bg-white hover:text-pink-500 transition duration-300 font-semibold"
          >
            Apply Now
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition font-semibold"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;


































