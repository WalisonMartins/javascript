//Call and apply são duas formas de se executar uma função.
//A diferença entre o call e o apply é a forma de como passa os parâmetros na hora de invocar a função


function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

console.log(produto.getPreco())

const carro = {
  preco: 49990,
  desc: 0.20
}
//usando o call:
console.log(getPreco.call(carro))
//Usando o apply:
console.log(getPreco.apply(carro))

//Diferença entre o call e o apply - O carro nesse caso significa o contexto para os parâmetros após
console.log(getPreco.call(carro, 0.17, '$'))
//A diferença é como os parâmetros são passados, no caso em uma array no apply.
console.log(getPreco.apply(carro, [0.17, '$']))