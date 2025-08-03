import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const labelRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      }
    );

    labelRefs.current.forEach((label, index) => {
      gsap.fromTo(
        label,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.2 * index,
          ease: "power2.out",
          scrollTrigger: {
            trigger: label,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      className="w-full max-w-[1540px] mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 py-16 bg-gradient-to-br bg-black text-white"
    >
     
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 ref={headingRef} className="text-3xl sm:text-5xl font-bold mb-4">
          Get In <span className="text-pink-400">Touch</span>
        </h2>
        <p ref={paragraphRef} className="text-gray-300 text-lg">
          Have questions or want to work with us? Send us a message below or visit us!
        </p>
        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-700">
          <iframe
            title="Location"
            className="w-full h-64 sm:h-80"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387142.8409519472!2d-74.25818882385317!3d40.705831639996886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzIxLjAiTiA3NMKwMTUnMjMuOSJX!5e0!3m2!1sen!2sus!4v1613420401547!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:ml-16 bg-white text-black rounded-2xl p-8 shadow-lg max-w-md">
        <form className="space-y-5">
          <div>
            <label
              ref={(el) => (labelRefs.current[0] = el)}
              className="block mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label
              ref={(el) => (labelRefs.current[1] = el)}
              className="block mb-1 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label
              ref={(el) => (labelRefs.current[2] = el)}
              className="block mb-1 font-medium"
            >
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


