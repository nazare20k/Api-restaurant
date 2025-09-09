import { Request, Response, NextFunction} from "express"
import { knex } from"@/database/knex"

class TablesController { 
    async index(request: Request, response: Response, next: NextFunction){
        try{
            const tables = await knex<TableRepository>("tables")
            .select()
            .orderBy("table_number")

            return response.json(tables)

        }catch (error){
            next(error)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction){
        try{
            const tables = await knex<TableRepository>("tables").del()

            return response.json()
        }catch(error){
            next(error)
        }
    }

}

export { TablesController }