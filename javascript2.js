
  // Verificar se o LocalStorage está em branco
  var valorLocalStorage = localStorage.getItem('meusDados');
  if (valorLocalStorage === null) {
    // Redirecionar para a nova URL
    window.location.href = '../index.html';
  };



// valor  por  extenso em reais  


String.prototype.extenso = function(c){ // Função para converter número no formato string para número por extenso.
  var ex = [
      ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
      ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
      ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
      ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
  ];
  var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
  for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
      j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
      if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
      for(a = -1, l = v.length; ++a < l; t = ""){
          if(!(i = v[a] * 1)) continue;
          i % 100 < 20 && (t += ex[0][i % 100]) ||
          i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
          s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
          ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
      }
      a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
      a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
  }
  return r.join(e);
};

// converter data em extenco 


function dataPorExtenso(data) {
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();

  var meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  var extenso = dia + " de " + meses[mes - 1] + " de " + ano;

  return extenso;
};

// Exemplo de uso:
var dataAtual = new Date();
var dataExtenso = dataPorExtenso(dataAtual);
console.log(dataExtenso); // Saída: "15 de maio de 2023"







// Obter os dados salvos do localStorage
const dadosSalvos = JSON.parse(localStorage.getItem("meusDados"));
var duasvias = "";
var checkboxDuplicar = "";

// Iterar sobre os objetos dentro do array de dados salvos e mostrar os valores
dadosSalvos.forEach(dado => {

  var valor1 = dado.valor.replace(/\D+/g, '');
  valor1 = parseFloat(valor1);
  valor1 = valor1/100;

  valorMoeda = valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  var dataString = dado.data;
  var partesData = dataString.split('/'); // Supondo que a string esteja no formato "DD/MM/AAAA"
  var dataFormatada = partesData[1] + '/' + partesData[0] + '/' + partesData[2]; // Formatação para "MM/DD/AAAA"
  
  var data = new Date(dataFormatada);
  var dataExtenso = dataPorExtenso(data);
  


  document.getElementById("valor1").innerHTML = valorMoeda + "#";
  document.getElementById("valor2").innerHTML = dado.nome +" - "+" CPF/CNPJ nº "+ dado.cpfcnpj+",";
  document.getElementById("valor4").innerHTML = dado.referent+".";
  document.getElementById("valor5").innerHTML = dado.tipopagamento;
  document.getElementById("cidade").innerHTML = dado.cidade+",";
  document.getElementById("data").innerHTML = dataExtenso;
  document.getElementById("valor6").innerHTML = dado.emissor;
  document.getElementById("valor7").innerHTML = dado.cpfcnpj2;
  document.getElementById("valor8").innerHTML = dado.telefone;

   duasvias = dado.checkverificado;
    checkboxDuplicar = duasvias;
 

 

//parei aqui 

valor1 = valor1.toString().replace(".", ",");

valor1 = valor1.toString();
var nun = valor1;
var valorextenso = nun.extenso(true);

document.getElementById("valor3").innerHTML = valorextenso;

 

});



const btnVoltar = document.getElementById("btn1");


btnVoltar.addEventListener("click", function() {
  
    window.location.href = "../index.html";
  });



  // impressão 

  function imprimir(){
    document.title = "Recibo simples | FlyyAplicativos";
   window.print();
  


  };




  var divOriginal = document.getElementById("contener1");
  var divDuplicada = document.getElementById('divDuplicada');
 

  function duplicarDiv() {
    if (checkboxDuplicar === "sim") {
      // Duplicar a div
      var divClone = divOriginal.cloneNode(true);
      divDuplicada.appendChild(divClone);
    } else {
      // Remover a div duplicada se estiver presente
      while (divDuplicada.firstChild) {
        divDuplicada.removeChild(divDuplicada.firstChild);
       
      }
    }
  }

  // Chamar a função para duplicar a div
  duplicarDiv();
  


 



  











