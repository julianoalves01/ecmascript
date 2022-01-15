"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
/* --- cirar carros --- */
var carroA = new Carro_1.Carro('dodge journey', 4);
var carroB = new Carro_1.Carro('veloster', 3);
var carroC = new Carro_1.Carro('cerato', 4);
/* --- montar a lista de carros da concessionaria ---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
console.log(concessionaria.mostrarListaDeCarros());
/**comprar carro */
var cliente = new Pessoa_1.Pessoa('joao', 'veloster');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroPreferido());
