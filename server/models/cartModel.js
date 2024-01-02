import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: String,
  products: [{}],
});

const Cart = mongoose.model("carts", cartSchema);
export default Cart;
