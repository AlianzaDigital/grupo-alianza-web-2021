//FORMULARIO PQRS EMPLEADO
// SELECT EVENTS COLLAPSE


// GET URL UTM CAMPAINGS
// $(document).ready(function(){
//   let previousURL = document.referrer
//   $('#previousURL').attr('value', previousURL)
  
//     if (previousURL.includes('pauta-facebook-ads')) {
//       $('#getPreviousURL').attr('value','pauta-facebook-ads')
//     }
//     else if (previousURL.includes('pauta-google-search')) {
//       $('#getPreviousURL').attr('value','pauta-google-search')
//     }
//     else if (previousURL.includes('pauta-linkedin-ads')) {
//       $('#getPreviousURL').attr('value','pauta-linkedin-ads')
//     }
//     else if (previousURL.includes('pauta-google-display')) {
//       $('#getPreviousURL').attr('value','pauta-google-display')
//     }
//     else if (previousURL.includes('google-my-business')) {
//       $('#getPreviousURL').attr('value','google-my-business')
//     }
//     else if (previousURL.includes('mailing')) {
//       $('#getPreviousURL').attr('value','mailing')
//     }
//     else{
//       $('#getPreviousURL').attr('value','seo-sitio-web')
//     }

// });

$('.event-funciones-empleado').on('click', function(event){
  let dataClick = $(event.target).data('click');
  if (dataClick === 'Otro'){
    $('#tipo-pqrs-empleado-otro').removeClass('d-none')
    $('#tipo-pqrs-empleado-otro').focus()

    $('#collapseSelectPQRSempleado').collapse('hide')
    $('#tipo-pqrs-empleado').attr('value', dataClick)

    $("#tipo-pqrs-empleado").removeClass("error");
    $("#tipo-pqrs-empleado").addClass("correcto");

    submitMSG_tipo_pqrs_empleado(true, "");
  }
  else{
    $('#tipo-pqrs-empleado-otro').addClass('d-none')

    $('#collapseSelectPQRSempleado').collapse('hide')
    $('#tipo-pqrs-empleado').attr('value', dataClick)

    $("#tipo-pqrs-empleado").removeClass("error");
    $("#tipo-pqrs-empleado").addClass("correcto");

    submitMSG_tipo_pqrs_empleado(true, "");
  }
})


// VALIDATE ALL VARIABLES OF THE FORM
$('#nit-empleado').on('input', function () { 
  this.value = this.value.replace(/[^0-9-]/g,'');
});

$('#telephone-empleado').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

// EMPRESA EMPLEADO
$("#organizacion-empleado").blur(function(){
  if ($("#organizacion-empleado").val() === ""){
    $("#organizacion-empleado").removeClass("correcto");
    $("#organizacion-empleado").addClass("error");
  }
  else{
    $("#organizacion-empleado").removeClass("error");
    $("#organizacion-empleado").addClass("correcto");
  }
});
$("#organizacion-empleado").keyup(function(){
  if ($("#organizacion-empleado").val() === ""){
    $("#organizacion-empleado").removeClass("correcto");
    $("#organizacion-empleado").addClass("error");
  }
  else{
    $("#organizacion-empleado").removeClass("error");
    $("#organizacion-empleado").addClass("correcto");
  }
});

// NIT
$("#nit-empleado").blur(function(){
  if ($("#nit-empleado").val() === ""){
    $("#nit-empleado").removeClass("correcto");
    $("#nit-empleado").addClass("error");
  }
  else{
    $("#nit-empleado").removeClass("error");
    $("#nit-empleado").addClass("correcto");
  }
});
$("#nit-empleado").keyup(function(){
  if ($("#nit-empleado").val() === ""){
    $("#nit-empleado").removeClass("correcto");
    $("#nit-empleado").addClass("error");
  }
  else{
    $("#nit-empleado").removeClass("error");
    $("#nit-empleado").addClass("correcto");
  }
});

// FIRST NAME
$("#first-name-empleado").blur(function(){
  if ($("#first-name-empleado").val() === ""){
    $("#first-name-empleado").removeClass("correcto");
    $("#first-name-empleado").addClass("error");
  }
  else{
    $("#first-name-empleado").removeClass("error");
    $("#first-name-empleado").addClass("correcto");
  }
});
$("#first-name-empleado").keyup(function(){
  if ($("#first-name-empleado").val() === ""){
    $("#first-name-empleado").removeClass("correcto");
    $("#first-name-empleado").addClass("error");
  }
  else{
    $("#first-name-empleado").removeClass("error");
    $("#first-name-empleado").addClass("correcto");
  }
});

// TELEPHONE
$("#telephone-empleado").blur(function(){
  // if ($("#telephone-empleado").val() === ""){
  let valueTelephone = $("#telephone-empleado").val()
  if (valueTelephone.length < 10){
    $("#telephone-empleado").removeClass("correcto");
    $("#telephone-empleado").addClass("error");
    submitMSG_telephone_empleado(false, "Digite un número celular válido");
  }
  else{
    $("#telephone-empleado").removeClass("error");
    $("#telephone-empleado").addClass("correcto");
    submitMSG_telephone_empleado(false, "");
  }
});
$("#telephone-empleado").keyup(function(){
  // if ($("#telephone-empleado").val() === ""){
  let valueTelephone = $("#telephone-empleado").val()
  if (valueTelephone.length < 10){
    $("#telephone-empleado").removeClass("correcto");
    $("#telephone-empleado").addClass("error");
    submitMSG_telephone_empleado(false, "Digite un número celular válido");
  }
  else{
    $("#telephone-empleado").removeClass("error");
    $("#telephone-empleado").addClass("correcto");
    submitMSG_telephone_empleado(false, "");
  }
});

$("#descripcion-pqrs-empleado").blur(function(){
  // if ($("#telephone-empleado").val() === ""){
  let valueDescripcionPQRS = $("#descripcion-pqrs-empleado").val()
  if (valueDescripcionPQRS.length < 75){
    $("#descripcion-pqrs-empleado").removeClass("correcto");
    $("#descripcion-pqrs-empleado").addClass("error");
    submitMSG_descripcion_pqrs_empleado(false, "El número mínimo de caracteres ingresados para esta casilla es 70. Sea más específico.");
  }
  else{
    $("#descripcion-pqrs-empleado").removeClass("error");
    $("#descripcion-pqrs-empleado").addClass("correcto");
    submitMSG_descripcion_pqrs_empleado(false, "");
  }
});
$("#descripcion-pqrs-empleado").keyup(function(){
  // if ($("#telephone-empleado").val() === ""){
  let valueDescripcionPQRS = $("#descripcion-pqrs-empleado").val()
  if (valueDescripcionPQRS.length < 75){
    $("#descripcion-pqrs-empleado").removeClass("correcto");
    $("#descripcion-pqrs-empleado").addClass("error");
    submitMSG_descripcion_pqrs_empleado(false, "El número mínimo de caracteres ingresados para esta casilla es 70. Sea más específico.");
  }
  else{
    $("#descripcion-pqrs-empleado").removeClass("error");
    $("#descripcion-pqrs-empleado").addClass("correcto");
    submitMSG_descripcion_pqrs_empleado(false, "");
  }
});
  
// EMAIL
$("#email-empleado").blur(function(){
  if ($("#email-empleado").val() === ""){
    $("#email-empleado").removeClass("correcto");
    $("#email-empleado").addClass("error");
  }
  else{
    $("#email-empleado").removeClass("error");
    $("#email-empleado").addClass("correcto");
  }
});

// TIPO PQRS
$("#tipo-pqrs-empleado").click(function(){
  if ($("#tipo-pqrs-empleado").val() === ""){
    submitMSG_tipo_pqrs_empleado(false, "Seleccione una opción");

    $("#tipo-pqrs-empleado").removeClass("correcto");
    $("#tipo-pqrs-empleado").addClass("error");
  }
  else{
    submitMSG_tipo_pqrs_empleado(false, "");

    $("#tipo-pqrs-empleado").removeClass("error");
    $("#tipo-pqrs-empleado").addClass("correcto");
  }
});

//  OTRO TIPO PQRS
// $("#tipo-pqrs-empleado-otros").blur(function(){
//   if ($("#tipo-pqrs-empleado-otros").val() === ""){
//     $("#tipo-pqrs-empleado-otros").removeClass("correcto");
//     $("#tipo-pqrs-empleado-otros").addClass("error");
//   }
//   else{
//     $("#tipo-pqrs-empleado-otros").removeClass("error");
//     $("#tipo-pqrs-empleado-otros").addClass("correcto");
//   }
// });
// $("#tipo-pqrs-empleado-otros").keyup(function(){
//   if ($("#tipo-pqrs-empleado-otros").val() === ""){
//     $("#tipo-pqrs-empleado-otros").removeClass("correcto");
//     $("#tipo-pqrs-empleado-otros").addClass("error");
//   }
//   else{
//     $("#tipo-pqrs-empleado-otros").removeClass("error");
//     $("#tipo-pqrs-empleado-otros").addClass("correcto");
//   }
// });


//FORMULARIO DE CONTACTO - contactForm_psa
$("#contactFormEmpleado").validator().on("submit", function (event) {
  let valido_form = 0;
  let valido_select_01 = 0;

  let valueDescripcionPQRS = $("#descripcion-pqrs-empleado").val()
  let valido_description = 0;

  let valido_check = 0;

  //Var Telefono Nombre Correo Etc
  if (event.isDefaultPrevented("")) {
    // handle the invalid form...
    if ($("#organizacion-empleado").val() === ""){
      $("#organizacion-empleado").addClass("error");
    }
    if ($("#nit-empleado").val() === ""){
      $("#nit-empleado").addClass("error");
    }
    if ($("#first-name-empleado").val() === ""){
      $("#first-name-empleado").addClass("error");
    }
    if ($("#telephone-empleado").val() === ""){
      submitMSG_telephone_empleado(false, "Complete este campo");
      $("#telephone-empleado").addClass("error");
    }
    if ($("#email-empleado").val() === ""){
      $("#email-empleado").addClass("error");
    }
  }else {
    event.preventDefault();
    valido_form = 1;
  }

  //Opcion de tipo PQRS
  if ($('#tipo-pqrs-empleado').val() === ''){
    submitMSG_tipo_pqrs_empleado(false, "Seleccione una opción");
    $("#tipo-pqrs-empleado").addClass("error");
  }else {
    event.preventDefault();
    submitMSG_tipo_pqrs_empleado(true, "");
    valido_select_01 = 1;
  }

  //Descripcion PQRS Empleado
  if (valueDescripcionPQRS.length < 75){
    $("#descripcion-pqrs-empleado").removeClass("correcto");
    $("#descripcion-pqrs-empleado").addClass("error");
    submitMSG_descripcion_pqrs_empleado(false, "El número mínimo de caracteres ingresados para esta casilla es 70. Sea más específico.");
  }
  else{
    $("#descripcion-pqrs-empleado").removeClass("error");
    $("#descripcion-pqrs-empleado").addClass("correcto");
    submitMSG_descripcion_pqrs_empleado(false, "");
    valido_description = 1;
  }

  // if ($('#descripcion-pqrs-empleado').val() === ''){
  //   submitMSG_descripcion_pqrs_empleado(false, "Complete este campo");
  //   $("#descripcion-pqrs-empleado").addClass("error");
  // }else {
  //   event.preventDefault();
  //   submitMSG_descripcion_pqrs_empleado(true, "");
  //   valido_description = 1;
  // }

  //Checkbox
  if ($("#checkbox-web-empleado").is(':checked') === false){
    submitMSG_condiciones_empleado(false, "No ha aceptado los términos y condiciones");
  }else {
    event.preventDefault();
    submitMSG_condiciones_empleado(true, "");
    valido_check = 1;
  }

  //Validacion de que los campos estan completos
  if ((valido_form)&&(valido_select_01)&&(valido_description)&&(valido_check) === 1) {
    $("#form-submit").prop("disabled", true);

    $("#seccion-formulario").addClass("animacion-form");
    if($("#seccion-formulario").hasClass("animacion-form")) {
      setTimeout( function(){ 
        $("#seccion-formulario").addClass("d-none");
        $(window).scrollTop(0);
        $("#procesando-datos").removeClass("d-none");
        $("#procesando-datos").addClass("d-block suavizar-opacidad");
      }, 700);
    }
    else{
      $("#seccion-formulario").removeClass("animacion-form");
      $("#seccion-formulario").removeClass("d-none");
    }

    submitFormEmpleado();
    submitMSG_empleado(true, "");
  }else {
    event.preventDefault();
    submitMSG_empleado(false, "Completa los campos que faltan");
  }
});

function submitFormEmpleado(){
  // Initiate Variables With Form Content
  let organizacionEmpleado = $("#organizacion-empleado").val();
  let nit = $("#nit-empleado").val();
  let firstName = $("#first-name-empleado").val();
  let telephone = $("input[name=full_number_empleado]").val();
  let email = $("#email-empleado").val();
  let tipoPQRS = $("#tipo-pqrs-empleado").val();
  let descripcionPQRS = $("#descripcion-pqrs-empleado").val();

  $.ajax({
      type: "POST",
      url:  "php/process_formulario.php",
      data: "organizacionEmpleado=" + organizacionEmpleado +
            "&nit=" + nit +
            "&firstName=" + firstName +
            "&telephone=" + telephone +
            "&email=" + email +
            "&tipoPQRS=" + tipoPQRS +
            "&descripcionPQRS=" + descripcionPQRS,

      success: function(text){
          if (text == "success"){
              formSuccess_empleado();
              
          } else {
              submitMSG_empleado(false,text);
          }
      }
  });
}

function formSuccess_empleado(){
  $("#contactFormEmpleado")[0].reset();
  submitMSG_empleado(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_empleado(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form center";
  } else {
    var msgClasses = "tx-msg-form center";
  }
  $("#msgSubmit_empleado").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_telephone_empleado(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_telephone_empleado").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_tipo_pqrs_empleado(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_tipo_pqrs_empleado").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_descripcion_pqrs_empleado(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_descripcion_pqrs_empleado").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_empleado(valid, msg){
  if(valid){
      var msgClasses = "tx-msg-form";
  } else {
      var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_condiciones_empleado").removeClass().addClass(msgClasses).text(msg);
}
