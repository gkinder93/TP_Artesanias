var feature;
var map;
var ubicacion;
var clusterTemp;
// const talleres =[
//   {
//     "taller": "Lo de Ger",
//     "calle": "Callao",
//     "altura": 197,
//     "coordenadas": { "y": -34.521519, "x": -58.72078 },
//     "cod_partido": "San Miguel"
//   },
//   {
//     "taller": "Lo de Lipe",
//     "calle": "Pellegrini",
//     "altura": 377,
//     "coordenadas": { "y": -34.525062, "x": -58.707551 },
//     "cod_partido": "Los Polvorines"
//   },
//   {
//     "taller": "Lo de Mati",
//     "calle": "Pringles",
//     "altura": 246,
//     "coordenadas": { "y": -34.529199, "x": -58.711161 },
//     "cod_partido": "San Miguel"
//   },
//   {
//     "taller": "Lo de Luis",
//     "calle": "Dorrego",
//     "altura": 900,
//     "coordenadas": { "y": -34.53946, "x": -58.69586 },
//     "cod_partido": "San Miguel"
//   }
// ]

function Inicio() {

    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

   var cluster = new L.markerClusterGroup();
   clusterTemp = new L.markerClusterGroup();
  //  console.log(window.talleres);
    var ubicaciones= [];
    $.each(talleres, function(id, data){
      let latitud   = data.coordenadas.y;
      let longitud  = data.coordenadas.x;
      
      
      let ubicacion = new L.marker(L.latLng(latitud, longitud));
      ubicaciones.push(ubicacion)
      
    });
    console.log(ubicaciones);
    cluster.addLayers(ubicaciones);
    cluster.addTo(map)
    var items = [];
    
    $.each(talleres, function(id,data){
      let latitud=data.coordenadas.y;
      let longitud=data.coordenadas.x;
      items.push("<div class='card' style='width: 18rem'><div class='card-body'><h5 class='card-title'>"+data.taller+
            "</h5><a href='#'  class='card-link' onclick='fijarMapa("+latitud + "," + longitud+");return false;'>Mostrar direccion </a></div></div>");
    });
    $('#talleres').empty();
        if (items.length != 0) {
            $('<p>', { html: "Talleres cercanos:" }).appendTo('#talleres');
            $('<ul/>', {
                'class': 'my-new-list',
                html: items.join('')
            }).appendTo('#talleres');
        }else{
             $('<p>', { html: "Ningun resultado encontrado." }).appendTo('#talleres');
        }

  }
  function direccionBuscador() {

    var entrada = document.getElementById("buscarTaller").value;
    posiblesDirecciones(entrada);

  }
  function posiblesDirecciones(entrada){

    $.getJSON('http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=' + entrada+'&geocodificar=true', function(data) {
        var items = [];
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
            //let punto ="["+ data.direccionesNormalizadas[i].coordenadas.y + ", " + data.direccionesNormalizadas[i].coordenadas.x+"]";
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
  clusterTemp.clearLayers();
  // cluster=new L.markerClusterGroup();
  let ubicacion = new L.marker(L.latLng(latitud, longitud));
  clusterTemp.addLayer(ubicacion);
  console.log(clusterTemp)
  clusterTemp.addTo(map);  
}


function fijarMapa(latitud,longitud){
  let punto = [latitud,longitud]
  map.setView(punto, 15)
}

function limpiarBuscador(){
  $('#resultado').empty();
}