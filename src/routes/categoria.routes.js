import { Router } from "express";
import { getCategorias,getCategoriasid,createCategorias } from "../controllers/categoria.controller.js";

const router = Router()

router.get('/categorias',getCategorias)
router.get('/categorias/:id', getCategoriasid)
router.post('/categorias', createCategorias)

export default router


