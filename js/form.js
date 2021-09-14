var titulo = document.querySelector(".titulo")
titulo.textContent = "D&D The Book Of Adventures";

var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente")
//console.log(pacientes)


for(var i = 0; i < pacientes.length; i++) { 

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;


if (peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido");
}

if (altura <= 0 || altura >= 3.0 ){
    console.log("Altura Inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido");

}

if (alturaEhValida && pesoEhValido){

    var imc = peso / (altura * altura);
    tdImc.textContent =imc.toFixed(2);
}
}

function calculaImc (peso, altura){
    
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc;

}
