// JavaScript Document

/*Creamos un elemento boton*/
var nodo = document.createElement("BUTTON")
nodo.setAttribute("id", "aumentar");
nodo.setAttribute("onclick", "setFont()");
var t = document.createTextNode("Aumentar");
nodo.appendChild(t);
var aumentar = document.getElementById("todo");
aumentar.insertBefore(nodo, aumentar.childNodes[0]);
/*Método que incrementa el tamaño de la fuente*/
function setFont() {
   var aumentar = document.getElementById("todo");
   var style = window.getComputedStyle(aumentar, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style);
   fontSize = fontSize+4;
   var cadena = fontSize.toString() + "px";
   aumentar.style.fontSize = cadena; 
}

