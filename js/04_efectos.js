'use strict'


/**
 *  EFECTOS EN JQUETY
 *    hide() // show()  ==> Permite ocultar()//mostar() elemento
 *        Nota hide('fast' o 'medium o slow o normal), permite definir * *    *           velocidad y efectos
 * 
 *    fadeIn() // fadeOut   ==> Oculta / Muestra con fundido
 * 
 *    fadeTo()          ==> Permite ir de un estado  otro (1 - Opacidad visible // 0, invible)
 * 
 *    toggle()        ==> Permite Ocultar/Mostrar elemento
 *    fadeToggle()    ==> Con efecto fade
 *    slideToggle()   ==> Efecto despliegue
 *      slideUp()   --> Para ocultar desplegando
 *      slieDown()  --> Para mostrar desplegando
 *    
 *    
 * 
 * 
 */
$(function(){
  //console.log('cargado efectos.js');
  var caja = $('#caja');

  /** $('#ocultar').on('click',function () {
    $('#caja').css('display','none');
  })
  */

  $('#todoenuno').on('click',function(){
    //$('#caja').toggle('fast');
    //$('#caja').fadeToggle('fast');
    $('#caja').slideToggle('fast');


  })

  $('#mostrar').hide();
  $('#aparecer').hide();

  $('#ocultar').on('click',function () {
    //$('#caja').hide('fast');
    $('#caja').fadeTo('slow',0.2);
    $(this).hide('slow');
    $('#desvanecer').hide('slow',function () {
      console.log('cartel ocultado')        // LA FUNCION CALLBACK SE EJECUTA D                                     DESPUES DE HACER EL HIDE
    });
    $('#mostrar').show('medium');
    $('#aparecer').show('normal');
  })

  $('#mostrar').on('click',function(){
    //$('#caja').show('slow');
    $('#caja').fadeTo('slow',0.8);
    $(this).hide('normal');
    $('#aparecer').hide('fast');
    $('#ocultar').show();
    $('#desvanecer').show();
  })

  $('#desvanecer').on('click',function(){
    $('#caja').fadeOut();
    $(this).hide('normal');
    $('#ocultar').hide();
    $('#aparecer').show();
    $('#mostrar').show();
  })

  $('#aparecer').on('click',function(){
    $('#caja').fadeIn();
    $(this).hide('normal');
    $('#mostrar').hide();
    $('#ocultar').show();
    $('#desvanecer').show('slow');
  })

  $('#animame').on('click',function(){
    caja.animate({marginLeft: '500px',
                  fontSize: '40px',
                  height: '170px'  
                },'slow')
        .animate({borderRadius:'900px',
                  marginTop: '80px',
                  }
                ,'slow')
        .animate({
                borderRadius: '0px',
                marginLeft:'0px'
                },'slow')
        .animate({
                borderRadius:'100px',
                marginTop:'0px'
                },'slow')
        .animate({marginLeft: '500px',
                  fontSize: '40px',
                  height: '170px'  
                },'slow')
  })
}
);
