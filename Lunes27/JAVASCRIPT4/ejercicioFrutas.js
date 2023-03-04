//combo de frutas, fruta seleccionada s pone como titulo
$(document).ready(function(){
    $('#fruta').change(function(){
        let frutaSeleccionada = $(this).children("option:selected").val();
        $('#titulo').text(frutaSeleccionada);
    })
})