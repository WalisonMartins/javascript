//Objeto é uma coleção de chave e valores
const produto = new Object
//Tem duas formas de adicionar:
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
//para excluir os atributos de um objeto:
delete produto.preco
delete produto['marca do produto']
console.log(produto)