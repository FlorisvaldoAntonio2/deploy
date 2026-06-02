import { Router } from 'express';
import categoriaController from '../controllers/categoriaController.js';

const categoriaRoutes = Router();

categoriaRoutes.post('/criar', categoriaController.criar);
categoriaRoutes.put('/atualizar', categoriaController.atualizar);
categoriaRoutes.delete('/deletar/:id', categoriaController.deletar);
categoriaRoutes.get('/selecionar', categoriaController.selecionar);

export default categoriaRoutes;