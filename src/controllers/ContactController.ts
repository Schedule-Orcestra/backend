import Contact from "../models/Contact";
import User from "../models/User";
import { Request, Response } from "express";

export default class ContactController{
    create = async (req: Request, res: Response) =>{

        try{
            const {name,lastname, phone, email, userId} = req.body
            
            const user = await User.findOne({_id:userId})
            if (user){
                
                const contact = await Contact.create({name, lastname, phone, email, userId})
                res.status(200).json({messagem:"contado cadastro com sucesso", contact})

            }else{
                res.status(400).json({erro:"o id do usuário não foi encontrado"})
            }

        }catch(e){
            res.status(400).json({erro:"não foi possível condastrar o contato"})

        }


    }

    get =async (req: Request, res: Response) => {
        const {userId} = req.body
        try{
            res.json( await Contact.find({userId}))
        }catch(e){
            res.status(400).json(e)
        }

    }

}