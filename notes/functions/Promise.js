function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(function (){
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
    }, tempo)
    
  })
}

//Para gerar 5 números de forma aleatória de "uma vez só"
function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 300),
  ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))

//Nos tópicos seguintes estão algumas explicações relacionadas a tratamento de erro no Promise

function funcionarOuNao(valor, chanceErro) {

  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject('Ocorreu um erro!')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.9)
  .then(v => console.log(`Valor: ${v}`))

  //Posso tratar o erro da seguinte forma, é importante deixar o catch no final para não impactar o encadeamento:
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim!'))