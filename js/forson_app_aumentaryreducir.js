
window.onload = function() {
	// JavaScript Document

	// Crear_boton();
	// Crear_modificador_de_fuente();

	if (top.location.pathname === '/prueba1/index.html' || top.location.pathname === '/prueba1')
	{
		var pos_nodo = $("body"); //Esta variable es la única que debo especificar
	/*Creamos un elemento boton en el "body"*/
		var nodo = document.createElement("BUTTON")
		nodo.setAttribute("id", "aumentar");
		var nodo_tag_name = pos_nodo[0].nodeName.toLowerCase();
		console.log("El tagname es: "+nodo_tag_name);
		nodo.setAttribute("onclick", "setFont("+"'"+nodo_tag_name+"'"+")");
		var t = document.createTextNode("Aumentar");
		nodo.appendChild(t);
		//nodo.insertBefore(pos_nodo);
		//$( nodo ).insertAfter( nodo_tag_name );
		$( nodo ).insertBefore( pos_nodo.children().first());

		//pos_nodo.insertBefore(nodo, pos_nodo.childNodes[0]);
		/*Método que incrementa el tamaño de la fuente*/
	} else {
		console.log("Estoy en la siguientes página: "+top.location.pathname);
	}
}
function setFont(elem_name) {
	   console.log(elem_name);
	   var get_elem = $(elem_name);
	   console.log("el elemento es = "+get_elem[0].nodeName);
	   //var style = window.getComputedStyle(get_elem, null).getPropertyValue('font-size');
	   var style= get_elem.find("p").css("font-size");
	   console.log("El tamaño de la fuente es: "+style);
	   var fontSize = parseFloat(style);
	   fontSize = fontSize+4;
	   var cadena = fontSize.toString() + "px";
	   get_elem.find("p").css("font-size", cadena);
	   //get_elem.style.fontSize = cadena;
	}