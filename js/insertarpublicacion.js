  $(document).ready(function() {


	$('#agregar').click(function() {
	
	n =  new Date();
	//Año
	y = n.getFullYear();
	//Mes
	m = n.getMonth() + 1;
	//Día
	d = n.getDate();
	//Hora
	h= n.getHours()
	//Minutos
	min = n.getMinutes()
	//Segundos
	s = n.getSeconds()
	
	var fecha = d + "/" + m + "/" + y + " "+ h+":"+ m+":"+ s;
	
	var nombre = document.getElementById("nombre").value;
  	var descripcion = document.getElementById("descripcion").value;
	var categoria = document.getElementById("categoria").value;
    var imagen = document.getElementById("archivo").value;
	var contacto = document.getElementById("contacto").value;
    var estado = "Pendiente";
	var precio = document.getElementById("precio").value;
    
	
	
	
	if (document.getElementById("nombre").value == ""){
		alert('Debe completar el nombre!');
		document.getElementById("nombre").focus();
		return;
	}	
	if (document.getElementById("descripcion").value==""){
		alert('Debe completar la Descripcion!');
		document.getElementById("descripcion").focus();
		return;
	}
	if(document.getElementById("contacto").value = ""){
		alert('Debe completar sus datos de Contacto!');
		document.getElementById("contacto").focus();
		return;	
	}
	
	
	var i = 1; 
    var fila = '<tr id="row' + i + '"><td>'+ fecha +'</td><td>'+ nombre + '</td><td>'+ descripcion + '</td><td>'+ precio + '</td><td>'+ categoria + '</td><td>'+ imagen + '</td><td>'+ contacto +'</td><td>' + estado + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Eliminar</button></td></tr>'; 
	//var fila = '<tr id="row' + i + '"><td>'+ fecha + '</td><td>' + hora + '</td><td>'+ especialidad + '</td><td>'+ medico + '</td><td>' + nombre + '</td><td>' + descripcion + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; 
    i++;

    $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    document.getElementById("descripcion").value = "";
	document.getElementById("archivo").value = "";
	document.getElementById("contacto").value = "";
	document.getElementById("precio").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").focus();
	
    
  });

$(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
    
	if (confirm('Está seguro que desea eliminar el registro?')) {
	// Lo borra
		$('#row' + button_id + '').remove(); //borra la fila
		//limpia el para que vuelva a contar las filas de la tabla
		$("#adicionados").text("");
		var nFilas = $("#mytable tr").length;
		$("#adicionados").append(nFilas - 1);
	} else {
	// Hace nada
		console.log('No se ha borrado el registro.');
	}

  });
  

  
});

