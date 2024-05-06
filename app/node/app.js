import express from "express";
import cors from 'cors'

import db from './database/db.js'

import blogsRoutes from './routes/routes.js'

const app  = express()

app.use(cors())

app.use(express.json())

app.use('/noteAcademy', blogsRoutes)

try {
    await db.authenticate()
    console.log('Database connected')
} catch (error) {
    console.error('Error connecting to database: ', error)
    
}


app.get('/', (req, res)=>{
    res.send('hola mundo')
})

app.listen(8000, ()=>{
    console.log("Servidor corriendo en el puerto 8000")

})