import {Request, Response} from "express"
import User from "../models/User"
import bcrypt from "bcryptjs"
import { setDriver } from "mongoose"

export default class UserController {
    createUser = async (req: Request, res: Response) =>{
        const {name, email, password} = req.body

        const checkEmail = await User.findOne({email})

        if (checkEmail){
            res.status(400).json( {error: "Esse email já foi cadastreado, tente outro."})

        }else{
            //const cryptedPassword = await bcrypt.hash(password, 10)
            //console.log(typeof(cryptedPassword))
            const user = await User.create({
                name, 
                email,
                password
            })

        res.status(200).json({message:"Usuário criado com sucesso", user})

        }
    }

    getUser =async (req: Request, res: Response) => {
        const user = await User.find()
        res.json(user)
        
    }
}