
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import softwareImage from "../assets/software Development.jpg";
import Marketing from "../assets/Marketing.webp";
import Digital from "../assets/Digital.jpg";
import Business from "../assets/business.png";

gsap.registerPlugin(ScrollTrigger);

const blogData = [
  {
    title: "Top 5 Skills Companies Want in 2025",
    description: "Explore in-demand skills you must master to land your dream tech role in the coming year.",
    image: softwareImage,
  },
  {
    title: "How to Crack Talent Hunt Challenges",
    description: "Tips and strategies from top scorers to stand out in your Talent Hunt assessments.",
    image: Marketing,
  },
  {
    title: "Behind the Scenes of Talent Hunt",
    description: "Learn how we design challenges and evaluate candidates at scale with AI + human synergy.",
    image: Digital,
  },
  {
    title: "Top Tech Talent: Stories of Success",
    description: "Meet real candidates who found career breakthroughs through our Talent Hunt platform.",
    image: Business,
  },
];

const BlogCarousel = () => {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
   
    const el = carouselRef.current;
    gsap.to(el, {
      x: () => `-${el.scrollWidth / 2}`,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });

  
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-10 overflow-hidden"
    >
      <div className="max-w-screen-xll mx-auto px-6 md:px-12">
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">
              Talent Hunt <span className="text-pink-400">Blogs</span>
            </h2>
            <p className="text-gray-400">
              Get inspired, stay updated — insights on coding, hiring, and tech talent.
            </p>
          </div>
          <button className="px-5 py-2 bg-pink-400 text-black border border-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300">
            View All Posts
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 w-max"
          >
            {[...blogData, ...blogData].map((blog, index) => (
              <div
                key={index}
                className="bg-[#111827] min-w-[280px] md:min-w-[300px] max-w-[300px] p-5 rounded-xl shadow-md hover:shadow-pink-500/40 transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
                <button className="px-4 py-1 bg-pink-400 border border-white text-black rounded-full text-xs hover:bg-white hover:text-black transition duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;



