import {create, read, update, deletePes} from '../models/userModel.js';

//Realizando insert (create)

export async function createUsuario(req, res){
    const { nomeCompleto, email, telefone, data, genero, curso, senha } = req.body;
    console.log('Dados recebidos do frontend:', {nomeCompleto, email, telefone, data, genero, curso, senha});

    create (nomeCompleto, email, telefone, data, genero, curso, senha, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({mensagem: 'Usuário criado com sucesso'});
    });
}

//realizando consulta

export async function getAllUsuarios(req, res) {
    read((err, usuarios) => {
        if(err){
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(usuarios);
    });
}

export async function getUsuariosF(req, res) {
    const { id } = req.params;
    
    // Chame a função read para buscar uma pessoa específica pelo ID
    read(id, (err, usuario) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(usuario);
    });
}
//realizando atualização

export async function updateUsuario(req, res){
    const { id } = req.params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if (err) {
            res.status(500).json ({ error: err.message });
            return;
        }

        // para verificar se houve alterações
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Nenhuma pessoa encontrada para atualizar.' });
            return;
        }

        // Se chegou aqui, a pessoa foi atualizada com sucesso
        res.status(200).json({ message: 'Usuário atualizada com sucesso' });
    });
}

//realizando delete (update/inativando)

export async function deleteUsuario(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend: ', {id});
    deletePes(id, (err, result) => {
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.send('Usuário excluído com sucesso');
    });
}
