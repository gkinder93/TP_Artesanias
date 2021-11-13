const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const selects = document.querySelectorAll('#formulario select');


var usuarios = localStorage.getItem('nombre');
var telefonos = localStorage.getItem('telefono');
var emails = localStorage.getItem('email');
var contrasenias = localStorage.getItem('contrasenia');


//Datos Válidos. Deberian ser expresiones regulares pero lo hardcodeamos
const datosUsuario = {
    nombre: usuarios, //"Luis Quiñones",
    //apellido:"Quiñones",
	telefono: telefonos, //"1555622786",
    email:emails, //"jluisquino@gmail.com",
    contrasenia: contrasenias, //"Luis1234",
}


//Validar si el campo es correcto
const campoUsuario = {
    nombre:false,
    //apellido:false,
	telefono:false,
    email:false,
    contrasenia:false,  
}



/*
const validarFormulario = (e) => {
	validarCampo(expresiones.inputs[i], e.target, e.target.name);
}
*/



const expresiones = {
	//usuario: /^[a-zA-Z0-9]{1,15}$/, // Letras, numeros // Este
	//contraseña: /^([a-z0-9]*[A-Z]+){8}$/, // 7 caracteres y una mayuscula.
	//contraseña: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,8}$/, //Este
	nombre: /^[A-Za-z\s]+$/g //   /^[A-Z]+$/i, // Letras mayusculas y minusculas  /^[A-Z]+$/i

}



const validarFormulario = (e) => {
	switch (e.target.name) {

		//datosUsuario
		case "nombre":

            //expresiones.nombre=nombre del que esta en datos de cada uno; e.target=nombre del input(si es un input,date); 'nombre'=nombre que aparece en el html; 
			//campoUsuario el nombre del objeto en el que se guarda ese valor
			validarCampo(datosUsuario.nombre, e.target, 'nombre',campoUsuario);
		break;
		case "apellido":
			//validarCampo(datosUsuario.apellido, e.target, 'apellido',campoUsuario);
		break;
		case "telefono":
			validarCampo(datosUsuario.telefono, e.target, 'telefono',campoUsuario);
		break;
 
		case "email":
			validarCampo(datosUsuario.email, e.target, 'email',campoUsuario);
		break;
        case "contrasenia":
			validarCampo(datosUsuario.contrasenia, e.target, 'contrasenia',campoUsuario);
		break;
        
	}
}


const validarCampo = (expresion, input, campo,nombreCampo) => {
	//if(expresion.test(input.value)){

	console.log("tiene que valer:"+ expresion);

    if(input.value==expresion || expresion==null){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		nombreCampo[campo] = true;
	} 
    else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		nombreCampo[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});



//verifica que el campo sea todo valido
function verificarCampo(campo){
	var ret=true;
	let valoresObjeto = Object.values(campo);
	for(var i=0; i<valoresObjeto.length; i++){
		ret=ret&& valoresObjeto[i];
	}
	return ret;
}

function changeAction(val){
	//$("#formulario").attr("action",val);
	document.forms['formulario'].action=val;
 }
 function enviar_formulario(){
	document.forms['formulario'].submit()
 }

/*
formulario.addEventListener('keyup', (e) => {
	e.preventDefault();

	if(todosLosCamposSonValidos()){
        console.log("todos los campos son validos");
	}else{
	}
});
*/

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log("son todos los campos validos:"+verificarCamposSeleccionados());
	if(verificarCamposSeleccionados()){
		changeAction("cuentacreada.html");
		enviar_formulario();
	}else{
		console.log("deberia mostrarse el mensaje");
		changeAction("");
		//se muestra el mensaje de error
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
		setTimeout( () => {//despues de 5seg se borra el mensaje de que esta mal
			document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
		}, 5000);
	}
})



/* --- Para ocultar campo Descripción Extra -- */
function displayDivDemo(id, elementValue) {
      document.getElementById(id).style.display = elementValue.value == 1 ? 'block' : 'none';
}

