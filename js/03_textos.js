'use strict'

$(function(){
  //console.log('textos.js jQuery cargado');
  //console.log($('a').length);

  $('#quit_button').removeAttr('disabled');   // ELIMINA UN ATRIBUTO

  realoadLinks();

  $('#add_button')
    // APPEND, PREPEND, AFTER, BEFORE
    .on('click',function(){
      $('#menu').prepend('<li><a href="'+$('#add_link').val()+'">'+$('#add_link').val()+'</a></li>');
      $('#add_link').val('');
    });

  // .each()  ==> Recorre todo el documento DOM para encontrar todos los link (tag 'a')
  function realoadLinks(){
    $('a').each(function (indexInArray, valueOfElement) { 
      var enlace = $(this).attr('href');
      $(this).text(enlace);
      $(this).attr('target','_blank');    // AÑADE UN NUEVO ATRIBUTO
    });
  }
});
