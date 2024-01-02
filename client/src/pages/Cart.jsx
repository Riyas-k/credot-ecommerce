import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from '../axios/config.js'
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    // Add more products as needed
  ]);
  const [product,setProduct] = useState([])
  const userId = useSelector((store)=>store.user?.userData?.payload._id)

  useEffect(()=>{
    const fetchProduct= async () =>{
       try {
          const response = await axios.get(`/getCart/${userId}`)
          setProduct(response.data?.products)
          console.log(response,"++++++++++");
       } catch (err){
         return { status: false , message:"not found product"}
       }
    }
    fetchProduct()
  },[])

  const getTotalPrice = () => {

    return product.reduce((total, product) => total + product?.productId?.price, 0);
  };

  const handleDeleteProduct = (productId) => {
    const updatedCart = product?.filter((product) =>{ console.log(productId,product,'hii'); return ( product.productId.id !== productId)});
    setProduct(updatedCart);
  };

  const handleClearCart = async() => {
    const response =  await axios.delete(`/clearCart/${userId}`)
    console.log(response,'fool');
    setProduct([]);
  };

  const handlePlaceOrder = () => {
    // Here you can implement the logic to place the order
    // For this example, we'll just display a success message
    if(product?.length>0){
      Swal.fire({
        icon: "success",
        title: "Successfully Placed Order",
        showConfirmButton: false,
        timer: 1500,
      });
      setProduct([])
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Options</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((product) => (
            <tr key={product.productId.id}>
              <td className="py-2 px-4 border-b ">
                <img
                  src={product.productId.image}
                  alt={product.productId.name}
                  className="w-16 h-16 object-cover ml-24"
                />
              </td>
                <td className="ml-2">{product.productId.name}</td>
              <td className="py-2 px-4 border-b">${product.productId.price}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white py-2 px-4 mr-2 rounded-lg "
                  onClick={() => handleDeleteProduct(product.productId.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-xl font-bold">Total Price: ${getTotalPrice()}</p>
      </div>
      <div className="mt-4">
        <button
          className="bg-red-500 text-white py-2 px-4 mr-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
