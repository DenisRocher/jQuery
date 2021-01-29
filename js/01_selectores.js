'use strict';

/** Permite validar que jQuery esté correctamente cargado --> */
jQuery(function(){
  console.log('Estamos listos para jQuery');

  // SELECTOR DE ID
  $('#rojo').css('background','red')
      .css('color','white');
  $('#amarillo').css('background','yellow')
      .css('color','blue');
  $('#verde').css('background','green')
      .css('color','grey');

  // SELECTOR DE CLASES $('.aaaa)
  var mi_clase = $('.zebra')
  mi_clase.css('border','5px dashed blue').css('padding','5px');

  $('.sin_borde').on('click', function(){
    console.log($('.sin_borde'));
    $(this).addClass('zebra');

  })

  //Nota: array.eq(a)   ==> Permite devolver el elemento 'a' del array, es igual a poner por ejemplo array[a]
  //console.log(mi_clase.eq(0));
  
  // SELECTOR DE ETIQUETAS
  var parrafos = $('p').css('cursor','pointer'); // Selecciona todos los párafos
  console.log(parrafos);
  parrafos.on('click',function(){
    if (!$(this).hasClass('grande')) {
      //$(this).removeClass('zebra');
      $(this).addClass('grande');
    }
    else {
      $(this).removeClass('grande');
    }
  });

  // SELECTOR DE ATRIBUTO $('[aaaa="bbbb"]')
  $('[title="google"]').css('background','#ccc');
  $('[title="google3"]').css('background','yellow');


  // OTROS SELECTORES $('a,b') ==> Permite seleccionar varias etiquetas (en ejemplo se seleccionan todos los párafos y links
  //$('p,a').addClass('margen_superior');

  // FIN Y PARENT
  // $(parent).find(busqueda)
  var resaltados = $('#caja').find('.resaltado') //.find('[title="google"]');
  //console.log(resaltados);

  var padre = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="google"]');
  console.log(padre);

  var busqueda = $('#elemento2').parent().parent().find('.resaltado');
  console.log(busqueda);


});


