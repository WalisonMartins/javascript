function tratarErroELancar(erro) {
 // throw new Error('...') //Posso escolher enviar qualquer mensagem.
  throw 10 //Posso lançar um número
  throw true //Posso lançar um boolean
  throw 'mensagem' //Posso lanççar uma string
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date  //Posso lançar um objeto...
  }
}

function imprimirNomeGritado(obj) {
  //o comando abaixo serve para prevenir erros
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) { //caso dê alguma exceção dentro do try, o catch poderá ser usado para tratar o erro
    tratarErroELancar(e)
  } finally {
    console.log('final') //O bloco 'finally  é chamado em todas as situações, mesmo que não tenha erro. 
  }
  
}
//Não vai encontrar, pois estou usando o nome e chamando 'name'!
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)