// Idade para habilitação

let idade = prompt ('qual a sua idade');
if(idade >= 18){
    alert ('pode tirar a habilitação');
}

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

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let seuNome = prompt('Insira seu nome');
alert ('Boas vindas, ' + seuNome + '!');


