window.addEventListener("load", cargarPagina);

function cargarPagina(){
	var foto = document.getElementById("perfil").src;
	localStorage.setItem("imagen", foto);
	var textArea =  document.getElementById("textarea");
	var boton = document.getElementById("btn");
	boton.addEventListener("click", crearMensaje);
}

function crearMensaje(e){
	e.preventDefault();
	var contenedor = document.getElementById("mensajes");
	var texto = this.previousElementSibling.previousElementSibling;
	console.log(texto);
	var cajaMensaje = document.createElement("div");
	cajaMensaje.classList.add("p-3");

	var rowUno = document.createElement("div");
	rowUno.className = "row";
	var colUno = document.createElement("div");
	var colDos = document.createElement("div");
	colUno.className = "col s2";
	colDos.className = "col s10";
	var fotoPerfil = document.createElement("img");
	var src = localStorage.getItem("imagen");
	fotoPerfil.setAttribute("src", src);
	fotoPerfil.classList.add("circle", "responsive-img");
	colUno.appendChild(fotoPerfil);
	rowUno.appendChild(colUno);
	var mensaje = document.createElement("div");
	var fotoNombre =document.createElement("div");

	mensaje.textContent = texto.value;

	cajaMensaje.appendChild(rowUno);
	cajaMensaje.appendChild(mensaje);
	contenedor.appendChild(cajaMensaje);

	texto.value="";
}