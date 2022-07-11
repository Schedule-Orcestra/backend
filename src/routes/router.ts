import { Router, Request, Response} from "express"
import UserController from "../controllers/UserController"

const router = Router() 

const userController = new UserController()

//teste
router.post('/teste', (req:Request, res: Response) => {
    const {name} = req.body
    res.json({msg:`Olá meu nome é ${name}!!!`})
})

//user
router.post('/user', (req:Request, res: Response) =>{
    userController.create(req, res)
})

router.get('/user', (req:Request, res: Response) =>{
    userController.get(req, res)
} )

router.post('/login', (req:Request, res: Response) =>{
    userController.login(req, res)
})


export default router;