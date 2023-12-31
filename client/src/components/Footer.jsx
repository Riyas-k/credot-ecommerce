import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-black p-8 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Let's Stay in Touch</h2>
        <p className="mb-4">Get updates on sales, specials, and more</p>
        <div className="flex justify-center items-center mb-4 flex flex-col ">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 mr-2 w-64 border border-white rounded-md focus:outline-none"
          />

          <button
            type="button"
            className="bg-pink-500 text-white px-4 py-2 rounded-md mt-5"
          >
            Send
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
