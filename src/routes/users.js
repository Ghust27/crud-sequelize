const {Router} = require('express')
const router = Router()
const userService = require('../services/userService')

router.get('/',async (req,res)=>{
    try{
        const users = await userService.getAllUsers()
        res.json(users)
    }catch (err){
        console.error(err)
        res.status(500).json({error:"Internal server error."})
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const user = await userService.getUserById(id)
        res.json(user)
    }catch (err){
        console.error(err)
        res.status(404).json({error:"User not found"})
    }
})

router.post('/', async(req,res)=>{
    try{
        const newUser = await userService.createUser(req.body)
        res.json(newUser)
    }catch (err){
        console.error(err)
        res.status(500).json({error:"Internal server error."})
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const updatedUser = await userService.updateUser(id,req.body)
        res.json(updatedUser)
    }catch(err){
        console.error(err)
        res.status(400).json({error:"Bad request."})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        await userService.deleteUser(id)
        res.json({message:"Usuario deletado com sucesso."})
    }catch(err){
        console.error(err)
        res.status(400).json({error:"Bad request."})
    }
})

module.exports = router