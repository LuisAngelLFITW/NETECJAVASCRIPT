$(document).ready(function(){
  $('#btn').on("click", function(){
    $('li').filter(":even").css('background','red')
  });
}) //seleeciona items impares