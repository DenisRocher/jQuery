'use strict'

$(function(){
  console.log('Eventos jQuery cargado');


  //MOUSE OVER Y MOUSE OUT
  var caja = $('#caja');

  /**
  caja.on('mouseover',function(){
    $(this).css('background','red');
  });
  caja.on('mouseout',function(){
    $(this).css('background','green');
  });
  */

  // EVENTO HOVER (MANERA MÁS EFECTIVA DE HACER MOUSEOVER, MOUSEOUT)

  function cambiaRojo(){
    $(this).css('background','red');
  };
  function cambiaVerde(){
    $(this).css('background','green');
  };

  caja.on('mouseenter',cambiaVerde).on('mouseleave',cambiaRojo);

  caja.on('click',function(){
    $(this).css('background','blue').css('color','white');
  }).on('dblclick',function(){
    $(this).css('background','pink').css('color','yellow');
  });
  
  $('#nombre').on('focus',function () {
      console.log('Focus en input');
      $(this).css('border','2px solid yellow');
    })
    .on('blur',function(){
      $(this).css('border','1px solid #ccc');
      $('#datos').text($(this).val()).show();
    });

  // MOUSEDOWN Y MOUSEUP
  var datos = $('#datos');
  datos.mousedown(function () { 
      $(this).css('border-color','gray');
    })
    .mouseup(function () { 
      $(this).css('border-color','black');
    });

  $(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $('body').css('cursor','none');   //Oculta el cursor
    $('#sigueme')
      .css('left',e.clientX)
      .css('top',e.clientY);
  });

});
