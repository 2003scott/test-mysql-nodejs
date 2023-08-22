import {pool} from "../db.js"

export const getCategorias = async (req,res) => {
    try{
        const [rows] = await pool.query('select * from categoria')
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message : 'Algo anda mal'
        })
    }
}

export const getCategoriasid = async (req,res) => {
    try{
        const [rows] = await pool.query('select * from categoria where codcat= ?',[req.params.id])
        if(rows.length <=0) return res.status(404).json({
            message : "Categorias not found"
        })
        res.json(rows[0])   
    } catch(error){
        return res.status(500).json({
            message : "Algo no va bien"
        })
    }
}

export const createCategorias = async (req,res) => {
    try {
        const {nomcat , estacat } = req.body
        const [rows] = await pool.query('insert into categoria(nomcat,estacat) values (?,?)',[nomcat,estacat])
        res.send({
            codcat : rows.insertId,
            nomcat,
            estacat,
        })
    } catch (error) {
        return res.status(500).json({
            message : 'Algo salio mal'
        })
    }
}