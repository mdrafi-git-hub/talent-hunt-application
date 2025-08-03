import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services does Talent Hunt provide?",
    answer: "We offer a full suite of digital marketing services including SEO, social media marketing, branding, and web development.",
  },
  {
    question: "Is there a minimum budget to start a campaign?",
    answer: "Yes, we recommend a minimum of ₹10,000/month to see optimal results, but we customize plans for every business.",
  },
  {
    question: "How long does it take to see results?",
    answer: "SEO and content campaigns usually show results within 2–3 months, while paid ads may deliver faster insights.",
  },
  {
    question: "Can I track my campaign performance?",
    answer: "Absolutely. We offer monthly performance reports and dashboards tailored to your campaign KPIs.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, Talent Hunt works with businesses around the globe in various industries.",
  },
  {
    question: "Is your team certified?",
    answer: "Our marketers are certified in Google Ads, Meta Blueprint, and HubSpot Inbound Marketing.",
  },
  {
    question: "Can you help with branding or just ads?",
    answer: "We specialize in both. Our team helps build your brand presence from logo to market domination.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white py-16 px-6 md:px-12 flex justify-center items-center"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 hover:text-pink-400 transition duration-300">
          Frequently <span className="text-pink-400">Asked Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl bg-[#111] transition-all hover:scale-[1.02] hover:border-pink-400 hover:bg-[#1c1c1c] duration-300"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg text-white hover:text-yellow-400 transition duration-300">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-300 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 px-4 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;



