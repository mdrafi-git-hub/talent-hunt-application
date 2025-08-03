
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




