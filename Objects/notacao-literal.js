//Notação literal de objetos

const a = 1
const b = 2
const c = 3

//Antes da versão atual do EcMascript tinha que declarar da seguinte forma
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

//Na ES6 também houve uma melhoria na declaração de função dentro de objetos, abaixo temos um exemplo de como era e de como é atualmente:

const obj5 = {
  //antes do ES6
  funcao1: function () {
    // ...
  }
  //como é atualmente
  funcao2() {
    // ... 
  }
}