

  // mascara moeda  real 
const input = document.getElementById("v1");
input.addEventListener("input", formatarMoeda); 

function formatarMoeda(e) {

var v = e.target.value.replace(/\D/g,"");

v = (v/100).toFixed(2) + "";

v = v.replace(".", ",");

v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");

v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

e.target.value = "R$"+v;
};


// mascara cpf e cnpj 

function formatarCPFCNPJ(input) {
    let value = input.value.replace(/\D/g, ''); // remove tudo que não é número
    let formattedValue = '';
  
    if (value.length <= 11) { // se o valor tem até 11 dígitos, é um CPF
      formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else { // senão, é um CNPJ
      formattedValue = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  
    input.value = formattedValue;
  };

  // mascara de telefone  fixo e  celular 

  const inpTelefone = document.getElementById("telefone");
inpTelefone.addEventListener("input", formatarTelefone);

function formatarTelefone() {
  let telefone = inpTelefone.value.replace(/\D/g, ""); // remove tudo que não é número
  if (telefone.length === 11) {
    // celular com 9 dígitos
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (telefone.length === 10) {
    // telefone fixo com 8 dígitos
    telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  inpTelefone.value = telefone;
};


function verificarCheck() {
  var checkbox = document.getElementById('chec');
  var valorchec = checkbox.checked ? 'sim' : 'não';

  console.log('Valor do checkbox:', valorchec);
 

};




function add(){

 

    var v1 =  document.getElementById("v1").value; 
    var v2 =  document.getElementById("v2").value;
    var v3 =  document.getElementById("cpf-cnpj-input").value;
    var v4 =  document.getElementById("v4").value;
    var v5 =  document.getElementById("v5").value;
    var v6 =  document.getElementById("data").value;
    var v7 =  document.getElementById("v7").value;
    var v8 =  document.getElementById("telefone").value;
    var v9 =  document.getElementById("cpf-cnpj-input2").value;

   
    var checkbox = document.getElementById('chec');
    var valorchec = checkbox.checked ? 'sim' : 'não';
  
    console.log('Valor do checkbox:', valorchec);
   
  
  

   

   
    const inputRadio = document.querySelector('input[name="pagamento"]:checked');
const valorSelecionado = inputRadio.value;



    const dados = [
        { valor: v1, nome: v2, cpfcnpj: v3, referent: v4, cidade: v5, data: v6, emissor: v7, telefone: v8, cpfcnpj2: v9, tipopagamento: valorSelecionado, checkverificado: valorchec }
    ];

    // salvar local storage
localStorage.setItem("meusDados", JSON.stringify(dados));




};

const btn = document.getElementById("btn1");

function validarCampos() {
  var input1 = document.getElementById("v1");
  var input2 = document.getElementById("v2");
  var input3 = document.getElementById("v4");
  var input4 = document.getElementById("v5");
  var input5 = document.getElementById("data");
  var input6 = document.getElementById("v7");


  if (input1.value === '' || input2.value === '' || input3.value === ''|| input4.value === ''|| input5.value === ''
  || input6.value === '')  {

    alert("Por favor, preencha o campo!");
    return false;
  } else {
    return true;
  }
}

btn.addEventListener("click", function() {
  if (validarCampos()) {
    add();
    window.location.href = "visualizar-recibo";
  }
});






var data = document.getElementById("data");
const dataAtual = new Date();
data.value = dataAtual.toLocaleDateString();


//  persiste os  dados  no input 

// Obter os dados salvos do localStorage
const dadosSalvos = JSON.parse(localStorage.getItem("meusDados"));


function list(){



// Iterar sobre os objetos dentro do array de dados salvos e mostrar os valores
dadosSalvos.forEach(dado => {

  document.getElementById("v1").value = dado.valor;
  document.getElementById("v2").value = dado.nome;
  document.getElementById("cpf-cnpj-input").value = dado.cpfcnpj;
  document.getElementById("v4").value = dado.referent;
  document.getElementById("v5").value = dado.cidade;
  document.getElementById("data").value = dado.data;
  document.getElementById("v7").value = dado.emissor;
  document.getElementById("telefone").value = dado.telefone;
  document.getElementById("cpf-cnpj-input2").value = dado.cpfcnpj2;



 



});
};

window.onload = function() {
  // Sua função aqui
  list();
};


  