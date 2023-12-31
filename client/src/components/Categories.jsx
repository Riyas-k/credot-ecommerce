import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-8 text-white font-bold mt-3">
      <div className="mb-8 md:mb-0 text-center flex flex-col items-center bg-yellow-600 w-60 rounded-xl">
        <div className="mb-2 mt-2">Watch</div>
        <img
          src="https://www.fireboltt.com/cdn/shop/products/Black_01_400x.png?v=1677243430"
          alt="Watch"
          className="w-16 h-16 mb-4 rounded-full"
        />
      </div>

      <Link to="/bags">
        <div className="mb-8 md:mb-0 text-center flex flex-col items-center bg-pink-600 w-60 rounded-xl">
          <div className="mb-2 mt-2">Bag</div>
          <img
            src="https://thecarbonado.com/cdn/shop/products/GB-3.png?v=1679665305"
            alt="Bag"
            className="w-16 h-16 mb-4 rounded-full"
          />
        </div>
      </Link>
      <Link to="/shoes">
      <div className="text-center flex flex-col items-center bg-sky-700 w-60 rounded-xl">
        <div className="mb-2 mt-2">Shoes</div>
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20231214/R548/657a300eafa4cf41f5cd8dfa/-473Wx593H-466885175-white-MODEL.jpg"
          alt="Shoes"
          className="w-16 h-16 mb-4 rounded-full"
        />
      </div>
      </Link>
    </div>
  );
};

export default Categories;
