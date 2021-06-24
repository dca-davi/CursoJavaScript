const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrona...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...

fs.readFile(caminho, 'utf-8')