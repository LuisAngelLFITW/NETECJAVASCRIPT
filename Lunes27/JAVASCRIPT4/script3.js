$(document).ready(function(){
    $('td:gt(5)').css('background', 'blue'); //gt de mayor
    $('td:lt(3)').css('background', 'yellow'); //lt de menores
    $('tr:first').css('color','red'); //pone renglon 1 con letras rojas
    $('td:eq(5)').css('color', 'red'); //elemento indice 5 de la tabla
})