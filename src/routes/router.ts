import { Router, Request, Response} from "express"
import UserController from "../controllers/UserController"

const router = Router() 

const userController = new UserController()

//teste
router.get('/teste', (req:Request, res: Response) => {
    const {nome, idade} = req.body
    res.send(`Olá meu nome é ${nome} e eu eu tenho ${idade} anos !!!`)
})

//user
router.post('/user', (req:Request, res: Response) =>{
    userController.createUser(req, res)
})

router.get('/user', (req:Request, res: Response) =>{
    userController.getUser(req, res)
} )


export default router;