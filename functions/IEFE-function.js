//Try always to avoid the Global escope. A way to avoid is creacting auto-invoked functions.
//IIFE: Immediately Invoked Function Expression

(function () {
  console.log('Será executado na hora!')
  console.log('Estou fugindo do escopo mais abrangente') /*Qualquer coisa que criar aqui, irá está dentro do contexto da função*/
})()