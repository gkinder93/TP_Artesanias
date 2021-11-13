$(document).ready(function() {


	$('#consultar').click(function() {
		//const section = document.querySelector('section');
		var nombre = document.getElementById("nombre").value;
		var url = 'https://api.mercadolibre.com/sites/MLA/search?condition=new&q=' + nombre;
		//Fetch(‘url‘);
		//console.log("Resultado:" + url);
		fetch(url)
		.then(response => response.json())
		.then(data => showFilas(data));
		//.then(data => console.log(data));
		
		
		//.then(data => 
		//var obj=json.parse(data);
		//var json = JSON.parse(data);
		
		//var objeto = json.stringify(data);
		//console.log(objeto);
		
		//request.onload = function() {
		//const superHeroes = request.response;
		//showHeroes(superHeroes);
		//}
			
	});
	

	
	function showFilas(jsonObj) {
	  const filas = jsonObj['results'];
		//for (var i = 0; i < filas.length; i++) {
	  for (var i = 0; i < 5; i++) {
		const miArticulo = document.createElement('article');
		const miH2 = document.createElement('h2');
		const miP1 = document.createElement('p');
		const miP2 = document.createElement('p');
		const miP4 = document.createElement('p');
		const miP5 = document.createElement('hr');

		//myH2.textContent = filas[i].name;
		miP1.textContent = 'Titulo: ' + filas[i].title;
		miP2.textContent = 'Precio: ' + '$ '+ filas[i].price;
		//miP3.textContent = 'Imagen: ' + filas[i].thumbnail;
		//miP4.textContent = 'Link: ' + filas[i].permalink;
		
		let a = document.createElement("a");
		a.setAttribute("href", filas[i].permalink);
		
		miP4.textContent = 'Link: ' + a ;
		

		
		////const mytr = document.createElement('tr');
		////const myPara1 = document.createElement('th');
		////const myPara2 = document.createElement('th');
		////const myPara3 = document.createElement('th');
		////const myPara4 = document.createElement('th');
		
		////myH2.textContent = filas[i].name;
		////myPara1.textContent =  filas[i].title;
		////myPara2.textContent =  filas[i].price;
		////myPara3.textContent =  filas[i].thumbnail;
		////myPara4.textContent =  filas[i].permalink;	

	
		
		
		//var titulo = filas[i].title;
		//var precio = filas[i].price;
		//var linkimg = filas[i].thumbnail;
		//var linkmercado = filas[i].permalink;
		
		//var fila = '<tr id="row' + i + '"><td>'+ titulo +'</td><td>'+ precio + '</td><td>'+ linkimg + '</td><td>'+ linkmercado + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Eliminar</button></td></tr>'; 
		
		
		
		
			

		//miArticulo.appendChild(myH2);
		miArticulo.appendChild(miP1);
		miArticulo.appendChild(miP2);
		//miArticulo.appendChild(miP3);
		miArticulo.appendChild(miP4);
		///miArticulo.appendChild(myList);
		miArticulo.appendChild(miP5);
		section.appendChild(miArticulo);
	  }
	}
	
	//request.onload = function() {
	//const superHeroesText = request.response; // cogemos la cadena de response
	//const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
	//populateHeader(superHeroes);
	//showFilas(superHeroes);
//}
	
	
	
	
});