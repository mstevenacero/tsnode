import express from "express";
import cors from "cors"
import "dotenv/config"
import routes from "./network/index"
import db from "./config/db"
const PORT = process.env.PORT || 3007
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',routes)
db().then(()=>{console.log("conexion ready");
})
app.listen(PORT,()=>{
    console.log("Listening for the PORT: ",PORT)
})
