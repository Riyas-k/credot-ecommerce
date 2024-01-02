import express from 'express';
const router = express.Router();
import {  addToCarts, clearCart, getCartProduct, loginUser, registerUser } from '../controllers/user-controller.js';

/* GET users listing. */
router.post('/signup',registerUser);
router.post('/login',loginUser);
router.post('/addToCart',addToCarts)
router.get('/getCart/:userId',getCartProduct)
router.delete('/clearCart/:userId',clearCart)

export default router;