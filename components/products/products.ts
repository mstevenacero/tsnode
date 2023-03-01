import {Schema,Types,model,Model} from"mongoose"
import { Products } from "./products.interface"

const  productSchema = new Schema<Products>(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            require:true
        },
        referencia:{
            type:String,
            required:true
        },
        uso:{
            type:String,
            required:true
        }

    },
    {
        timestamps:true,
        versionKey:false

    }
)

const productsModel = model('products',productSchema)

export default productsModel