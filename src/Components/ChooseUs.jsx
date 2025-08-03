import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    capital: "Graphic Design",
    price: "Free Entry",
    target: "UI / Branding / Motion / Illustration",
    drawdown: "Creative Challenge",
    dailyDrawdown: "Portfolio Submission",
  },
  {
    capital: "Content & Copy",
    price: "Free Entry",
    target: "Blogs / Ads / Social / Strategy",
    drawdown: "Written Brief",
    dailyDrawdown: "3 Samples Max",
  },
  {
    capital: "Marketing",
    price: "Free Entry",
    target: "Campaign / Performance / Growth",
    drawdown: "Pitch Challenge",
    dailyDrawdown: "1 Week Prep",
  },
  {
    capital: "Development",
    price: "Free Entry",
    target: "Frontend / Backend / AI / Automation",
    drawdown: "Task-Based Round",
    dailyDrawdown: "GitHub Required",
    highlight: true,
  },
];

const benefits = [
  {
    title: "No Entry Fee",
    description:
      "Talent Hunt is completely free to enter — we believe creativity shouldn't come with a cost.",
    icon: "🎉",
  },
  {
    title: "Real Exposure",
    description:
      "Finalists get featured across our platforms and receive visibility from top industry partners.",
    icon: "📢",
  },
  {
    title: "Category Flexibility",
    description:
      "You can apply under one or more categories — design, content, strategy, or tech. Your choice, your spotlight.",
    icon: "🧠",
  },
  {
    title: "Rewards & Internships",
    description:
      "Winners receive internships, mentorships, goodies, and cash prizes. Build your creative career here.",
    icon: "🏆",
  },
];

const ChooseUs = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(
      el.querySelectorAll(".animate-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="categories"
      ref={containerRef}
      className="bg-black text-white py-16 px-4 sm:px-6 md:px-12 w-full min-h-screen"
    >
      <div className="max-w-[1440px] mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Talent Tracks in the <span className="text-pink-300">Hunt Campaign</span>
          </h2>
          <p className="text-gray-400">
            Select your expertise and let your skills shine.
          </p>
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {["Design", "Content", "Marketing", "Tech"].map((tier) => (
              <button
                key={tier}
                className="bg-white text-black text-sm font-medium rounded-full px-4 py-1 hover:bg-pink-200 transition"
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`animate-card border rounded-xl p-6 bg-white/5 backdrop-blur text-white shadow-lg hover:scale-105 hover:shadow-green-500/30 transform transition duration-300 ${
                plan.highlight ? "border-pink-400 ring-2 ring-green-500" : ""
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <p className="text-3xl font-bold mb-4">{plan.capital}</p>
              <button
                onClick={() => navigate("/apply")}
                className="bg-white text-black font-semibold px-4 py-2 rounded-md w-full mb-5 hover:bg-pink-300 transition"
              >
                {plan.price}
              </button>
              <ul className="text-sm space-y-2">
                <li>🎯 Focus Areas: {plan.target}</li>
                <li>🧪 Challenge Type: {plan.drawdown}</li>
                <li>📅 Requirements: {plan.dailyDrawdown}</li>
              </ul>
            </div>
          ))}
        </div>

      
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Participate in  <span className="text-pink-400">Talent Hunt 2025?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="animate-card bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;





