$(document).ready(function(){
    //let valorSeleccionado= $('select > option:selected').val(); //AQUI SE seleciona el primer elemento que tenga
    //console.log(valorSeleccionado); //AQUI SE seleciona el primer elemento que tenga

    $('#pais').change(function(){
        let paisSeleccionado = $(this).children("option:selected").val();
        $('.resultado').text(paisSeleccionado);
    })
})

$('#pais')