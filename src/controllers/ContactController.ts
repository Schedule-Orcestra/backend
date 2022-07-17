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
                res.status(200).json({message:"contado cadastro com sucesso.", contact})

            }else{
                res.status(400).json({erro:"o id do usuário não foi encontrado."})
            }

        }catch(e){
            res.status(400).json({erro:"não foi possível condastrar o contato."})

        }


    }

    get = async (req: Request, res: Response) => {
        const {userId} = req.body
        try{
            res.json( await Contact.find({userId}))
        }catch(e){
            res.status(400).json(e)
        }

    }

    delete = async (req: Request, res: Response) =>{
            const {contactId} = req.body
        try{
            if (await Contact.findByIdAndDelete(contactId))
                res.status(200).json({message:"Contado deletado com sucesso."})
            else
                res.status(200).json({message:"Esse contato não existe, id não encontrado."})
        }catch(err){
            res.status(400).json({erro:"Erro, não foi possívle deletar o contato"})
        }

    }

    update = async (req: Request, res: Response) =>{

            const {name,lastname, phone, email, contactId} = req.body
            try{

                if (await Contact.findByIdAndUpdate(contactId,{name, lastname, phone, email}))
                    res.status(200).json({message:"Contado atualizado com sucesso."})
                else
                    res.status(200).json({message:"Esse contato não existe, id não encontrado."})
                
            }catch(err){

                res.status(400).json({erro:"Erro, não foi possível autualizar o contato."})
            }
                

    }


}