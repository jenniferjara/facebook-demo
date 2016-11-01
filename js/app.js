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

	var cajaMensaje = document.createElement("div");
	cajaMensaje.classList.add("card", "horizontal");

	var cardImagen = document.createElement("div");
	var fotoPerfil = document.createElement("img");
	var src = localStorage.getItem("imagen");
	cardImagen.className ="card-image";
	fotoPerfil.setAttribute("src", src);
	cardImagen.appendChild(fotoPerfil);

	var cardTexto =document.createElement("div");
	var mensaje = document.createElement("div");
	var parrafo = document.createElement("p");
	cardTexto.className = "card-stacked";
	mensaje.className ="card-content";
	parrafo.textContent = texto.value;
	mensaje.appendChild(parrafo);
	cardTexto.appendChild(mensaje);

	cajaMensaje.appendChild(cardImagen);
	cajaMensaje.appendChild(cardTexto);
	contenedor.appendChild(cajaMensaje);

	texto.value="";
}