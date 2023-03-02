//Porque conseguimos alterar atributos de objetos declarados em constantes? Essa será a resposta

//Pessoa aponta para um endereço de memória ex. 123, lá no endereço  que tem de fato o objeto criado
//A constante aponta para o endereço, o endereço aponta para o objeto
const pessoa = { nome: 'João' }
//Quando eu mudo o atributo, ex abaixo, a constante continua apontando para o mesmo endereço
pessoa.nome = 'Pedro'

//Eu não posso atribuir novamente a constante para um novo endereço de memória, como no exemplo abaixo:
pessoa = { nome: 'Ana'}


//Congelando o objeto não consiguirei mecher nele novamente
Object.freeze(pessoa)
//Então o código abaixo não conseguirá alterar o nome, pois o objeto está congelado
pessoa.nome = 'Maria'
//O comando abaixo imprimirá Pedro
console.log(pessoa.nome)

//Caso queira declarar o objeto já constante, ou melhor, congelado, posso fazer da seguinte forma:
const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)