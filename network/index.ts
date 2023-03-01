import express from "express"
const route =express.Router();

import products from '../components/products/network';
route.use('/products',products)


export default route