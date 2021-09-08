/*var nome = "Julius";
var idade = 25;	
var idade2 = 10;
var frase = "EU sou um japonês";
//alert("Meu nome é: " + nome + "\nTenho " + idade + " anos de idade.");
console.log(nome);
console.log(idade + idade2);
console.log frase.replace("japonês", "brasileiro"));

var lista = ["maçã", "banana", "pêra"];
console.log(lista);

lista.push("damasco");

console.log(lista);

lista.pop();

console.log(lista);

console.log(lista.toString());

console.log(lista.join(" ! "));


var idade = prompt("Qual a sua idade?");

if(idade >= 18){
	alert("Maior de idade");
}else{
	alert("Menor de idade");
}



var count = 0;

while(count<5){
	alert(count);
	count++;
}


var count;

for(count = 0; count <5; count++){
	alert(count);
}

var data = new Date();

alert(data);



function soma(n1, n2){
	return n1 + n2;
}

alert(soma(1,4));

/////////////////////////////

var colab1 = {numero: prompt("Forneça o número do colaborador 1: "), horas: prompt("Forneça as horas trabalhadas pelo colaborador 1: "), valor:prompt("Forneça o valor da hora do colaborador 1: ")};
var colab2 = {numero: prompt("Forneça o número do colaborador 2: "), horas: prompt("Forneça as horas trabalhadas pelo colaborador 2: "), valor:prompt("Forneça o valor da hora do colaborador 2: ")};
var colab3 = {numero: prompt("Forneça o número do colaborador 3: "), horas: prompt("Forneça as horas trabalhadas pelo colaborador 3: "), valor:prompt("Forneça o valor da hora do colaborador 3: ")};

var salarioColab1 = colab1.horas * colab1.valor;
var salarioColab2 = colab2.horas * colab2.valor;
var salarioColab3 = colab3.horas * colab3.valor;

alert("NUMBER = " + colab1.numero + "\nSALARY = U$ " + salarioColab1);
alert("NUMBER = " + colab2.numero + "\nSALARY = U$ " + salarioColab2);
alert("NUMBER = " + colab3.numero + "\nSALARY = U$ " + salarioColab3);

///////////////////////////////////////////////

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

// Escreva o seu código aqui

var salarioColab = valor2 * valor3;

alert("NUMBER = " + valor1 + "\nSALARY = U$ " + salarioColab);


*/


function botao(){
	document.getElementById("clicou").innerHTML = "Obrigado por clicar";
	//alert("Obrigado por clicar");
}

function redirecionar(){
	window.open("https://github.com/rockijulius/aula_javascript");
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse por cima";
	elemento.innerHTML = "Obrigado por passar o mouse por cima";
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passou o mouse por cima";
	elemento.innerHTML = "Passou o mouse por cima";
}

function paginaCarregada(){
	alert("Página carregada com sucesso!");
}













