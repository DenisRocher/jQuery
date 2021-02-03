'use strict'

$(function(){
  //console.log('Listo interface.js');
  
  // MOVER ELEMENTO POR LA PÁGINA
  $('.elemento').draggable();

  // CAMBIAR TAMAÑO DE UN ELEMENTO
  $('.elemento').resizable();

  // LISTA SELECCIONABLES
  //$('.lista-seleccionable').selectable();

  // LISTA ORDENABLE
  $('.lista-seleccionable').sortable({
    update: function (evento, ui) {
      console.log('Ha cambiado la lista');
      console.log(evento);
      console.log(ui);
    }
  });

  // EFECTO DE SOLTAR Y ARRASTRAR (DROPPABLE)
  $('#elemento_movido').draggable();
  $('#area').droppable({
    drop:function(){
      console.log('Has soltado algo en el área');
    }
  });

  // VARIOS EFECTOS: BLIND, SLIDE, DROP, EXPLODE, DROP, FOLD, PUFF
  // https://jqueryui.com/toggle/
  //    NOTA: SE PUEDE USAR TANTO .effect('aaa') como .toggle('aaa')
  $('#mostrar').on('click',function(){
    $('.caja_efectos').toggle('shake','slow',4000);

  }).on('dblclick',function(){
    $('.caja_efectos').effect('drop');
  });

  // TOOLTIP (VISUALIZA EL 'TITLE' DE TODOS LOS ELEMENTOS, AL PASAR CURSOR ENCIMA)
  //    EJEMPLOS DE TOOLTIP CON PERSONALIZACION
  //      https://www.heteroclito.fr/modules/tooltipster/
  //      https://www.appcues.com/blog/73-tooltip-plugins-made-with-jquery-css-javascript-or-more

  $(document).tooltip();

  // CUADROS DE DIALOGO POPUP
  $('#lanzarPopUp').on('click',function(){
    $('#popup').dialog();
  });

  // CALENDARIO
  $('#calendario').datepicker({
    dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
    dayNames: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
    dateFormat: 'DD dd-mm-yy'
    });
});
