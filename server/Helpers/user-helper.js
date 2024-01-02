import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Cart from "../models/cartModel.js";

export const createToken = async (userId) => {
  const JWT_SECRET =
    "d2365790aadbaef646d8825c53a3e3822447333cd0898f2d1df5854ffbaf8f9375d66c0156ed9a68f6432e84ea6de0d77424834ff57bedd55a4bd9b719b3fde3";
  if (JWT_SECRET) {
    const token = jwt.sign({ _id: userId }, JWT_SECRET, {
      expiresIn: "30d",
    });
    return token;
  } else {
    throw new Error("JWT TOKEN is not defined");
  }
};

export const signup = async (userdata) => {
  console.log(userdata, "{}{}");
  try {
    const emailExist = await User.findOne({ email: userdata.email });
    if (emailExist) {
      return { emailExist: true };
    }
    const password = await bcrypt.hash(userdata.password, 10);
    const user = new User({
      username: userdata.name,
      email: userdata.email,
      phone: userdata.phone,
      password: password,
    });

    const usercreated = await user.save();
    return { existinguser: false, password: true, usercreated };
  } catch (error) {
    console.error(error);
    throw new Error("Error in signup process.");
  }
};

export const forlogin = async (loginData) => {
  try {
    let userExist = await User.findOne({ email: loginData.email });
    if (!userExist) {
      return { login: false };
    } else {
      let checkPassword = await bcrypt.compare(
        loginData.password,
        userExist.password
      );
      if (checkPassword) {
        return { login: true, userExist };
      } else {
        return { login: false };
      }
    }
  } catch (error) {
    console.log("Internal Server Error");
    throw new Error("Internal Server Error");
  }
};
export const addToCart = async (cartData) => {
  try {
    const existingCart = await Cart.findOne({ userId: cartData.userId });

    if (!existingCart) {
      const data = {
        userId: cartData.userId,
        products: [
          {
            productId: cartData.product,
            quantity: 1,
          },
        ],
      };

      const newCart = await Cart.create(data);
    } else {
      const checkUpdateCart = await existingCart.products.find(
        (product) => product.id === cartData.product.id
      );
      console.log(checkUpdateCart, "============");
      if (checkUpdateCart) {
        const incrementQuantity = await Cart.findOneAndUpdate(
          {
            userId: cartData.userId,
            "products.productId": cartData.product.id,
          },
          { $inc: { "products.$.quantity": 1 } },
          { new: true }
        );
      } else {
        const updateCart = await Cart.findOneAndUpdate(
          { userId: cartData.userId },
          {
            $push: {
              products: { productId: cartData.product, quantity: 1 },
            },
          },
          { new: true }
        );
      }
      return { status: true, message: "Item Added to Cart" };
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCartProducts = async (userId) => {
  try {
    // Find the cart based on userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      // Handle case where cart is not found for the given userId
      return [];
    }

    // Extract product details using productIds from the cart
    // const productDetails = await Promise.all(
    //   cart.products.map(async (cartProduct) => {
    //     console.log(cartProduct,'lol');
    //     const product = await Cart.findById(cartProduct.productId);

    //     if (product) {
    //       return {
    //         productId: product._id,
    //         productName: product.productName,
    //         category: product.category,
    //         productPrice: product.productPrice,
    //         productImage: product.productImage,
    //         quantity: cartProduct.quantity,
    //       };
    //     }

    //     // Handle case where product is not found for the given productId
    //   })
    //   );
      return cart;

    // Filter out null values (products not found) and return the result
    // return productDetails.filter((product) => product !== null);
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error to the calling function or handle it appropriately
  }
};
export const clearCarts = async (userId) => {
  console.log(userId, "pppppppppp");
  try {
    const response = await Cart.updateOne(
      { userId: userId },
      { $set: { products: [] } }
    );
    return response;
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};
