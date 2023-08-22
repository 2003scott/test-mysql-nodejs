import { Router } from "express";
import { getCategorias,getCategoriasid,createCategorias,deleteCategorias,updateCategorias } from "../controllers/categoria.controller.js";

const router = Router()

router.get('/categorias',getCategorias)
router.get('/categorias/:id', getCategoriasid)
router.post('/categorias', createCategorias)
router.patch('/categorias/:id', updateCategorias)
router.delete('/categorias/:id', deleteCategorias)

export default router


