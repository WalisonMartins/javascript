function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout( () => resolve(), tempo)
  })
}

//A ideia do assync await é ter um código que parece síncrono, embora ele seja assíncrono. Ao invés de chamar a função 'then', ele fica parado esperando a finalização da execução para ir para próxima linha.

// esperarPor(2000)
//   .then(() => console.log('Executando promise...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise...'))

// Agora temos o seguinte código usando o async await e tendo o mesmo resultado acima.

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function executar() {

  let valor = await retornarValor()

  //Colocando o await o código vai executar de forma síncrona.
  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)

  await esperarPor(1500)
  console.log('Async/Await ${valor + 1}...')

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)

  return valor + 3
}

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()


function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max]
  return new Promise((resolve, reject) => {
    setTimeout(function (){
    const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      if (numerosProibidos.includes(aleatorio)) {
        reject('Número repetido!')
      } else {
    resolve(aleatorio)
      }
    })
    
  })
}

gerarNumerosEntre(1, 5, [1, 2 ,4])