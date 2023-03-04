/*let text = $('#texto');
text.click(function(){
    document.write('Hice click en el texto');
});*/

//Quremos acceder al documento

$(document).ready(function(){
    let texto = $('#texto');
    let entrada = $('#entrada');
    let btn = $('#btn');
    console.log(texto);
    console.log(entrada);
    console.log(btn);
})