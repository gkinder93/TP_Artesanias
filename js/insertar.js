  $(document).ready(function() {


$('#agregar').click(function() {
  var nombre = document.getElementById("nombre").value;
  //var apellido = document.getElementById("apellido").value;
  var documento = document.getElementById("documento").value;
  var especialidad = document.getElementById("especialidad").value;
  var medico = document.getElementById("medico").value;
  var hora = document.getElementById("hora").value;
  var fecha = document.getElementById("fecha").value;
  
  var i = 1; 
  var fila = '<tr id="row' + i + '"><td>'+ fecha + '</td><td>' + hora + '</td><td>'+ especialidad + '</td><td>'+ medico + '</td><td>' + nombre + '</td><td>' + documento + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; 

  i++;

  $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
   // document.getElementById("apellido").value ="";
    document.getElementById("documento").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").focus();
  });
$(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
    $('#row' + button_id + '').remove(); //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    $("#adicionados").text("");
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
  });
});