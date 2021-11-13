 $(document).ready(function() {
	
	 const publicaciones = [
				{
					"id":"1",
					"nombre":"Mate Artesanal",
					"descripcion":"Mate Artesanal forrado en cuero",
					"categoria":"Cuero",
					"precio":"300",
					"contacto":[
						{
						"nombre":"Matias",
						"telefono":"+54111558563221",
						"correo":"maty@gmail.com",
						"tipo":"artesano",
						"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"matepersonalizado.png",
					"estado":"PUBLICADO"
				},
				
				{
					"id":"2",
					"nombre":"Mate Uruguayo",
					"descripcion":"Mate Uruguayo Camionero",
					"categoria":"Cuero",
					"precio":"1800",
					"contacto":[
						{	"nombre":"German",
							"telefono":"+54111548583222",
							"correo":"german@gmail.com",
							"tipo":"artesano taller",
							"descripcion":""
						}
					],
					"imagen":"mateuruguayocamionero.png",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"3",
					"nombre":"Manta Artesanal",
					"descripcion":"Frazada silvestre cafe lana artesanal",
					"categoria":"Textil",
					"precio":"5800",
					"contacto":[
						{
							"nombre":"Felipe",
							"telefono":"+54111552263223",
							"correo":"felipe@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"fraz_silv_cafe.jpg",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"4",
					"nombre":"Frazada silvestre de algodón",
					"descripcion":"Frazada silvestre de algodón blanco tejido en telar de cintura con brocado en algodón coyuchi",
					"categoria":"Textil",
					"precio":"",
					"contacto":[
						{					
							"nombre":"Luis",
							"telefono":"+54111558536224",
							"correo":"luis@gmail.com",
							"tipo":"artesano taller",
							"descripcion":""
						}
					],
					"imagen":"frazada_silvestre_cafe.jpg",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"5",
					"nombre":"Portavino Madera Artesanal",
					"descripcion":"Portavino y copas de madera diseñado artesanalmente. Con capacidad para 1 vino y 2 copas.",
					"categoria":"Madera",
					"precio":"2300",
					"contacto":[
						{					
							"nombre":"Silvina",
							"telefono":"+54111538563227",
							"correo":"silvina@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"portavinoycopasdemadera.png",
					"estado":"PUBLICADO",
				},
				{
					"id":"6",
					"nombre":"Lapicero de Madera",
					"descripcion":"Lapicero de madera para 8 lápices. Hecho en madera de primera calidad",
					"categoria":"Madera",
					"precio":"300",
					"contacto":[
						{
							"nombre":"Matias",
							"telefono":"+54111558563221",
							"correo":"maty@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"lapiceromadera.png",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"7",
					"nombre":"Juego cuchillo tenedor",
					"descripcion":"Juego Cuchillo Tenedor Trinche Asado Parrilla Artesano Acero",
					"categoria":"Metal",
					"precio":"3000",
					"contacto":[
						{
							"nombre":"Silvina",
							"telefono":"+54111538563227",
							"correo":"silvina@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"juegocuchillotenedor.png",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"8",
					"nombre":"Caja de Te",
					"descripcion":"Caja de te x6 de madera con tapa de vidrio",
					"categoria":"Madera",
					"precio":"",
					"contacto":[
						{					
							"nombre":"Lorena",
							"telefono":"+54111558536228",
							"correo":"lorena@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"cajatemadera.png",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"9",
					"nombre":"Banqueta madera",
					"descripcion":"Banqueta de 45 cm de madera sin respaldo en pino, de alta resistencia",
					"categoria":"Madera",
					"precio":"1500",
					"contacto":[
						{							
							"nombre":"Lorena",
							"telefono":"+54111558536228",
							"correo":"lorena@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"banquetamadera.png",
					"estado":"PUBLICADO",
				},
				
				{
					"id":"10",
					"nombre":"Bandeja De Madera",
					"descripcion":"Bandeja de madera Artesanal forrado pintada",
					"categoria":"Madera",
					"precio":"",
					"contacto":[
						{					
							"nombre":"Sabrina",
							"telefono":"+54111558943229",
							"correo":"sabrina@gmail.com",
							"tipo":"artesano",
							"descripcion":"Quiero vender mucho..."
						}
					],
					"imagen":"bandejamadera.png",
					"estado":"PUBLICADO",
				},			
			]
	 
	 
	
			/* llamo a la funcion showFilas */
			showFilas(publicaciones);
			
			/* Armo la tabla con el resultado de la consulta */
			function showFilas(json) {
				// Vacio el listado 
				$(".listado").html("");
				console.log(json);

				var $table = $('<table  class="table table-hover table-striped"></table>');
				$table.append("<tr><th>Id</th><th>Nombre</th><th>Descripcion</th><th>Categoria</th><th>Precio</th><th>Contacto</th><th>Imagen</th></tr>")
			  
			  $.each(json, function(i, item) {
				  var tr = $('<tr>').append(
					$('<td>').text(item.id),
					  $('<td>').text(item.nombre),
					  $('<td>').text(item.descripcion),
					  $('<td>').text(item.categoria),
					  $('<td>').text('$ ' + item.precio),
					  $('<td>').text(item.contacto[0].nombre +','+item.contacto[0].telefono+','+item.contacto[0].correo),
					  $('<td><img src="img/'+ item.imagen +'" width="100" height="100">')
					
					// Probe abrir la imagen en una nueva ventana pero solo pude con la primer imagen...
					//$('<td><img src="img/'+ item.imagen +'" width="100" height="100" onClick="agrandar();" >')
					  
				  ); 
				  $table.append(tr);
				});
				$(".listado").append($table)

			}


		var nordenb = document.querySelector('input[name="filtro"]:checked').value;
		var sordenb = "";
		
		if (nordenb == 0){
				sordenb = "td:eq(1)"; // 
			}else{
				if(nordenb == 1){
					sordenb ="td:eq(2)";
				}else{
					sordenb = "td:eq(3)";	
				}	
		}


//"td:eq(3)"

		$("#filtrar").keyup(function () {
			var value = this.value.toLowerCase().trim();

			$("table tr").each(function (index) {
				if (!index) return;
				$(this).find(sordenb).each(function () {
					var id = $(this).text().toLowerCase().trim();
					var not_found = (id.indexOf(value) == -1);
					$(this).closest('tr').toggle(!not_found);
					return not_found;
				});
			});
		});

	
 }); 