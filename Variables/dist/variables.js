"use strict";
let contador = 55;
let numero;
let esActivo;
let nombres;
let dato;
//Arreglo:
let arregloEdades = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Azul"] = 1] = "Azul";
    Color[Color["Verde"] = 2] = "Verde";
    Color[Color["Amarillo"] = 3] = "Amarillo";
})(Color || (Color = {}));
let colorSeleccionado = Color.Azul;
