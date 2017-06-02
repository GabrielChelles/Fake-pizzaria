/*var inteiro = 0; //tipo int
var double = 1.5;	//double seria o float
var boleano = true; //ou false
var nome = 'Gabriel'; //string

console.log(typeof inteiro); //typeof mostra o tipo de algum parametro, no caso variavel inteiro */

//verificar se pessoa pode votar ou nao

//--------- Calcular se pessoa pode votar, usando if e else ------------------

function calculaIdade(){

	var idade = prompt('Quantos anos voce tem :');//prompt abre a janela pro user digitar,quando voce puxa a caixa,tem q converter o valor recebido,exemplo idade para inteiro

	var idadeParse = parseInt(idade);

	if(idadeParse<16)
		alert('Não pode Votar !');
	else if((idadeParse>=16)&&(idadeParse<18))
		alert('Escolhe se vota !');
	else if((idadeParse>=18)&&(idadeParse<65))
		alert('Deve Votar !');
	else
		alert('Voce ja é velho, vota se quiser');

console.log(typeof idadeParse);
};//fechaCalculaIdade

//calculaIdade();

//-----------------------------------------------------------

//--------- Calcular se pessoa pode votar, usando switch ------------------

function calculaIdade2(){

	var idade = prompt('Quantos anos voce tem :');

	var idadeParse = parseInt(idade);

	switch(true){
		case(idadeParse <16):
			alert('nao pode votar !');
		break;

		case((idadeParse>=16)&&(idadeParse<18)):
			alert('escolhe se vota !');
		break;

		case((idadeParse>=18)&&(idadeParse<65)):
			alert('obrigado a votar !');
		break;

		case(idadeParse>=65):
			alert('muito velho,escolhe se vota !');
		break;

		default:
			alert('estado inicial');
		break;
	}


};//fechaCalculaIdade

//calculaIdade2();

//-----------------------------------------------------------


// -----------for, foreach, while, do while  ---------------------------------------------------

function whileA(){ //while é movido a condição

	var i = 0;

	while(i < 10){ // enquanto i for menor doque 10, print valor de i na tela
		console.log(i);
		i++;
	}


};
//whileA();


function forA() { // é movido a declaração

	for (var a = 0; a< 10; a++)
		console.log(a);

};
//forA();


 function foreachA(){//foreach utiliza-se de callback(trabalha de forma assincrona(faz uma entrada mas nao sabe quando essa entrada vai ser retornada))

	[0, 1, 2, 3, 4, 5, 6].forEach(function(value, key){//qndo ele itera retorne para esta função
		console.log(value,key);//value é o valor que voce ta interando, key éo indice que ele se encontra
	});//fecha foreach
}//fecha foreachA
//foreachA();

//----------------------------------------------------------------------------------------------------


// -------------- Objetos ------------------------

// var prop1 = prompt('Model ?');
// var prop2 = prompt('Name ?');
// var prop3 = prompt('Color ?');

// var obj = {};	//cria novo objeto

// obj["model"] = prop1;
// obj["name"] = prop2;
// obj["color"] = prop3;
// obj.start = function(){
// 	console.log('To pronto');
// }


// console.log(JSON.stringify(obj));
// console.log(obj);
// obj.start();

//----------------------------------------------------------
//-------- ARRAY -------------------------------------------
var ft = new Array();
var ft = [//forma mais enxuta
	'Gabriel',
	'Gustavo',
	'Lucas'
]; 		

var ft1 = [
	'Bmx'
];

var result = ft.concat(ft1);//concatena array,o valor do ft1 fica dentro do ft

ft.push('Wesley'); // add wesley no fim do array
ft.unshift('Alessandro'); //add alessandro para o inicio do arry



ft.pop(); //exclui o ultimo valor do array no caso do wesley
ft.shift();	//remove o primeiro valor do array no caso alessandro
//ft.splice();

ft.indexOf('Gustavo');//captura o Gustavo onde quer que ele esteja no array
//console.log(ft.indexOf('Gustavo'));

//console.log(result);

//---------------------------------------------------------------------------------

// function validateNumber(){

// 	var number = document.getElementById('number_val').value;

// 	if (isNaN(number) || (number >= 1 && number <= 10)) {
// 		alert('is not a number');
// 	}else
// 		alert('input is valid');

// }

// var clickMe = document.getElementById('clickMe');
// clickMe.addEventListener('click',fnClickMe);

// function fnClickMe() {
// 	alert('clciou');
// }

// var input = document.getElementsByClassName('number_val_input');

// var btn_generate = document.getElementById('botao');

// var title = document.getElementById('h1');
// title.style.color = '#fff000';

// btn_generate.addEventListener('click',generate);

// function generate(){
// 	var value = input[0].value;

// 	for(var i = 0; i < parseInt(value); i++){
// 			var inpt = document.createElement('input');
// 			inpt.id = "btn_" + i;

// 			var body = document.getElementsByTagName('body');

// 			body[0].appendChild(inpt);
// 	}
// }

// function over(obj){
// 	obj.innerHTML = "over me"; //altera o estado do html add texto
// 	obj.style.color = '#fff';
// }

// function out(obj){
// 	obj.style.background = '#fff000';
// 	obj.color = '#cd2323';
// }

