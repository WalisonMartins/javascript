function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando Promise...')
      resolve()
    }, tempo)
  })
}

//A ideia do assync await é ter um código que parece síncrono, embora ele seja assíncrono. Ao invés de chamar a função 'then', ele fica parado esperando a finalização da execução para ir para próxima linha.