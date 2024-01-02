import {
  createToken,
  forlogin,
  signup,
  getCartProducts,
  clearCarts,addToCart
} from "../Helpers/user-helper.js";

export const registerUser = async (req, res) => {
  try {
    const response = await signup(req.body);
    console.log(response,'hi');

    if (response.emailExist) {
      res.json({ message: "Email already exists" });
    } else if (response.usercreated) {
      const UserData = response.usercreated;
      console.log(UserData, "register");
      const userId = response.usercreated._id;

      const token = await createToken(userId.toString());

      res.json({ status: true, message: "User registerd", UserData, token });
    } else {
      res.json({ status: false, UserData });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const loginUser = async (req, res) => {
  try {
    const response = await forlogin(req.body);
    if (response.login && response.userExist) {
      const userData = response.userExist;
      const userId = response.userExist._id;
      const username = response.userExist.username;

      const token = await createToken(userId.toString(), username);

      res.json({ status: true, userData, token });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.log("Internal Server Error");
    res.status(500).send("Internal Server Error");
  }
};
export const addToCarts = async (req, res) => {
  try {
    console.log(req.body);
    const response = await addToCart(req.body);
    console.log(response,'res');
    if (response) {
      res.status(201).json(response);
    } else {
      res.status(401).json({ message: "Somthing Went Wrong" });
    }
  } catch (error) {}
};

export const getCartProduct = async (req, res) => {
  try {
    const response = await getCartProducts(req.params.userId);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
export const clearCart = async (req, res) => {
  try {
    const response = await clearCarts(req.params.userId);
    if (response) {
      res.status(201).json(response);
    }
  } catch (error) {}
};
