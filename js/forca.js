
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
	palavra001 = {
		nome: "HIDDEN",
		categoria:"TIPOS DE INPUT"
	},

	palavra002 = {
		nome: "IMAGE",
		categoria:"TIPOS DE INPUT"
	},

	palavra003 = {
		nome : "MONTH",
		categoria : "TIPOS DE INPUT"
	},

	palavra004 = {
		nome : "NUMBER",
		categoria : "TIPOS DE INPUT"
	},

	palavra005 = {
		nome : "CHECKBOX",
		categoria : "TIPOS DE INPUT"
	},

	palavra006 = {
		nome : "BUTTON",
		categoria : "TIPOS DE INPUT"
	},

	palavra007 = {
		nome : "EMAIL",
		categoria : "TIPOS DE INPUT"
	},

	palavra008 = {
		nome : "PASSWORD",
		categoria : "TIPOS DE INPUT"
	},

	palavra009 = {
		nome : "SUBMIT",
		categoria : "TIPOS DE INPUT"
	},

	palavra010 = {
		nome : "URL",
		categoria : "TIPOS DE INPUT"
	},

	palavra011 = {
		nome : "MACACO",
		categoria : "ANIMAIS"
	},

	palavra012 = {
		nome : "TIGRE",
		categoria : "ANIMAIS"
	},

	palavra013 = {
		nome : "ARANHA",
		categoria : "ANIMAIS"
	},

	palavra014 = {
		nome : "MORCEGO",
		categoria : "ANIMAIS"
	},

	palavra015 = {
		nome : "LEOPARDO",
		categoria : "ANIMAIS"
	},

	palavra016 = {
		nome : "CACHORRO",
		categoria : "ANIMAIS"
	},

	palavra017 = {
		nome : "GATO",
		categoria : "ANIMAIS"
	},

	palavra018 = {
		nome : "PATO",
		categoria : "ANIMAIS"
	},

	palavra019 = {
		nome : "URSO",
		categoria : "ANIMAIS"
	},

	palavra020 = {
		nome : "LAGARTIXA",
		categoria : "ANIMAIS"
	},

	palavra021 = {
		nome : "DOCTYPE",
		categoria : "TAGS HTML"
	},

	palavra022 = {
		nome : "HEAD",
		categoria : "TAGS HTML"
	},

	palavra023 = {
		nome : "TITLE",
		categoria : "TAGS HTML"
	},

	palavra024 = {
		nome : "BODY",
		categoria : "TAGS HTML"
	},

	palavra025 = {
		nome : "FOOTER",
		categoria : "TAGS HTML"
	},

	palavra026 = {
		nome : "SECTION",
		categoria : "TAGS HTML"
	},

	palavra027 = {
		nome : "HEADER",
		categoria : "TAGS HTML"
	},

	palavra028 = {
		nome : "SCRIPT",
		categoria : "TAGS HTML"
	},

	palavra029 = {
		nome : "BUTTON",
		categoria : "TAGS HTML"
	},

	palavra030 = {
		nome : "ORELHA",
		categoria : "CORPO"
	},

	palavra031 = {
		nome : "OLHO",
		categoria : "CORPO"
	},

	palavra032 = {
		nome : "DEDO",
		categoria : "CORPO"
	},

	palavra033 = {
		nome : "PERNA",
		categoria : "CORPO"
	},

	palavra034 = {
		nome : "CABELO",
		categoria : "CORPO"
	},

	palavra035 = {
		nome :"OSSO",
		categoria : "CORPO"
	},

	palavra036 = {
		nome : "DENTE",
		categoria : "CORPO"
	},

	palavra037 = {
		nome : "BOCA",
		categoria : "CORPO"
	},

	palavra038 = {
		nome : "UNHA",
		categoria : "CORPO"
	},

	palavra039 = {
		nome : "PELE",
		categoria : "CORPO"
	},

	palavra040 = {
		nome : "GENGIVA",
		categoria : "CORPO"
	},

	palavra041 = {
		nome : "TERRA",
		categoria : "SISTEMA SOLAR"
	},

	palavra042 = {
		nome : "MARTE",
		categoria : "SISTEMA SOLAR"
	},

	palavra043 = {
		nome : "VENUS",
		categoria : "SISTEMA SOLAR"
	},

	palavra044 = {
		nome : "MERCURIO",
		categoria : "SISTEMA SOLAR"
	},

	palavra045 = {
		nome : "SATURNO",
		categoria : "SISTEMA SOLAR"
	},

	palavra046 = {
		nome : "JUPITER",
		categoria : "SISTEMA SOLAR"
	},

	palavra047 = {
		nome : "URANO",
		categoria : "SISTEMA SOLAR"
	},

	palavra048 = {
		nome : "NETUNO",
		categoria : "SISTEMA SOLAR"
	},

	palavra049 = {
		nome : "LUA",
		categoria : "SISTEMA SOLAR"
	},

	palavra050 = {
		nome : "SOL",
		categoria : "SISTEMA SOLAR"
	},
];

criarPalavraSecreta();
function criarPalavraSecreta() {
	const indexPalavra = parseInt(Math.random() * palavras.length)

	palavraSecretaSorteada = palavras[indexPalavra].nome;
	palavraSecretaCategoria = palavras[indexPalavra].categoria;
	console.log(palavraSecretaSorteada)
	console.log(palavraSecretaCategoria)
}


montarPalavraNaTela();
function montarPalavraNaTela() {
	const categoria = document.getElementById("categoria");
	categoria.innerHTML = palavraSecretaCategoria;

	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

	console.log(montarPalavraNaTela);

	for(i = 0; i < palavraSecretaSorteada.length; i++) {
		if(listaDinamica[i] == undefined){
			listaDinamica[i] = "&nbsp;"
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}
		else{
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
		}
	}

}

function verificaLetraEscolhida(letra) {
	document.getElementById("tecla-" + letra).disabled = true;

	if(tentativas > 0){
		MudarStyleLetra("tecla-" + letra);
		comparaListas(letra);
		montarPalavraNaTela();
	}
	
}

function MudarStyleLetra(tecla) {
	document.getElementById(tecla).style.background = "#b3e3a9";
	document.getElementById(tecla).style.color = "#284123";
}

function comparaListas(letra) {
	const posicao = palavraSecretaSorteada.indexOf(letra)
	if(posicao < 0) {
		tentativas--
		carregaImagemForca();

		if(tentativas ==0){
			abreModal("VOCÊ PERDEU....", "A resposta era " + palavraSecretaSorteada);
		}
		
		//verificar se ainda tem tentativas //msg na tela
	}
	else{
		for(i = 0; i < palavraSecretaSorteada.length; i++){
			if(palavraSecretaSorteada[i] == letra){
				listaDinamica[i] = letra;
			}
		}
	}
	let vitoria = true;
	for(i = 0; i < palavraSecretaSorteada.length; i++){
		if(palavraSecretaSorteada[i] != listaDinamica[i]){
			vitoria = false;
		}
	}
	if(vitoria == true){
		abreModal("MUITO BEM!!!", "VOCÊ ACERTOU");
		//mensagem na tela
		tentativas = 0;
	}
}

function carregaImagemForca() {
	switch(tentativas){
		case 5:
			document.getElementById("imagem").style.background = "url('img/forca_cbc.png";
			break;
		case 4:
			document.getElementById("imagem").style.background = "url('img/forca_crp.png";
			break;
		case 3:
			document.getElementById("imagem").style.background = "url('img/forca_bc1.png";
			break;
		case 2:
			document.getElementById("imagem").style.background = "url('img/forca_bc2.png";
			break;
		case 1:
			document.getElementById("imagem").style.background = "url('img/forca_p1.png";
			break;
		case 0:
			document.getElementById("imagem").style.background = "url('img/forca_p2.png";
			break;
		default:document.getElementById("imagem").style.background = "url('img/forca01x.png";
			break;
	}
}

function abreModal(titulo, mensagem){
	let modalTitulo = document.getElementById("exampleModalLabel");
	modalTitulo.innerText = titulo;

	let modalBody = document.getElementById("modalBody");
	modalBody.innerHTML = mensagem;

	$("#myModal").modal({
		show: true
	});
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
	location.reload();
});

function novoJogo(){
	location.reload();
};

