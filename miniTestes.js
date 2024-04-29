// cálculo da média
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    //soma = soma + numero;
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);
alert(`A média é igual a: ${media}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let seuNome = prompt('Insira seu nome');
alert (`Boas vindas, ${seuNome} !`);

// Idade para habilitação

let idade = prompt ('Qual a sua idade');
if(idade >= 18){
    alert ('Pode tirar a habilitação!');
} else {alert('Não pode tirar habilitação!')}

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt ('Qual o dia da semana?');
if(diaDaSemana == 'Sábado'){
    alert('Bom fim de semana!');
}else{
    if(diaDaSemana == 'Domingo'){
        alert('Bom fim de semana!');
    }
    else{
    alert('Boa semana');
    }
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroPositivoOuNegativo = prompt('Digite um número');
if(numeroPositivoOuNegativo > 0){
    alert ('Esse número é positivo')
} else {
    if(numeroPositivoOuNegativo = 0){
        alert ('Esse número é nulo')
    }else {
        alert ('Esse número é negativo');
    }
}



