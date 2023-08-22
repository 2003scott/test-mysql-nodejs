import {pool} from "../db.js"

export const getCategorias = async (req,res) => {
    try{
        const [rows] = await pool.query('select * from categoria')
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message : 'Algo fallo al pedido de categorias'
        })
    }
}

export const getCategoriasid = async (req,res) => {
    try{
        const [rows] = await pool.query('select * from categoria where codcat= ?',[req.params.id])
        if(rows.length <=0) return res.status(404).json({
            message : "Categorias : no hay inserciones o se encuentra resultados"
        })
        res.json(rows[0])   
    } catch(error){
        return res.status(500).json({
            message : "Algo fallo al pedido de categoria id"
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
            message : 'Algo fallo al crear una categoria'
        })
    }
}

export const updateCategorias = async (req,res) => {
    const  {codcat} = req.params
    const {nomcat,estacat} = req.body
    try {
        const [result] = await pool.query('update categoria set nomcat = ifnull(?,nomcat), estacat = ifnull(?,estacat) where codcat = ?',[nomcat,estacat,codcat])
        console.log(result)
        
        if(result.affectedRows === 0) return res.status(404).json({
            message : 'Categoria a fallado al hacer update'
        })

        const [rows] = await pool.query('select * from categoria where codcat = ?',[codcat])
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message : "Categoria - a pasado un error"
        })
    }


}

export const deleteCategorias = async (req,res) => {
    try {
        const [result] = await pool.query('delete from categoria where codcat= ?', [req.params.id])
        if (result.affectedRows <=0) return res.status(404).json({
            message: 'Categorias : no hay ningun resultado'
         })
        res.sedStatus(204)
    } catch (error) {
        return res.status(500).json({
            message : 'Algo fallo al elimnar una categoria'
        })
    }

} 