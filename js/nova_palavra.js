let palavras = [
	palavra001 = {
		nome: "IRLANDA",
		categoria:"LUGARES"
	},
]



// BLOQUEIA NÚMEROS NO INPUT


var inputNome = document.querySelector("#nome");
var inputCategoria = document.querySelector("#categoria");
nome.addEventListener("keypress", bloqueiaNumeros, bloqueiaCaracteres);
categoria.addEventListener("keypress", bloqueiaNumeros, bloqueiaCaracteres);

	function bloqueiaNumeros(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
    console.log(keyCode);
  }
}

// BLOQUEIA CARACTERES ESPECIAIS NO INPUT


function bloqueiaCaracteres(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
}
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[a-zA-Z0-9]';
    if (char.match(pattern)) {
      return true;
  }
}

//FUNÇÃO ADICIONAR NOVA PALAVRA
const botaoAdicionar = document.querySelector("#adicionar-palavra");
botaoAdicionar.addEventListener("click",function(event){
	event.preventDefault();



var form = document.querySelector("#form-adiciona");
var nome = form.nome.value;
var categoria = form.categoria.value;
var erro = document.querySelector("#mensagens-erro");
var sucesso = document.querySelector("#mensagem-sucesso");

if(!validaPalavra(novaPalavra)){
	erro.innerHTML = "O nome e/ou categoria não podem estar em branco!!"
	return;
}else{
	erro.innerHTML="";
}


var novaPalavra = {}
novaPalavra.nome = document.getElementById("nome").value.toUpperCase();
novaPalavra.categoria = document.getElementById("categoria").value.toUpperCase();
palavras.push(novaPalavra);

if(!localStorage.getItem("novaPalavra")){
    localStorage.setItem('palavras', JSON.stringify(palavras));
}

function adicionar(novaPalavra){
  let arr;

  if(localStorage.getItem('novaPalavra')){
    arr = JSON.parse(localStorage.getItem("palavras"))
  }
  arr.push(palavras);

  localStorage.setItem('palavras', JSON.stringify(arr));
}

let bancoDePalavras = JSON.parse(localStorage.getItem("palavras"))

console.log(bancoDePalavras);

/*LOCAL STORAGE
let palavraString = JSON.stringify(novaPalavra);

localStorage.setItem("novaPalavra", palavraString);
let palavraObjeto = JSON.parse(localStorage.getItem("novaPalavra"));


*/

function validaPalavra(palavra){
	
	if(nome.length == 0 || categoria.length == 0){
		return false;
	}else{
		return true;

	}

}

console.log(novaPalavra);



form.reset();
sucesso.innerHTML = "Palavra adicionada com sucesso!!!";
});








