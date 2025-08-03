import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sneha R.",
    country: "India",
    time: "3 days ago",
    review:
      "Participating in Talent Hunt was a game-changer. I got recognized by a top brand and even got freelance offers!",
    verified: true,
  },
  {
    name: "Jake M.",
    country: "USA",
    time: "1 week ago",
    review:
      "The exposure I received from Talent Hunt boosted my confidence and helped build my online portfolio.",
    verified: true,
  },
  {
    name: "Aarav D.",
    country: "India",
    time: "July 18, 2024",
    review:
      "It’s not just a competition—it’s a launchpad! Got featured in a case study and my profile views skyrocketed.",
    verified: true,
  },
  {
    name: "Chloe T.",
    country: "Australia",
    time: "June 30, 2024",
    review:
      "I loved the creative freedom Talent Hunt offered. The feedback from the panel helped refine my style.",
    verified: true,
  },
  {
    name: "Ravi Kumar",
    country: "India",
    time: "July 10, 2024",
    review:
      "Thanks to Talent Hunt, I landed my first internship as a creative strategist. Great platform for freshers!",
    verified: true,
  },
  {
    name: "Sophia L.",
    country: "Canada",
    time: "July 25, 2024",
    review:
      "Superb initiative! As a content creator, it helped me collaborate with new brands and sharpen my pitch.",
    verified: true,
  },
];

const ReviewSection = () => {
  return (
    <div
      id="testimonials"
      className="w-full mx-auto min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-16 relative overflow-hidden"
    >
     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2">
          Talent Hunt <span className="text-pink-400">Experiences</span>
        </h2>
        <p className="text-lg text-gray-400">
          Hear what past participants say about their Talent Hunt journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-[#1b1d23] p-6 rounded-xl shadow-xl border border-[#2c2f36] hover:scale-[1.03] hover:shadow-pink-500/20 transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span className="font-semibold">{r.name}</span>
              <span>
                {r.time} · <span className="italic">{r.country}</span>
              </span>
            </div>
            <p className="text-base mb-3 leading-relaxed text-gray-300">
              {r.review}
            </p>
            {r.verified && (
              <span className="text-pink-400 text-xs font-medium">
                ✔ Verified Participant
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;




