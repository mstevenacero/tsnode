import productsModel from "./products";
import { Products } from "./products.interface";
///logica de negocio

////////////////////
const insertProducts = async (product:Products) =>{
    const reponse = await productsModel.create(product)
    return reponse;

}

const getProducts = async () =>{
    const reponse = await productsModel.find({})
    return reponse;
}

const getProductsOne = async (name:string)=>{
  const response = await productsModel.findOne({name:name})
  return response
}

const updateProducts = async (id:string,product:Products)=>{
    const response = await productsModel.findByIdAndUpdate({_id:id},product,{new:true})
    return response
}

const deleteProduct = async (id:string)=>{
    const response = await productsModel.findByIdAndRemove({_id:id},{new:true})
    return response
}

export default {
    insertProducts,
    getProducts,
    getProductsOne,
    updateProducts,
    deleteProduct

}