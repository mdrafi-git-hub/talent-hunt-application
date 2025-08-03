import React from "react";
import { motion } from "framer-motion";

const CertificateSection = () => {
  return (
    <section
      id="certificateSection"
      className="w-full bg-black text-white overflow-hidden"
    >
      <div className="w-full max-w-screen-xl mx-auto py-24 px-6 md:px-12 relative">
      
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute text-[20vw] font-bold text-gray-800 -left-12 -top-16 z-0 select-none pointer-events-none"
        >
          Recognition
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute text-[18vw] font-bold text-white right-0 top-32 z-0 select-none pointer-events-none"
        >
          Talent Hunt
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex justify-center items-center px-4"
        >
          <div
            className="bg-white/5 border border-pink-400 backdrop-blur-md rounded-xl p-6 w-full max-w-md text-center shadow-lg shadow-pink-400/30 
            transition-all duration-300 hover:shadow-pink-500/60 hover:-translate-y-1 group"
          >
          
            <div className="text-xs text-pink-400 font-bold text-left transition-colors group-hover:text-pink-300">
              CERTIFICATE OF EXCELLENCE
            </div>

          
            <h3 className="mt-6 text-2xl font-semibold group-hover:text-pink-200 transition-colors">
              RAFI MAHAMMAD
            </h3>

         
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              This certificate is proudly presented in recognition of outstanding creativity and contribution
              during the Talent Hunt campaign. Your work stood out, and your potential shines bright.
            </p>

        
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 flex justify-center"
            >
              <div
                className="w-24 h-24 rounded-full border-4 border-pink-400 flex items-center justify-center text-sm font-bold text-pink-300
                transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-pink-500/30"
              >
                #TH2025
              </div>
            </motion.div>

          
            <div className="flex justify-between text-xs text-gray-400 mt-6">
              <span>Issued: 2025-08-01</span>
              <span className="italic">Talent Hunt Jury</span>
            </div>
          </div>
        </motion.div>

      
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10 relative z-10 max-w-2xl mx-auto px-4"
        >
          Every achiever gets the recognition they deserve — official certificates to boost their creative journey.
        </motion.p>
      </div>
    </section>
  );
};

export default CertificateSection;








