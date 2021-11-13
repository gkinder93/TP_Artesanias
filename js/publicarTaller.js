
var map;
var rest;
var latitud;
var longitud;
function Inicio() {

    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  cluster = new L.markerClusterGroup();
  
  }


  function direccionBuscador() {

    var entrada = document.getElementById("buscarDireccion").value;
    $( "#valida" ).prop( "checked", false )
    posiblesDirecciones(entrada);

  }
  function posiblesDirecciones(entrada){

    $.getJSON('http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=' + entrada+'&geocodificar=true', function(data) {
        var items = [];
        rest = data;
        console.log(data.direccionesNormalizadas);
        
        for(let i = 0; i < data.direccionesNormalizadas.length; i++) {
          if(data.direccionesNormalizadas[i].coordenadas == null && data.direccionesNormalizadas[i].altura == null){
            items.push("<div class='card' style='width: 18rem'><div class='card-body'><h5 class='card-title'>" +data.direccionesNormalizadas[i].direccion+  '</h5></div></div>');
          }else
          if(data.direccionesNormalizadas[i].coordenadas == null && data.direccionesNormalizadas[i].altura != null){
            items.push("<div class='card' style='width: 18rem'><div class='card-body'><h5 class='card-title'>"+data.direccionesNormalizadas[i].direccion+
            "</h5><a href='#' onclick='posiblesDirecciones(" +'"'+data.direccionesNormalizadas[i].direccion+
            '"'+");return false;'>Buscar posibles</a></div></div>'");
          }else{
            let latitud=data.direccionesNormalizadas[i].coordenadas.y;
            let longitud=data.direccionesNormalizadas[i].coordenadas.x;
            items.push("<div class='card' style='width: 18rem'><div class='card-body'><h5 class='card-title'>"+data.direccionesNormalizadas[i].direccion+
            "</h5><a href='#'  class='card-link' onclick='marcarDireccionNormalizada("+latitud + "," + longitud+");fijarMapa("+latitud + "," + longitud+");return false;'>Mostrar direccion </a></div></div>");
          }
        }
        $('#resultado').empty();
        if (items.length != 0) {
            $('<p>', { html: "Resultados de la b&uacute;queda:" }).appendTo('#resultado');
            $('<ul/>', {
                'class': 'my-new-list',
                html: items.join('')
            }).appendTo('#resultado');
        }else{
             $('<p>', { html: "Ningun resultado encontrado." }).appendTo('#resultado');
        }

        
    });

}
function marcarDireccionNormalizada(latitud,longitud) {
  this.latitud = latitud;
  this.longitud=longitud;
  cluster.clearLayers();
  let ubicacion = new L.marker(L.latLng(latitud, longitud));
  cluster.addLayer(ubicacion);
  console.log(cluster)
  cluster.addTo(map);  
  $('#resultado').empty();
  
}


function fijarMapa(latitud,longitud){
  $( "#valida" ).prop( "checked", true )
  let punto = [latitud,longitud]
  map.setView(punto, 15)
}

function publicarTaller(){
  let nombre = document.getElementById("nombreTaller").value;
  if($( "#valida" ).prop( "checked") && nombre != ""){
    
    let calle;
    let altura;
    let cod_partido;
    
    console.log(rest);
    for(let i = 0; i < rest.direccionesNormalizadas.length; i++) {
      let latitud = rest.direccionesNormalizadas[i].coordenadas.y;
      let longitud = rest.direccionesNormalizadas[i].coordenadas.x
      if(latitud == this.latitud && longitud == this.longitud){
        calle = rest.direccionesNormalizadas[i].nombre_calle;
        altura = rest.direccionesNormalizadas[i].altura;
        cod_partido = rest.direccionesNormalizadas[i].cod_partido;
      }
    }
    console.log(talleres);
    talleres.push(    {
      "taller": nombre,
      "calle": calle,
      "altura": altura,
      "coordenadas": { "y": this.latitud, "x": this.longitud },
      "cod_partido": cod_partido
    });
    console.log(talleres);
  }
  
  
}