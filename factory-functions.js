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

function criarProduto(){