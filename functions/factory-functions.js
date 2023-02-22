/*É uma função que retorna um novo objeto, ela evita de ter que ficar criando um objeto sempre, funciona como uma forma. */


//Factory simples com valores fixos

function criarPessoa() {
	return {
		nome: 'Ana',
		sobrenome: 'Silva'
	}
}

console.log(criarPessoa())

//Função Factory com valores mutáveis:

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1 //valor fixo
  }
}

console.log(criarProduto('Notebook', 2199, 99))
console.log(criarProduto(Ipad, 2300))