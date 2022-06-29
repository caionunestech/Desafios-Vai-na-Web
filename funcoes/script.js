//Crie uma função que exiba uma mensagem no console
function text(menssagem){
  console.log(menssagem)
}

text('Isso é uma mensagem')
//Crie uma função que receba o seu nome como parâmetro e exiba no console
function nomeCompleto(primeiroNome,segundoNome) {
  console.log(`${primeiroNome} ${segundoNome}`)
}

nomeCompleto('Caio','Nunes')

 //Crie uma função que receba NOME, IDADE e ESTILO MUSICAL (parâmetros) e exiba no console
function apresentacao(nome, idade, estiloMusical) {
  console.log(`Meu nome é ${nome} tenho ${idade} anos e sou apaixonado(a) por ${estiloMusical} `)
}

apresentacao('Caio', 24, 'Pop')

//Crie uma função que receba um FILME e uma MÚSICA e exiba no console
function oscar(filme, musica){
  console.log(`Meu filme favorito é '${filme}' e minha música favorita é '${musica}'`)
}

oscar('Judas e o Messias negro', 'Fight for You')

//Crie uma função que retorne o triplo do número recebido no parâmetro da função
function soma(a,b){
  let multiplicacao = (a+b)
  console.log(multiplicacao * 3)
}

soma(2,3)