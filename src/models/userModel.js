import connection from '../database/db.js';

export function create(nomeCompleto, email, telefone, data, genero, curso, senha, callback) {
    const query = 'INSERT INTO usuarios (nomeCompleto, email, telefone, data, genero, curso, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [nomeCompleto, email, telefone, data, genero, curso, senha], callback);
}

export function read(id = null, callback) {
    let query = 'SELECT * FROM usuarios';
    if (id) {
        query += ' WHERE id = ?';
        connection.query(query, [id], callback);
    } else {
        connection.query(query, callback);
    }
}

export function update(id, novosDados, callback) {
    const { nomeCompleto, email, telefone, data, genero, curso, senha } = novosDados;
    const query = 'UPDATE usuarios SET nomeCompleto = ?, email = ?, telefone = ?, data = ?, genero = ?, curso = ?, senha = ? WHERE id = ?';
    connection.query(query, [nomeCompleto, email, telefone, data, genero, curso, senha, id], callback);
}

export function deletePes(id, callback) {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    connection.query(query, [id], callback);
}

export function login(email, senha, callback) {
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    connection.query(query, [email, senha], callback);
}
