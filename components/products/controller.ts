
import { Request, Response } from "express";
import errorHandle from "../../utils/error.handle";
import insert from "./products.sevice"


async function add({ body }: Request, res: Response) {

    try {

        const response = await insert.insertProducts(body)
        return res.status(200).send({ data: response })

    } catch (e) {
        errorHandle.handleHttp(res, "error at database")
    }
}


async function list(req: Request, res: Response) {


    try {
        const response = await insert.getProducts()
        return res.status(200).send({ data: response })
    } catch (e) {
        errorHandle.handleHttp(res, "error at database")
    }


}

async function getOne({ params }: Request, res: Response) {

    try {
        const name = params.name
        const response = await insert.getProductsOne(name)
        return res.status(200).send({ data: response })
    } catch (e) {
        errorHandle.handleHttp(res, "error at database")
    }


}

async function update({ body, params }: Request, res: Response) {

    try {
        const id = params.id
        const response = await insert.updateProducts(id, body)
        return res.status(200).send({ data: response })

    } catch (e) {
        console.log(e);

        errorHandle.handleHttp(res, "error ")

    }

}

async function deleteI({ params }: Request, res: Response) {

    try {
        const id = params.id
        const response = await insert.deleteProduct(id)
        return res.status(200).send({ data: response, message: "deleted successfull item in the database" })

    } catch (e) {

        errorHandle.handleHttp(res, "error at database")



    }

}


export default {
    add,
    list,
    update,
    deleteI,
    getOne
}

