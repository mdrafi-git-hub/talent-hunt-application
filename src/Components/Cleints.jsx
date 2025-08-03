import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-gray-100 body-font bg-black py-24"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap justify-center items-center text-center mb-12">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Trusted by Innovators & Tech Enthusiasts
            </h2>
            <p className="text-gray-400">
              Our platform has helped thousands of talents connect with their dream jobs, projects, and recognition.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            {
              name: "Acme Corp",
              border: "green-400",
              color: "text-green-400",
              feedback:
                "Found top-tier developers within days. TalentHub changed our hiring process forever.",
            },
            {
              name: "Nextify",
              border: "blue-400",
              color: "text-blue-400",
              feedback:
                "A revolutionary way to validate real-world talent through challenges and certifications.",
            },
            {
              name: "Launchpad",
              border: "yellow-400",
              color: "text-yellow-400",
              feedback:
                "We’ve partnered with TalentHub to access some of the smartest minds in tech.",
            },
          ].map((client, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group bg-white/5 border border-${client.border} rounded-lg p-6 w-72 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-${client.border}/50 hover:shadow-xl`}
            >
              <h3 className={`text-lg font-semibold ${client.color}`}>{client.name}</h3>
              <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition duration-300">
                {client.feedback}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform duration-300 text-white font-semibold py-2 px-8 rounded-full">
            Join Our Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;


