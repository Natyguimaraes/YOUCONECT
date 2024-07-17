import express from 'express';
const app = express();
import cors from "cors";
import { getAllUsuarios, getUsuariosF, createUsuario, updateUsuario, deleteUsuario } from "../controllers/userControler.js";


app.use(express.json());
app.use(cors());

app.get('/usuarios', getAllUsuarios);
app.get('/usuarios/:id', getUsuariosF)
app.post('/usuarios', createUsuario);
app.put('/usuarios/:id', updateUsuario);
app.delete('/usuarios/:id', deleteUsuario);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});