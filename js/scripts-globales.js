// NAV PRINCIPAL
// Change Icon Menu - Hamburguesa XS
$("#btn-menu-ga").click(function () {
  if ($("#navbarNavCollapseMain").hasClass("show")){
    $('#bg-main-nav').removeClass("fixed")

    $('#icon-menu-drop').removeClass("icon-Cerrar")
    $('#icon-menu-drop').addClass("icon-Hamburgesa")

    $('#collapse-portal-trabajadores-xs').collapse('hide')
    $('#btn-portal-trabajadores-xs').removeClass('active')
    $('#icon-collapse-xs-01').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-01').addClass("icon-Flecha-abajo")

    $('#collapse-portal-empresas-xs').collapse('hide')
    $('#btn-portal-empresas-xs').removeClass('active')
    $('#icon-collapse-xs-02').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-02').addClass("icon-Flecha-abajo")

    $('#collapse-nuestros-servicios-xs').collapse('hide')
    $('#btn-nuestros-servicios-xs').removeClass('active')
    $('#icon-collapse-xs-03').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-03').addClass("icon-Flecha-abajo")

    $('body').removeClass('open')
  }
  else{
    $('#bg-main-nav').addClass("fixed")

    $('#icon-menu-drop').removeClass("icon-Hamburgesa")
    $('#icon-menu-drop').addClass("icon-Cerrar")

    $(window).scrollTop(0);
    $('body').addClass('open')
  }
});

// COLLAPSE PORTAL TRABAJADORES XS
$("#btn-portal-trabajadores-xs").click(function () {
  if ($("#collapse-portal-trabajadores-xs").hasClass("show")){
    $('#icon-collapse-xs-01').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-01').addClass("icon-Flecha-abajo")
    $('#btn-portal-trabajadores-xs').removeClass('active')
  }
  else{
    $('#icon-collapse-xs-01').removeClass("icon-Flecha-abajo")
    $('#icon-collapse-xs-01').addClass("icon-Flecha-arriba")
    $('#btn-portal-trabajadores-xs').addClass('active')

    $('#collapse-portal-empresas-xs').collapse('hide')
    $('#btn-portal-empresas-xs').removeClass('active')

    $('#collapse-nuestros-servicios-xs').collapse('hide')
    $('#btn-nuestros-servicios-xs').removeClass('active')

    $('#icon-collapse-xs-02').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-02').addClass("icon-Flecha-abajo")

    $('#icon-collapse-xs-03').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-03').addClass("icon-Flecha-abajo")
  }
});

// COLLAPSE PORTAL EMPRESAS XS
$("#btn-portal-empresas-xs").click(function () {
  if ($("#collapse-portal-empresas-xs").hasClass("show")){
    $('#icon-collapse-xs-02').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-02').addClass("icon-Flecha-abajo")
    $('#btn-portal-empresas-xs').removeClass('active')
  }
  else{
    $('#icon-collapse-xs-02').removeClass("icon-Flecha-abajo")
    $('#icon-collapse-xs-02').addClass("icon-Flecha-arriba")
    $('#btn-portal-empresas-xs').addClass('active')

    $('#collapse-portal-trabajadores-xs').collapse('hide')
    $('#btn-portal-trabajadores-xs').removeClass('active')

    $('#collapse-nuestros-servicios-xs').collapse('hide')
    $('#btn-nuestros-servicios-xs').removeClass('active')

    $('#icon-collapse-xs-01').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-01').addClass("icon-Flecha-abajo")

    $('#icon-collapse-xs-03').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-03').addClass("icon-Flecha-abajo")
  }
});

// COLLAPSE NUESTROS SERVICIOS XS
$("#btn-nuestros-servicios-xs").click(function () {
  if ($("#collapse-nuestros-servicios-xs").hasClass("show")){
    $('#icon-collapse-xs-03').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-03').addClass("icon-Flecha-abajo")
    $('#btn-nuestros-servicios-xs').removeClass('active')
  }
  else{
    $('#icon-collapse-xs-03').removeClass("icon-Flecha-abajo")
    $('#icon-collapse-xs-03').addClass("icon-Flecha-arriba")
    $('#btn-nuestros-servicios-xs').addClass('active')

    $('#collapse-portal-trabajadores-xs').collapse('hide')
    $('#btn-portal-trabajadores-xs').removeClass('active')

    $('#collapse-portal-empresas-xs').collapse('hide')
    $('#btn-portal-empresas-xs').removeClass('active')

    $('#icon-collapse-xs-01').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-01').addClass("icon-Flecha-abajo")

    $('#icon-collapse-xs-02').removeClass("icon-Flecha-arriba")
    $('#icon-collapse-xs-02').addClass("icon-Flecha-abajo")
  }
});


// COLLAPSE PORTAL EMPRESAS WEB 
$('#btn-portal-empresas').mouseover(function(){
  $('#btn-portal-empresas').addClass('active')

  $('#collapse-portal-trabajadores').collapse('hide')
  $('#collapse-nuestras-soluciones').collapse('hide')

  $('#collapse-portal-empresas').addClass('active')
  $('#collapse-portal-empresas').collapse('show')
})
$('#offset-portal-empresas').mouseleave(function(){
  $('#btn-portal-empresas').removeClass('active')

  $('#collapse-portal-trabajadores').collapse('hide')
  $('#collapse-nuestras-soluciones').collapse('hide')

  $('#collapse-portal-empresas').removeClass('active')
  $('#collapse-portal-empresas').collapse('hide')
})

// COLLAPSE PORTAL TRABAJADORES WEB
$('#btn-portal-trabajadores').mouseover(function(){
  $('#btn-portal-trabajadores').addClass('active')

  $('#collapse-portal-empresas').collapse('hide')
  $('#collapse-nuestras-soluciones').collapse('hide')

  $('#collapse-portal-trabajadores').addClass('active')
  $('#collapse-portal-trabajadores').collapse('show')
})
$('#offset-portal-trabajadores').mouseleave(function(){
  $('#btn-portal-trabajadores').removeClass('active')

  $('#collapse-portal-empresas').collapse('hide')
  $('#collapse-nuestras-soluciones').collapse('hide')

  $('#collapse-portal-trabajadores').removeClass('active')
  $('#collapse-portal-trabajadores').collapse('hide')
})

// COLLAPSE NUESTRAS SOLUCIONES WEB
$('#btn-nuestras-soluciones').click(function(){

  if ($("#collapse-nuestras-soluciones").hasClass("show")){
    $('#btn-nuestras-soluciones').removeClass('active')

    $('#icon-desplegable-arrow').removeClass('icon-Flecha-arriba')
    $('#icon-desplegable-arrow').addClass('icon-Flecha-abajo')
  
    $('#collapse-portal-empresas').collapse('hide')
    $('#collapse-portal-trabajadores').collapse('hide')
  
    $('#collapse-nuestras-soluciones').removeClass('active')
    $('#collapse-nuestras-soluciones').collapse('hide')
  } else{
    $('#btn-nuestras-soluciones').addClass('active')

    $('#icon-desplegable-arrow').removeClass('icon-Flecha-abajo')
    $('#icon-desplegable-arrow').addClass('icon-Flecha-arriba')
  
    $('#collapse-portal-empresas').collapse('hide')
    $('#collapse-portal-trabajadores').collapse('hide')
  
    $('#collapse-nuestras-soluciones').addClass('active')
    $('#collapse-nuestras-soluciones').collapse('show')
  }
})

$('#btn-nuestras-soluciones').mouseover(function(){
  $('#btn-nuestras-soluciones').addClass('active')

  $('#icon-desplegable-arrow').removeClass('icon-Flecha-abajo')
  $('#icon-desplegable-arrow').addClass('icon-Flecha-arriba')

  $('#collapse-portal-empresas').collapse('hide')
  $('#collapse-portal-trabajadores').collapse('hide')

  $('#collapse-nuestras-soluciones').addClass('active')
  $('#collapse-nuestras-soluciones').collapse('show')

  // $('#btn-nuestras-soluciones').click(function(){
  //   $('#btn-nuestras-soluciones').removeClass('active')

  //   $('#icon-desplegable-arrow').removeClass('icon-Flecha-arriba')
  //   $('#icon-desplegable-arrow').addClass('icon-Flecha-abajo')
  
  //   $('#collapse-portal-empresas').collapse('hide')
  //   $('#collapse-portal-trabajadores').collapse('hide')
  
  //   $('#collapse-nuestras-soluciones').removeClass('active')
  //   $('#collapse-nuestras-soluciones').collapse('hide')
  // })
})
$('#offset-nuestras-soluciones').mouseleave(function(){
  $('#btn-nuestras-soluciones').removeClass('active')

  $('#icon-desplegable-arrow').removeClass('icon-Flecha-arriba')
  $('#icon-desplegable-arrow').addClass('icon-Flecha-abajo')

  $('#collapse-portal-empresas').collapse('hide')
  $('#collapse-portal-trabajadores').collapse('hide')

  $('#collapse-nuestras-soluciones').removeClass('active')
  $('#collapse-nuestras-soluciones').collapse('hide')
})

// OPEN CLOSE - COLLAPSE FIXED CONTACTO AGIL 
$("#btn-contacto-agil-web").click(function () {
  $('#btn-contacto-agil-web').addClass('d-none')
});
$("#close-collapse-contacto-agil-web").click(function () {
  $('#btn-contacto-agil-web').removeClass('d-none')
});

// BACKDROP BUTTON CONTACTO AGIL XS
$(document).on("click",function(e) {
                    
  let container = $("#nav-contacto-agil");
                     
    if (!container.is(e.target) && container.has(e.target).length === 0) { 

      $("#navbarMenuAgilMobile").collapse('hide')
      $("#btn_nav_fixed_xs").removeClass('d-none')
      
      $('#img_flecha_fixed').removeClass("icon-Flecha-abajo");
      $('#img_flecha_fixed').addClass("icon-Flecha-arriba");

      $("#backdrop-menu-agil").remove();
      $("#nav-contacto-agil").css('z-index','800')
    }
});

// Cambiar icono menu fixed
$("#btn_nav_fixed_xs, .icon-close-agil-xs").on('click', function() {
  $("#btn_nav_fixed_xs").toggleClass('d-none')

  if ($("#navbarMenuAgilMobile").hasClass("show")){
    $("#backdrop-menu-agil").remove();
  }else{
    $('<div id="backdrop-menu-agil" class="modal-backdrop"></div>').appendTo(document.body);

    $("#nav-contacto-agil").css('z-index','1200')
    $("#backdrop-menu-agil").css('z-index','1100')
  }
});

// Anclas ID suavizadas
$("#click-ancla-main-index").on('click', function() {
  $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 400, 'linear');
});

// SCRIPTS ACCORDIONS
$( '#btn-accordion-01' ).click(function() {
  $('#icon-collapse-02, #icon-collapse-03').removeClass('icon-Flecha-arriba')
  $('#icon-collapse-02, #icon-collapse-03').addClass('icon-Flecha-abajo')

  if($("#collapse-servicios-temporales-01").hasClass('show')) {
    $('#icon-collapse-01').removeClass('icon-Flecha-arriba')
    $('#icon-collapse-01').addClass('icon-Flecha-abajo')
  } else{
    $('#icon-collapse-01').removeClass('icon-Flecha-abajo')
    $('#icon-collapse-01').addClass('icon-Flecha-arriba')
  }
})

$( '#btn-accordion-02' ).click(function() {
  $('#icon-collapse-01, #icon-collapse-03').removeClass('icon-Flecha-arriba')
  $('#icon-collapse-01, #icon-collapse-03').addClass('icon-Flecha-abajo')

  if($("#collapse-servicios-temporales-02").hasClass('show')) {
    $('#icon-collapse-02').removeClass('icon-Flecha-arriba')
    $('#icon-collapse-02').addClass('icon-Flecha-abajo')
  } else{
    $('#icon-collapse-02').removeClass('icon-Flecha-abajo')
    $('#icon-collapse-02').addClass('icon-Flecha-arriba')
  }
})

$( '#btn-accordion-03' ).click(function() {
  $('#icon-collapse-01, #icon-collapse-02').removeClass('icon-Flecha-arriba')
  $('#icon-collapse-01, #icon-collapse-02').addClass('icon-Flecha-abajo')

  if($("#collapse-servicios-temporales-03").hasClass('show')) {
    $('#icon-collapse-03').removeClass('icon-Flecha-arriba')
    $('#icon-collapse-03').addClass('icon-Flecha-abajo')
  } else{
    $('#icon-collapse-03').removeClass('icon-Flecha-abajo')
    $('#icon-collapse-03').addClass('icon-Flecha-arriba')
  }
})

// POPOVERS
$(function () {
  $('[data-toggle="popover"]').popover()
})

// CLICK TABS ITEMS TO MODAL
$( '.click-info-xs-01' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Publicación de Oferta Laboral</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Su vacante estará publicada en las principales plataformas de atracción de talento humano.</p></div>' );
})

$( '.click-info-xs-02' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Perfilamiento de Hojas de Vida</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Seleccionamos los candidatos potencialmente aptos de acuerdo al perfil solicitado y las especificaciones del cargo.</p></div>' );
})

$( '.click-info-xs-03' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Entrevista Telefónica</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Entregamos un informe en el que usted podrá encontrar los datos relevantes de sus candidatos:</p><p><span><i class="icon-Flecha-derecha"></i></span>Información personal completa.</p><p><span><i class="icon-Flecha-derecha"></i></span>Experiencia laboral.</p><p><span><i class="icon-Flecha-derecha"></i></span>Registro fotográfico de la persona.</p></div>' );
})

$( '.click-info-xs-04' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Suministro de Hojas de Vida</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Enviamos el número de hojas de vida establecido en nuestro Mapa de Niveles de Cargo.</p></div>' );
})

$( '.click-info-xs-05' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Aplicación de Prueba Prueba Psicotécnica Online TenDisc©</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Evaluamos la personalidad, competencias y riesgos laborales de las personas que vinculará a su organización.</p></div>' );
})

$( '.click-info-xs-06' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Aplicación de Batería de Pruebas Psicotécnicas Online</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Con nuestra plataforma de evaluación de talento humano obtendremos resultados precisos en: </p><p><span><i class="icon-Flecha-derecha"></i></span>Valores e Integridad.</p><p><span><i class="icon-Flecha-derecha"></i></span>Inteligencia.</p><p><span><i class="icon-Flecha-derecha"></i></span>Potencial Comercial.</p><p><span><i class="icon-Flecha-derecha"></i></span>Velocidad y Precisión al Digitar.</p></div>' );
})

$( '.click-info-xs-07' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Entrevista por Competencias</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Entrevistamos a sus candidatos con preguntas resultado de las pruebas psicotécnicas y el análisis de nuestros profesionales experimentados.</p></div>' );
})

$( '.click-info-xs-08' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Referenciación Laboral</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Investigamos la trayectoria laboral de la terna de candidatos desde los tres ángulos más importantes para proceso de selección confiable.</p></div>' );
})


$( '.click-info-xs-09' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>EVALUACIÓN10®</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>¡Ahorre tiempo en la toma de decisión!<br><br>Identifique de forma ágil a los candidatos calificados a través de 5 preguntas técnicas o conceptuales claves, en menos 5 minutos.</p></div>' );
})

$( '.click-info-xs-10' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Gestionamos su entrevista final</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Coordinamos y hacemos seguimiento a la entrevista presencial o virtual entre usted y sus candidatos.</p></div>' );
})

$( '.click-info-xs-11' ).click(function() {
  $( "#tx-modal-title" ).replaceWith( '<div id="tx-modal-title"><p>Estudio Reputacional</p></div>' );
  $( "#tx-modal-description" ).replaceWith( '<div id="tx-modal-description"><p>Investigación de antecedentes a profundidad en bases de datos especializadas.</p></div>' );
})


// TRANSITION CARDS RYS END PAGE
// CAROUSEL 01
// $( '#click-slider-01-01' ).mouseover(function() {
$( '#click-slider-01-01' ).click(function() {
  // if (($(window).width() > 768)){
    $( '#carouselEstudios01' ).carousel(1)
    $( '#carouselEstudios02' ).carousel(0)
    $( '#carouselEstudios03' ).carousel(0)
  // }
})
// $( '#carouselEstudios01' ).mouseleave(function() {
  // if (($(window).width() > 768)){
    // $( '#carouselEstudios01' ).carousel(0)
  // }
// })
  
// $( '#click-slider-01-01' ).click(function() {
//   if (($(window).width() < 768)){
//     $( '#carouselEstudios01' ).carousel(1)
//     $( '#carouselEstudios02' ).carousel(0)
//     $( '#carouselEstudios03' ).carousel(0)

//     setTimeout(function(){ 
//       $('html, body').animate({
//         scrollTop: $('#carouselEstudios01').offset().top - 30
//       }, 'linear');
//     }, 1000);
//   }
// })
// $( '#click-slider-01-02' ).click(function() {
//   if (($(window).width() < 768)){
//     $( '#carouselEstudios01' ).carousel(0)

//     setTimeout(function(){ 
//       $('html, body').animate({
//         scrollTop: $('#carouselEstudios01').offset().top - 30
//       }, 'linear');
//     }, 1000);
//   }
// })


// CAROUSEL 02
// $( '#click-slider-02-01' ).mouseover(function() {
$( '#click-slider-02-01' ).click(function() {
  // if (($(window).width() > 768)){
    $( '#carouselEstudios02' ).carousel(1)
    $( '#carouselEstudios01' ).carousel(0)
    $( '#carouselEstudios03' ).carousel(0)
  // }
})
// $( '#carouselEstudios02' ).mouseleave(function() {
  // if (($(window).width() > 768)){
    // $( '#carouselEstudios02' ).carousel(0)
  // }
// })
  
// $( '#click-slider-02-01' ).click(function() {
//   if (($(window).width() < 768)){
//     $( '#carouselEstudios02' ).carousel(1)
//     $( '#carouselEstudios01' ).carousel(0)
//     $( '#carouselEstudios03' ).carousel(0)

//     setTimeout(function(){ 
//       $('html, body').animate({
//         scrollTop: $('#carouselEstudios02').offset().top - 30
//       }, 'linear');
//     }, 1000);
//   }
// })
// $( '#click-slider-02-02' ).click(function() {
//   if (($(window).width() < 768)){
//     $( '#carouselEstudios02' ).carousel(0)

//     setTimeout(function(){ 
//       $('html, body').animate({
//         scrollTop: $('#carouselEstudios02').offset().top - 30
//       }, 'linear');
//     }, 1000);
//   }
// })


// CAROUSEL 03
// $( '#click-slider-03-01' ).mouseover(function() {
$( '#click-slider-03-01' ).click(function() {
  // if (($(window).width() > 768)){
    $( '#carouselEstudios03' ).carousel(1)
    $( '#carouselEstudios01' ).carousel(0)
    $( '#carouselEstudios02' ).carousel(0)
  // }
})
// $( '#carouselEstudios03' ).mouseleave(function() {
  // if (($(window).width() > 768)){
    // $( '#carouselEstudios03' ).carousel(0)
  // }
// })
  
// $( '#click-slider-03-01' ).click(function() {
//   if (($(window).width() < 768)){
//     $( '#carouselEstudios03' ).carousel(1)
//     $( '#carouselEstudios01' ).carousel(0)
//     $( '#carouselEstudios02' ).carousel(0)

//     setTimeout(function(){ 
//       $('html, body').animate({
//         scrollTop: $('#carouselEstudios03').offset().top - 30
//       }, 'linear');
//     }, 1000);
//   }
// })
// $( '#click-slider-03-02' ).click(function() {
//   if (($(window).width() < 768)){
//     $( '#carouselEstudios03' ).carousel(0)

//     setTimeout(function(){ 
//       $('html, body').animate({
//         scrollTop: $('#carouselEstudios03').offset().top - 30
//       }, 'linear');
//     }, 1000);
//   }
// })
