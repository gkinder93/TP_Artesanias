$(document).ready(function() {

	$('#consultar').click(function() {
		var nombre = document.getElementById("nombre").value;
		var limite = document.getElementById("limite").value;
		var norden = document.querySelector('input[name="ordena"]:checked').value;

		// Valido campos
		if (document.getElementById("nombre").value == ""){
			alert('Debe insertar un nombre para la búsqueda!');
			document.getElementById("nombre").focus();
			return;
		}	

		var sorden = '';
	
		// Inicializo limite por defecto.
		if (limite == ''){
			limite = 5;
		}
		

		
/* 		switch (norden) {  *** No funca con case !!! Luis
			case 0:
				sorden = 'price_desc'
				break;
			case 1:
				sorden = 'price_asc'
				break;
			case 2:
				sorden ='relevance'
				break;
		} */
		
		if (norden == 1){
			sorden = 'price_asc'
		}else{
			if(norden == 2){
				sorden ='relevance'
			}else{
				sorden = 'price_desc'	
			}	
		}
		
		/* Consulto la Api de Mercalibre */
		// Consulto lo que quiero buscar con parametros.limite es cuanto registros quiero que se vean.
		
		var url = 'https://api.mercadolibre.com/sites/MLA/search?condition=new&q=' + nombre + '&sort='+ sorden + '&limit='+ limite;

	
		fetch(url)
		.then(response => response.json())
		.then(data => showFilas(data));		
		
	});
	


	/* Armo la tabla con el resultado de la consulta */
	function showFilas(jsonObj) {
		// Vacio el listado 
		$(".listado").html("");
		console.log(jsonObj);
		const filas = jsonObj['results'];

		var $table = $('<table></table>');
		$table.append("<tr><th>Descripcion</th><th>Precio</th><th>Imagen</th></tr>")

	  $.each(filas, function(i, item) {
		  var tr = $('<tr>').append(
			$('<td>').text(item.title),
			  $('<td>').text('$ '+item.price),
			  $('<td><img src="'+ item.thumbnail +'">')
		  ); 
		  $table.append(tr);
		});
		$(".listado").append($table)

	}


		
});