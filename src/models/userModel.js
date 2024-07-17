import connection from '../database/db.js';

export function read(callback){
   connection.query('SELECT * from usuario', (err, result) => {
       if (err) {
           console.error('Erro ao ler dados do banco de dados:', err);
           callback(err, null);
           return;
       }
       console.log('Dados lidos do banco de dados:', result);
       callback(null, result);
   });
}

export function create(nomeCompleto, email, telefone, data, genero, curso, senha, callback){
   if (typeof callback !== 'function') {
       console.error('O argumento de callback não é uma função.');
       return;
   }
   connection.query('INSERT INTO usuario (nome_usuario, email_usuario, telefone_usuario, dataNasc_usuario, genero_usuario, curso_usuario, senha_usuario) VALUES (?, ?, ?, ?, ?, ?, ?)', [nomeCompleto, email, telefone, data, genero, curso, senha], callback);
}


export function update(id, novoDados, callback) {
   connection.query('UPDATE usuario SET ? WHERE id = ?', [novoDados, id], callback);

}

export function deletePes(id, callback){

   connection.query('DELETE from youconect_project.usuario where id = ?', [id], callback);

}