const User = require('../models/user')

const getAllUsers = async ()=>{
    return await User.findAll()
}

const createUser = async (data)=>{
    const {name,email} = data
    return await User.create({name,email})
}

const getUserById = async (id)=>{
    return await User.findByPk(id)
}

const updateUser = async (id,data)=>{
    const user = await User.findByPk(id)
    if(!user){
        throw new Error("Usuario nao encontrado.")
    }
    return await user.update(data)
}

const deleteUser = async (id) =>{
    const user = User.findByPk(id)
    if (!user){
        throw new Error("Usuario nao encontrado")
    }
    await user.destroy()
    return user
}

module.exports = {getAllUsers,createUser,getUserById,updateUser,deleteUser}