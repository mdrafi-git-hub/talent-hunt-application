// import React, { useState } from "react";

// const Apply = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     setTimeout(() => {
//       setSubmitted(false);
//     }, 4000);
//   };

//   return (
//     <div className="w-full sm:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative">
//       <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
//         Talent Hunt Application
//       </h2>

//       <form className="space-y-4" onSubmit={handleSubmit}>
       
//         <div>
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             required
//             placeholder="Enter your name"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

       
//         <div>
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             required
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

     
//         <div>
//           <label htmlFor="portfolio" className="block text-gray-700 font-medium mb-1">
//             Portfolio / LinkedIn
//           </label>
//           <input
//             type="url"
//             id="portfolio"
//             required
//             placeholder="Enter your profile link"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

        
//         <div>
//           <label htmlFor="pitch" className="block text-gray-700 font-medium mb-1">
//             Short Personal Pitch
//           </label>
//           <textarea
//             id="pitch"
//             required
//             rows="3"
//             placeholder="Tell us why you're a great fit..."
//             className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
//           ></textarea>
//         </div>

   
//         <div>
//           <label htmlFor="category" className="block text-black font-medium mb-1">
//             Apply For
//           </label>
//           <select
//             id="category"
//             required
//             className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//           >
//             <option value="dev">Software Development</option>
//             <option value="design">Graphic Designing</option>
//             <option value="marketing">Digital Marketing</option>
//             <option value="script">Script Writing</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-pink-600 hover:bg-pink-700 text-white font-semibold w-full py-2 rounded-md transition duration-300"
//         >
//           Submit Application
//         </button>
//       </form>

   
//       {submitted && (
//         <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center rounded-2xl animate-fade-in">
//           <svg
//             className="w-16 h-16 text-green-500 mb-4 animate-bounce"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//           <h3 className="text-xl font-semibold text-gray-800">Application Submitted!</h3>
//           <p className="text-gray-600 text-sm mt-1 text-center px-4">
//             Thank you for applying to Talent Hunt. We’ll be in touch very soon.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Apply;


import React, { useState } from "react";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Talent Hunt Application
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Portfolio / LinkedIn</label>
            <input
              type="url"
              placeholder="Enter your profile link"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Short Personal Pitch</label>
            <textarea
              placeholder="Tell us why you're a great fit..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Apply For</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            >
              <option value="">Select a role</option>
              <option value="Software Development">Software Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Content Creation">Content Creation</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-md transition duration-300"
          >
            Submit Application
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium mt-4">
              Application submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Apply;




