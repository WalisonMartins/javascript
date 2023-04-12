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

//Para gerar 10 números de forma aleatória de "uma vez só"