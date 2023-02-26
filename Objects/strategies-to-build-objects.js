// Building objects in a literal way - literal notation:
const obj1 = {}
console.log(obj1)

//We can build using Object in JS - A constructor function
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Creating my own constructors functions:
function Produto(nome, preco, desc) { //preco and desk will be local, not available outside of the object
  this.nome = nome //nome will be available outside of this object. When I put 'this' keyword it changes to make the atribut public.
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.89, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Creating objects using a Facory function

function criarFuncionario(nome, salarioBase, faltas) {
  return { //criando um objeto literal
    nome, 
    salarioBase,
    faltas,
    getSalario() { //função que calcula o salário baseado nas faltas
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
//Criando funcionário chamando a função construtora acima.
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Criar um objeto a partir do Object.create
const filha = Object.create(null)
//a partir daqui posso colocar os atributos que quiser dentro do objeto:
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') //o texto é convertido em um objeto e colocado na variável
console.log(fromJSON.info)