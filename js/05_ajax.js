'use strict'

$(function(){
  //console.log('Listo AJAX');

  // LOAD     ==> Permite hacer petición AJAX por metodo GET
  var divDatos = $('#datos');

 // divDatos.load('https://reqres.in/');

  //  GET - AJAX
  $.get('https://reqres.in/api/users',{page:2},function (response) {
    console.log(response);
    response.data.forEach((element,index) => {
      divDatos.append('<p>'+element.first_name+' ' +element.last_name+'</p>'); 
    });
  });

  // POST - AJAX
  var newUser = {name: 'Denis', 
                job: 'IT Manager'};

  $.post('https://reqres.in/api/users', newUser, function(response){
    console.log(response);
  });

  $('#registro').on('submit',function(evento){
    evento.preventDefault();                // evite redirigir la página.
   // console.log('hola mundo');
    newUser = {name: $('input[name="nombre"]').val(), 
              job: $('input[name="job"]').val()
            };

   $.post($(this).attr('action'),newUser,function(response){
      console.log(response);
      divDatos.prepend('<p>'+newUser.name+' ' +newUser.job+'</p>'); 
   }).done(function(){
     alert('Usuario ingresado correctamente');
   });

   $.ajax({
     type: 'POST',
     //dataType: 'json',
     //contentType: 'application/json',
     url: $(this).attr('action'),
     data: newUser,
     beforeSend: function(){
       console.log('enviando usuario');
     },
     success: function(response){
       console.log('Respuesta OK');
       console.log(response);
       divDatos.prepend('<p>Método $.ajax: '+newUser.name+' ' +newUser.job+'</p>'); 
     },
     error: function(){
       console.log('Ha ocurrido un error');
     },
     timeout: 2000

   });



   return false;


  });

});