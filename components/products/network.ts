import { Router } from "express";
const route = Router()
import controller from "./controller";
import logMiddleware from "../../middleware/log";

route.post('/',logMiddleware,controller.add)
route.get('/',controller.list)
route.get('/one/:name',controller.getOne)
route.put('/update/:id',controller.update)
route.delete('/delete/:id',controller.deleteI)


export default route