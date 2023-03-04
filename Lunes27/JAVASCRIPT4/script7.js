$(document).ready( function () {
    
    let contador = 0;
    $('#ejemplo').on('click', function() {
        contador++;
        console.log('--> clic ' + contador);
    });
    
})