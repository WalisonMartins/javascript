//É um novo recurso que foi introduzido no ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}
//Significa = tire o atributo nome e idade do objeto pessoa.
const { nome, idade } = pessoa
console.log(nome, idade)

//Posso dar outros nomes para a variável destructuring. EX.:
const { nome: n, idade: i } = pessoa
console.log(n, i)

//Se o atributo não existir no objeto será retornado undefined e também podemos colocar um atributo

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)