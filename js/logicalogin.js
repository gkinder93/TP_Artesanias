var ls = localStorage;

const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

const formulario = document.getElementById('formulario');
var cantIntentos=0;
//obtenemos en inputs un arreglo con todos los inputs de la pag
const inputs = document.querySelectorAll('#formulario input');


const validarFormulario = (e) => {
    switch (e.target.name){
		case "usuario":
			if(expresiones.usuario.test(e.target.value)){	//Validamos la expresion regular usuario. e.target.value nos da el valor que tiene el input que escribimos
				document.getElementById('grupo_usuario').classList.remove('formulario_grupo-incorrecto'); //borramos la clase creada (para el css) en la que se pone el recuadro rojo
				document.getElementById('grupo_usuario').classList.add('formulario_grupo-correcto');//creamos una clase (para el css) para que se ponga el recuadro verde
				document.querySelector('#grupo_usuario i').classList.add('fa-check-circle');//creamos una clase en el css para que se pinte de verde el tilde de que esta bien
				document.querySelector('#grupo_usuario i').classList.remove('fa-times-circle');//borramos la clase del css qdocumenue hacia que se pinte el tilde de rojo

				document.querySelector('#grupo_usuario .formulario_input-error').classList.remove('formulario_input-error-activo');

				campos['usuario'] = true;
			}else{
				document.getElementById('grupo_usuario').classList.add('formulario_grupo-incorrecto');//agregamos una nueva clase para el html llamada formular_usuario_incorrecto, que coincide con la clase en el .css
				document.getElementById('grupo_usuario').classList.remove('formulario_grupo-correcto');
				document.querySelector('#grupo_usuario i').classList.add('fa-times-circle');
				document.querySelector('#grupo_usuario i').classList.remove('fa-check-circle');

				//agregamos una nueva clase llamada formulario_input-error-activo como nuevo nombre de clase para la class=grupo_usuario. Esta clase en el css es la que pone display:block (muestra el texto de los caracteres válidos)
				document.querySelector('#grupo_usuario .formulario_input-error').classList.add('formulario_input-error-activo');
				campos['usuario'] = false;
			}

			break;


		case 'contraseña':
			if(expresiones.contraseña.test(e.target.value)){	//Validamos la expresion regular usuario. e.target.value nos da el valor que tiene el input que escribimos
				document.getElementById('contraseña').classList.remove('formulario_grupo-incorrecto'); //borramos la clase creada (para el css) en la que se pone el recuadro rojo
				document.getElementById('contraseña').classList.add('formulario_grupo-correcto');//creamos una clase (para el css) para que se ponga el recuadro verde
				document.querySelector('#contraseña i').classList.add('fa-check-circle');//creamos una clase en el css para que se pinte de verde el tilde de que esta bien
				document.querySelector('#contraseña i').classList.remove('fa-times-circle');//borramos la clase del css qdocumenue hacia que se pinte el tilde de rojo

				document.querySelector('#contraseña .formulario_input-error').classList.remove('formulario_input-error-activo');

				campos['contraseña'] = true;
			}else{
				document.getElementById('contraseña').classList.add('formulario_grupo-incorrecto');//agregamos una nueva clase para el html llamada formular_usuario_incorrecto, que coincide con la clase en el .css
				document.getElementById('contraseña').classList.remove('formulario_grupo-correcto');
				document.querySelector('#contraseña i').classList.add('fa-times-circle');
				document.querySelector('#contraseña i').classList.remove('fa-check-circle');

				//agregamos una nueva clase llamada formulario_input-error-activo como nuevo nombre de clase para la class=grupo_usuario. Esta clase en el css es la que pone display:block (muestra el texto de los caracteres válidos)
				document.querySelector('#contraseña .formulario_input-error').classList.add('formulario_input-error-activo');

				campos['contraseña'] = false;
			}
			break;
	}
}



//por cada input ejecutamos un event listener
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); //cada vez que se levante una tecla se ejecuta el metodo validar formulario
    input.addEventListener('blur', validarFormulario);//c

});



//
const expresiones = {
	//usuario: /^[a-zA-Z0-9@.]{1,30}$/, // Letras, numeros
	usuario: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
	//usuario: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/,
	
	
	//contraseña: /^([a-z0-9]*[A-Z]+){8}$/, // 7 caracteres y una mayuscula.
	contraseña: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,8}$/,
}


const campos = {
	usuario:false,
	contraseña:false,
}

//esto escucha las teclas, sirve para actualizar al momento el action del formulario
formulario.addEventListener('keyup', (e) => {

	e.preventDefault();
	console.log("validaciones:" + campos.usuario+" - "+campos.contraseña);
	if(campos.usuario && campos.contraseña){
		changeAction("logueado.html");
		//document.getElementById("Iniciarsesion").disabled=false;


	}else{		
		changeAction("");
		
		//document.getElementById("Iniciarsesion").disabled=true;
	}

});







function changeAction(val){
	//$("#formulario").attr("action",val);
	document.forms['formulario'].action=val;
 }



 //esto escucha las pulsaciones al boton, sirve para mostrar mensaje de error
formulario.addEventListener('submit', (e) => {
	e.preventDefault();


	if(cantIntentos>=4){
		console.log("Se le ha bloqueado la cuenta");
		document.getElementById("Iniciarsesion").disabled=true;
		document.getElementById('formulario_mensaje-bloqueo').classList.add('formulario_mensaje-bloqueo-activo');
	}


	if( !(campos.usuario) || !(campos.contraseña)){
		changeAction("");
		console.log("Deberia aparecer el mensaje");


		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
		setTimeout( () => {//despues de 5seg se borra el mensaje de que esta mal
			document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
		}, 5000);

		//sumamos un intento fallido
		if(inputs[0].value!=""){
			cantIntentos++;
			console.log(cantIntentos);
		}
		
	}else{
		guardo_datos();
		changeAction("logueado.html");
		enviar_formulario();
	}
});

function enviar_formulario(){
	document.forms['formulario'].submit()
 }
 
 function guardo_datos(){

	usuario.addEventListener("focusout", function() {
		ls.setItem("usuario", usuario.value);
	})

	contraseña.addEventListener("focusout", function() {
		ls.setItem("contraseña", contraseña.value);
	})
 }
 
 
//function saludar() {
   // var usuario = $("#usuario").val();
    //ls.setItem('usuario', usuario);
//}