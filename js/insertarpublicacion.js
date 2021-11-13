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
		var contacto = document.getElementById("contacto").value;
		var imagen = document.getElementById("archivo").files[0].name;
		
		var path = imagen;		//"C:\\fakepath\\luis.jpg";
		var filename = path.replace(/^.*\\/, "");
		filename = 'img/' + filename;
		console.log(filename);
		
		//var publica = document.getElementById("publica").value;
		var estado = "PUBLICADO"
		
/* 		if(publica == "SI"){
			estado="PUBLICADO";
		}else{
			estado="PENDIENTE";
		} */
			
		var precio = document.getElementById("precio").value;

		
		// Valido campos
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
		if(document.getElementById("contacto").value == ""){
			alert('Debe completar sus datos de Contacto!');
			document.getElementById("contacto").focus();
			return;	
		}
		if (document.getElementById("archivo").files[0].name== ""){
			alert('Debe seleccionar un archivo de foto!');
			document.getElementById("archivo").focus();
			return;
		}
		
		
		
		var dextra = "";

		// captura el valor del radio button
		var ntipo = document.querySelector('input[name="tipos"]:checked').value;
		
		//alert('ntipo: ' + ntipo);
		
		if (ntipo == 0){
			dextra = document.getElementById("descextra").value;
		}
		
				
		
		var i = 1; 
		// Para armar la tabla según el tipo de publicación
		if (ntipo == 0){
			var fila = '<tr id="row' + i + '"><td>'+ fecha +'</td><td>'+ nombre + '</td><td>'+ descripcion + '</td><td>'+  dextra + '</td><td>'+ categoria + '</td><td>'+ '<img src="'+ filename +'" width="150" height="150">' + '</td><td>'+ contacto +'</td><td>' + estado + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Eliminar</button></td></tr>'; 
		}else{
			var fila = '<tr id="row' + i + '"><td>'+ fecha +'</td><td>'+ nombre + '</td><td>'+ descripcion + '</td><td>'+ precio + '</td><td>'+ categoria + '</td><td>'+ '<img src="'+ filename +'" width="150" height="150">' + '</td><td>'+ contacto +'</td><td>' + estado + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Eliminar</button></td></tr>'; 
		}
		
		i++;

		$('#mytable tr:first').after(fila);
		$("#adicionados").text(""); //Limpia el div adicioandos para que no se vayan acumulando
		var nFilas = $("#mytable tr").length;
		$("#adicionados").append(nFilas - 1);
		//le resto 1 para no contar la fila del header
		
		document.getElementById("descripcion").value = "";
		document.getElementById("descextra").value = "";
		document.getElementById("archivo").value = "";
		document.getElementById("contacto").value = "";
		document.getElementById("precio").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("nombre").focus();
		
		//alert("Se publico el Producto Correctamente");
	});


	$(document).on('click', '.btn_remove', function() {
	  var button_id = $(this).attr("id");
		//cuando da click obtengo el id del boton
		
		if (confirm('Está seguro que desea eliminar el registro?')) {
		// Lo borra
			$('#row' + button_id + '').remove(); //borra la fila
			//limpia el para que vuelva a contar las filas de la tabla
			$("#adicionados").text("");
			var nFilas = $("#mytable tr").length;
			$("#adicionados").append(nFilas - 1);
		} else {
		// No se borro nada
			console.log('No se ha borrado el registro.');
		}

	});
  
});

