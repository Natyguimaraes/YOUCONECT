import mysql from 'mysql';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456789',
    database: process.env.DB_NAME || 'youconect_project'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao realizar conexão com o banco de dados:', err);
        throw err;
    }

    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

export default connection;
