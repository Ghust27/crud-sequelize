const express = require('express')
const sequelize = require('./src/config/database')
const userRoutes = require('./src/routes/users')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/user',userRoutes)

sequelize.sync()
    .then(()=>{
        console.log("Banco de dados sincronizado.")
        app.listen(port,()=>{
            console.log(`Server iniciado com sucesso na porta ${port}`)
        })
    })
    .catch((err)=>{
        console.error("Erro ao sincronizar com o banco de dados.",err)
        process.exit(1)
    })
