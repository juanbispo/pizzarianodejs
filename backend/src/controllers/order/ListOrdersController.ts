import { Request,Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController{
    async handle(req:Request,res:Response){

        const serviceList = new ListOrdersService();

        const orderList = await serviceList.execute();

        return res.json(orderList);
    }
}

export {ListOrdersController}
