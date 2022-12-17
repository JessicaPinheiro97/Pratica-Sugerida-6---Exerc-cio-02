const prompt = require("prompt-sync")();

var modelo = prompt("Digite o modelo do carro: ");
var km = parseFloat(prompt("Digite o número de km percorridos: "));
var litros = parseFloat(prompt("Digite o número de litros gastos: "));

consumo = km / litros;

console.log ("O consumo do carro", modelo, "é de", consumo, "km/litro");