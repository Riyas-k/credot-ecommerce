import React from "react";

const Banner = () => {
  return (
    <div className="bg-pink-200 p-8 md:flex md:items-center md:justify-between mt-5">
      <div className="md:w-1/2 md:mr-8">
        <h2 className="font-semibold text-black text-4xl pb-5">
          X-Box For Your Living Room
        </h2>
        <p style={{ color: "black" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature.
        </p>
        <h1 className="text-pink-800 font-bold text-2xl pt-5 pb-5">$600</h1>
        <button className="pt-2 rounded bg-pink-600 px-4 py-2 text-white mb-5">
          Buy Now
        </button>
      </div>
      <div className="md:w-1/2 md:mb-8 md:text-left ">
        <img
          src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Random Image"
          className="w-full h-48 md:w-full md:h-auto "
        />
      </div>
    </div>
  );
};

export default Banner;
