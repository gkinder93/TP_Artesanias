 $(document).ready(function() {
	 var estado;
	 const artesanos = [{
					"id":"1",
					"nombre":"Matias",
					"telefono":"+54111558563221",
					"correo":"maty@gmail.com",
					"tipo":"artesano",
					"descripcion":"Quiero vender mucho...",
					"confiable":"SI"
				},
				{
					"id":"2",
					"nombre":"German",
					"telefono":"+54111548583222",
					"correo":"german@gmail.com",
					"tipo":"artesano taller",
					"descripcion":"",
					"confiable":"SI"
				},
				{
					"id":"3",
					"nombre":"Felipe",
					"telefono":"+54111552263223",
					"correo":"felipe@gmail.com",
					"tipo":"artesano",
					"descripcion":"Quiero vender mucho...",
					"confiable":"SI"
				},
				{
					"id":"4",
					"nombre":"Luis",
					"telefono":"+54111558536224",
					"correo":"luis@gmail.com",
					"tipo":"artesano taller",
					"descripcion":"",
					"confiable":"SI"
				},
				{
					"id":"5",
					"nombre":"Martin",
					"telefono":"+54111555763225",
					"correo":"martin@gmail.com",
					"tipo":"artesano",
					"descripcion":"Quiero vender mucho...",
					"confiable":"NO"
				},
				{
					"id":"6",
					"nombre":"Nicolas",
					"telefono":"+54111568563226",
					"correo":"nico@gmail.com",
					"tipo":"artesano taller",
					"descripcion":"",
					"confiable":"NO"
				},
				{
					"id":"7",
					"nombre":"Silvina",
					"telefono":"+54111538563227",
					"correo":"silvina@gmail.com",
					"tipo":"artesano",
					"descripcion":"Quiero vender mucho...",
					"confiable":"NO"
				},
				{
					"id":"8",
					"nombre":"Lorena",
					"telefono":"+54111558536228",
					"correo":"lorena@gmail.com",
					"tipo":"artesano",
					"descripcion":"Quiero vender mucho...",
					"confiable":"NO"
				},
				{
					"id":"9",
					"nombre":"Sabrina",
					"telefono":"+54111558943229",
					"correo":"sabrina@gmail.com",
					"tipo":"artesano",
					"descripcion":"Quiero vender mucho...",
					"confiable":"NO"
				},
				{
					"id":"10",
					"nombre":"Claudia",
					"telefono":"+54111558213220",
					"correo":"claudia@gmail.com",
					"tipo":"artesano taller",
					"descripcion":"",
					"confiable":"NO"
				}
		]
	 
	 
	// Ya no se utiliza porque no se debe cargar el artesano en el formulario!!. Luis
/*     var $select = $('#artesanos');
	
	// Cargo el select desde el JSON de Artesanos 
    $.each(artesanos, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.nombre + '</option>');
    });
	

	// Envio el evento change al select
		$(document).on('change', '#artesanos', function(event) {
			 seleccionarRegistro();
		});
	
	
	function seleccionarRegistro()	{
		var selectItem, selectText, textoMostrar,descrip;

		// Obtenemos el valor seleccionado
		selectItem = $("#artesanos").val();

		// Vemos si el select está seleccionado
		if (selectItem == ""){

			// Limpio el texto
			$("#contacto").val("");
		}
		else
		{
			// obtenemos el texto del control select
			selectText = $("#artesanos option:selected").text();

			// Busco otros atributos del JSON.Luis
			$.each(artesanos, function(i, v) { 
				if (v.id == selectItem) { 
					textoMostrar =  v.nombre + ", " + v.telefono +", "+ v.correo +", "+ v.descripcion;
					 
					if(v.confiable=="SI"){
						estado = "SI";
					}else{
						estado = "NO";
					}
					//alert(v.confiable + " " + estado);
					//$('.alert').alert("Gracias");
					return estado; 
				} 
			});

			$("#contacto").val(textoMostrar);
			$("#publica").val(estado);


		}

	}	 */	
	
	
 }); 