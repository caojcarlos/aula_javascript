/*var nome = "Jose Carlos Nunes";
var idade = 44;
var frase = "Japao é melhor time do mundo";
//alert("Bem Vindo, "+ nome + " tem "+idade+" anos");
//coemntario de uma linha

coemntario de mais de uma
llinha

// declarando variaveis numericas,
var num = 10;
var num2 = 29;

//alert("soma: " + (num + num2) + "\nsubtracao: " + (num2 - num) + "\ndivisao: " + (num2 / num) + "\nmultiplicacao: " + (num * num2));
console.log ("soma: " + (num + num2) + "\nsubtracao: " + (num2 - num) + "\ndivisao: " + (num2 / num) + "\nmultiplicacao: " + (num * num2));

console.log(frase);
//troca a palavra por outra
console.log(frase.replace("Japao", "Brasil"));

//toUpperCase(maiusculas) e tolowerCase(minustuclas
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//Criação de lista e publicaocao pelo console 
var lista = ["Maça", "Pera", "Laranja"];

console.log(lista);
// mostra na lista somente um item especifico
console.log(lista[1]);

//para adicionar um item a lista
lista.push("Uva");
console.log(lista);

//para remever o ultimo item a lista
lista.pop();
console.log(lista);

//ver o tamanho da lista
console.log(lista.length);


//ver a lista ao contrario 
console.log(lista.reverse());

//transforma os itens da lsita em string
console.log(lista.toString());

//transforma os itens da lsita em string mostrando o primeiro elemento da lista e a primeira string

console.log(lista[0]);
console.log(lista.toString()[0]);

// deixa a lista como string e adiciona um separado conforme seu desejo
console.log(lista.join(" - "));
console.log(lista.join(";"));

// criação de um dicionaod, como utilizamos no json
var fruta = {nome:"maça", cor:"vermelho"};
console.log(fruta);

//exibe o teim do dicionario
console.log(fruta.nome);

// criação de um dicionario com mais itens e converte em lista 
var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"laranja", cor:"laranja"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
//exisme somente um item do dicionando dentro da lista
console.log(frutas[1].nome);
*/


//criando if para validação
var idade = 18;
/*
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de idade");

}
*/
// utilizando o prompt para receber a informação pelo usuario

//var idade = prompt("Qaula a sua Idade? ");
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de idade");

}

//laço de repetição while
var count = 0;
while( count <= 5){
    console.log(count)
    count=count + 1 ;
}

//laco de repeticao for
var cotando;
for(cotando = 1; cotando <= 5 ;cotando++){
    console.log(cotando)
}

//trabalando com data
//declarando uma variavel contendo data

var d = new Date();
console.log(d);
//mostra o dia da semana
console.log(d.getDay());
//dia do mes
console.log(d.getUTCDate());
//mostra mes
console.log(d.getMonth()+1);
//mostra ano
console.log(d.getFullYear());
//mostra hora
console.log(d.getHours());
//mostra minutos
console.log(d.getMinutes());



