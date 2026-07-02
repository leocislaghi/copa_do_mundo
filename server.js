const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const { DatabaseSync } = require('node:sqlite');

//importação de modulos nativos do JS

const porta = 3000;

const db = new DatabaseSync(path.join(__dirname, 'banco.db'))
db.exec(`CREATE TABLE IF NOT EXISTS usuarios{
     id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL, 
      email TEXT NOT NULL, 
      senha TEXT NOT NULL}`);

const servidor = http.createServer((req, res) => {

    const paginaInicial = req.url = '/' ? './index.html' : req.url;

    if (req.url === '/api/usuarios' && req.method === 'GET') {
        const usuario = db.prepare('SELECT * FROM usuarios').all();
        return;
    }

    if (req.url === '/api/usuarios' && req.method === 'POST') {
        let corpo = " ";
        for await (const pedaco of req) corpo += pedaco;
        const dados = JSON.parse(corpo);
        db.prepare('INSERT INTO usuarios (nome, email, senha) VALUES(?, ?, ?)').run(dados.nome, dados.email, dados.senha);
        res.end('ok');
        return;
    }

    if (paginaInicial.endsWith('./CSS/*.css')) {
        res.setHeader('Content-Type', 'text/css');
    }

    fs.readFile(path.join(__dirname, paginaInicial), (erro, conteudo) => {
        res.end(erro ? 'Arquivo não encontrado' : conteudo);
    });
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
