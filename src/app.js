import express from "express";
import morgan from "morgan";
import categoriaRoutes from './routes/categoria.routes.js'


const app = express()

app.use(express.json())
app.use(morgan('dev'))

//RUTAS
app.use('/api',categoriaRoutes)

app.use((req,res,next) =>{
    res.status(404).json({
        message : "Ruta no existente"
    })
})

export default app