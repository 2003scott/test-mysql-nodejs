import { pool } from "../db.js";

export const getProductos = async(req,res) =>{
    try {
        const [rows] = await pool.query('select * from producto')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message : "Algo salio en mal en la peticion de productos"
        })
    }
}