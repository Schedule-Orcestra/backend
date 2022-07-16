import {Request, Response} from "express"
import User from "../models/User"
import bcrypt from "bcryptjs"

export default class UserController {
    create = async (req: Request, res: Response) =>{
        const {name, email, password} = req.body

        const user = await User.findOne({email})

        if (user){
            res.status(400).json( {error: "Esse email já foi cadastreado, tente outro."})

        }else{
            await bcrypt.hash(password, 10)
            const user = await User.create({
                name, 
                email,
                password: await bcrypt.hash(password, 10)
            })

        res.status(200).json({message:"Usuário criado com sucesso", user})

        }
    }

    get = async (req: Request, res: Response) => {
        try{
            const users = await User.find()
            res.json(users)
        }catch(e){
            res.status(400).json(e)
        }
    }

    login = async (req: Request, res: Response) => {
        const {email, password} = req.body

        try{
            const user = await User.findOne({email})

            if ( !user ||  ! (await bcrypt.compare(password, user.password )) ){
                res.status(400).json({"erro": "Por favor, verifique se o seu email e senha são válidos"})
                return 
            }

            res.status(200).json({user})
        }catch{
            res.status(400).json("Erro ao logar o usuário")
        }

    }

        
}
    