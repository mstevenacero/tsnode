import { Response } from "express";


async function handleHttp(res:Response,err:string,errorRaw?:any){
    console.log(errorRaw);
    res.status(500);
    res.send({err})
    
}

export default{
    handleHttp
}