// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let seuNome = prompt('Insira seu nome');
alert (`Boas vindas, ${seuNome}!`);

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

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contadorUmDez = 1;
while(contadorUmDez < 10){
    contadorUmDez++;
}
console.log(contadorUmDez);

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contadorDezUm = 10;
while(contadorDezUm >= 0){
    console.log(contadorDezUm);
    contadorDezUm--
}


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contadorRegressivo = parseInt(prompt('Digite o número para a contagem regressiva'));
while (contadorRegressivo >= 0){
    console.log(contadorRegressivo);
    contadorRegressivo--
}


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroProgressivo = 0;
let numeroParaContar = parseInt(prompt('Digite o número para contagem progressiva'));
while (numeroProgressivo <= numeroParaContar){
    console.log(numeroProgressivo);
    numeroProgressivo++
}


// Idade para habilitação

let idade = prompt ('Qual a sua idade');
if(idade >= 18){
    alert ('Pode tirar a habilitação!');
} else {alert('Não pode tirar habilitação!')}

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt ('Qual o dia da semana?');
if(diaDaSemana == 'Sábado'|| diaDaSemana == 'Domingo' || diaDaSemana == 'sábado' || diaDaSemana == 'domingo'){
    alert('Bom fim de semana!');
}else{
    alert('Boa semana');
    }

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroPositivoOuNegativo = prompt('Digite um número');
if(numeroPositivoOuNegativo > 0){
    alert ('Esse número é positivo')
} else {
    if(numeroPositivoOuNegativo == 0){
        alert ('Esse número é nulo')
    }else {
        alert ('Esse número é negativo');
    }
}

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Boas vindas!');

// Crie uma variável chamada "meuNome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let meuNome = 'João';
console.log(`Olá, ${meuNome}!`);

// Crie uma variável chamada "nomeAlert" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nomeAlert = 'João';
alert(`Olá, ${nomeAlert}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta?');

console.log(linguagemFavorita);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "somaValores". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [somaValores]." no console.

let valor1 = 14;
let valor2 = 23;
let somaValores = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${somaValores}`);

// Crie uma variável chamada "valorr1" e outra chamada "valorr2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "difValores". Utilize o console.log para mostrar a mensagem "A diferença entre [valorr1] e [valorr2] é igual a [difValores]." no console.

let valorr1 = 23;
let valorr2 = 14;
let difValores = valorr1 - valorr2;
console.log(`A diferença entre ${valorr1} e ${valorr2} é igual a ${difValores}`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

suaIdade = prompt('Diga sua idade');

if(suaIdade >= 18){
    alert('Você é maior de idade');
}else{
    alert('Você é menor de idade');
}


// Use um loop while para imprimir os números de 1 a 10 no console.

let numeros1A10 = 1;

while(numeros1A10 < 11){
    console.log(numeros1A10);
    numeros1A10++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 7;
if (nota>=7){
    alert('Você tirou mais que 7, você foi aprovado(a)!');
}else{
    alert('Você tirou menos que 7, você foi reprovado(a)');
}
// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

numeroInteiro1A10 = parseInt(Math.random()*10 + 1);
console.log(numeroInteiro1A10);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

numeroInteiro1A1000 = parseInt(Math.random()*1000 + 1);
console.log(numeroInteiro1A1000);