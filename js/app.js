window.addEventListener("load", cargarPagina);

function cargarPagina(){
	var boton = document.getElementById("btn");
	boton.addEventListener("click", crearMensaje);
}

function crearMensaje(e){
	e.preventDefault();
	var contenedor = document.getElementById("mensaje");
	var textArea =  document.getElementById("textarea");
	var mensaje = document.createElement("div");
	mensaje.textContent = textArea.value;

	contenedor.appendChild(mensaje);
	textArea.value="";
}