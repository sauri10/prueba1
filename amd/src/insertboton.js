define(['jquery'], function($) {
// JavaScript Document
/*Creamos un elemento boton*/
var nodo = document.createElement("BUTTON")
nodo.setAttribute("id", "aumentar");
nodo.setAttribute("onclick", "setFont()");
var t = document.createTextNode("Aumentar");
nodo.appendChild(t);
var aumentar = document.getElementById("frontblockregion");
aumentar.insertBefore(nodo, aumentar.childNodes[0]);

});
