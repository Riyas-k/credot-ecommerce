/* eslint-disable react/prop-types */
import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";
import axios from "../axios/config.js";

const Card = ({ product }) => {
  const { image, name, description, price, id } = product;
  const userId = useSelector((store) => store.user.userData.payload._id);

  const handleAddToCart = async (e, productId,product) => {
    e.preventDefault();
    const data = {
      userId,
      productId,
      product:product
    };
    const response = await axios.post("/addToCart", data);
    if (response) {
      toast.success("Item Added To Cart");
    }
  };

  return (
    <div className="flex flex-col items-center border p-12 pb-5 m-4 bg-white shadow-md rounded-lg max-w-sm">
      <img
        src={image}
        alt={name}
        className=" mb-4 rounded-md object-cover h-44 w-44 "
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2 text-black">{name}</h3>
        <p className="mb-2 text-black">{description}</p>
        <p className="text-black  font-bold mb-2">${price}</p>
        <button
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-pink-700"
          onClick={(e) => handleAddToCart(e, id,product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
