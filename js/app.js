window.addEventListener("load", cargarPagina);
	var foto = document.getElementById("perfil").src;
	/*localStorage.setItem("imagen", foto);*/
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var f = new Date();
	var fecha = (f.getDate() + " de " + meses[f.getMonth()]);
	var hora = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
	var textArea =  document.getElementById("textarea");
	var boton = document.getElementById("btn");

function cargarPagina(){
	boton.disabled = true;
	boton.addEventListener("click", crearMensaje);
	textArea.addEventListener("keyup", validarMensaje);
}
function crearMensaje(e){
	e.preventDefault();
	if(existeContenido(textArea.value)){
		var contenedor = document.getElementById("mensajes");

		var cajaMensaje = document.createElement("div");
		cajaMensaje.classList.add("row", "card", "p-3");
		var ladoDerecho = document.createElement("div");
		ladoDerecho.className ="col s10";
		var ladoIzquierdo = document.createElement("div");
		ladoIzquierdo.className="col s2";

		var fotoPerfil = document.createElement("img");
		/*var src = localStorage.getItem("imagen");*/
		fotoPerfil.setAttribute("src", foto);
		fotoPerfil.classList.add("circle", "responsive-img");
		ladoIzquierdo.appendChild(fotoPerfil);

		var publicacion = document.createElement("div");
		publicacion.className="publicacion";
		publicacion.textContent = textArea.value;
		ladoDerecho.appendChild(publicacion);

		var reloj =document.createElement("div");
		reloj.className="indigo-text darken-1";
		reloj.textContent="Publicado el " + fecha + " a las " + hora;
		ladoDerecho.appendChild(reloj);

		cajaMensaje.appendChild(ladoIzquierdo);
		cajaMensaje.appendChild(ladoDerecho);
		contenedor.appendChild(cajaMensaje);

		textArea.value="";
	}
	
}
function validarMensaje() {
	var mensaje = textArea.value.trim();
	if (mensaje.length == 0) {
		boton.disabled = true;
	} else {boton.disabled = false;}
}

function existeContenido(mensaje) {
	mensaje = mensaje.trim();
	if (mensaje.length == 0) {return false;} 
	else {return true;}
}