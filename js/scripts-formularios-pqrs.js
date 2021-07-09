//FORMULARIO PQRS EMPRESA 
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
// INTEL INPUT TRANSITION COLLAPSE PQRS
$(document).ready(function(){
  $('#modalPQRSenviada').on('hide.bs.modal', function () {
    window.location.reload();
  })

  $('#collapse-pqrs-01').on('show.bs.collapse', function () {
    let inputEmpresa = document.querySelector("#telephone-empresa");
    window.intlTelInput(inputEmpresa, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      hiddenInput: "full_number_empresa",
      initialCountry: "co",
      // geoIpLookup: function(callback) {
      //   $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true,
      utilsScript: "js/utils.min.js",
    })
  })

  $('#collapse-pqrs-02').on('show.bs.collapse', function () {
    let inputEmpleado = document.querySelector("#telephone-empleado");
    window.intlTelInput(inputEmpleado, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      hiddenInput: "full_number_empleado",
      initialCountry: "co",
      // geoIpLookup: function(callback) {
      //   $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true,
      utilsScript: "js/utils.min.js",
    })
  })
})

// SELECT EVENTS COLLAPSE
$('.event-funciones-empresa').on('click', function(event){
  let dataClick = $(event.target).data('click');
  if (dataClick === 'Otro'){
    $('#tipo-pqrs-empresa-otro').removeClass('d-none')
    $('#tipo-pqrs-empresa-otro').focus()

    $('#collapseSelectPQRSempresa').collapse('hide')
    $('#tipo-pqrs-empresa').attr('value', dataClick)

    $("#tipo-pqrs-empresa").removeClass("error");
    $("#tipo-pqrs-empresa").addClass("correcto");

    submitMSG_tipo_pqrs_empresa(true, "");
  }
  else{
    $('#tipo-pqrs-empresa-otro').addClass('d-none')

    $('#collapseSelectPQRSempresa').collapse('hide')
    $('#tipo-pqrs-empresa').attr('value', dataClick)

    $("#tipo-pqrs-empresa").removeClass("error");
    $("#tipo-pqrs-empresa").addClass("correcto");

    submitMSG_tipo_pqrs_empresa(true, "");
  }
})


// VALIDATE ALL VARIABLES OF THE FORM
$('#nit-empresa').on('input', function () { 
  this.value = this.value.replace(/[^0-9-]/g,'');
});

$('#telephone-empresa').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

// EMPRESA
$("#organizacion-empresa").blur(function(){
  if ($("#organizacion-empresa").val() === ""){
    $("#organizacion-empresa").removeClass("correcto");
    $("#organizacion-empresa").addClass("error");
  }
  else{
    $("#organizacion-empresa").removeClass("error");
    $("#organizacion-empresa").addClass("correcto");
  }
});
$("#organizacion-empresa").keyup(function(){
  if ($("#organizacion-empresa").val() === ""){
    $("#organizacion-empresa").removeClass("correcto");
    $("#organizacion-empresa").addClass("error");
  }
  else{
    $("#organizacion-empresa").removeClass("error");
    $("#organizacion-empresa").addClass("correcto");
  }
});

// NIT
$("#nit-empresa").blur(function(){
  if ($("#nit-empresa").val() === ""){
    $("#nit-empresa").removeClass("correcto");
    $("#nit-empresa").addClass("error");
  }
  else{
    $("#nit-empresa").removeClass("error");
    $("#nit-empresa").addClass("correcto");
  }
});
$("#nit-empresa").keyup(function(){
  if ($("#nit-empresa").val() === ""){
    $("#nit-empresa").removeClass("correcto");
    $("#nit-empresa").addClass("error");
  }
  else{
    $("#nit-empresa").removeClass("error");
    $("#nit-empresa").addClass("correcto");
  }
});

// FIRST NAME
$("#first-name-empresa").blur(function(){
  if ($("#first-name-empresa").val() === ""){
    $("#first-name-empresa").removeClass("correcto");
    $("#first-name-empresa").addClass("error");
  }
  else{
    $("#first-name-empresa").removeClass("error");
    $("#first-name-empresa").addClass("correcto");
  }
});
$("#first-name-empresa").keyup(function(){
  if ($("#first-name-empresa").val() === ""){
    $("#first-name-empresa").removeClass("correcto");
    $("#first-name-empresa").addClass("error");
  }
  else{
    $("#first-name-empresa").removeClass("error");
    $("#first-name-empresa").addClass("correcto");
  }
});

// TELEPHONE
$("#telephone-empresa").blur(function(){
  // if ($("#telephone-empresa").val() === ""){
  let valueTelephone = $("#telephone-empresa").val()
  if (valueTelephone.length < 10){
    $("#telephone-empresa").removeClass("correcto");
    $("#telephone-empresa").addClass("error");
    submitMSG_telephone_empresa(false, "Digite un número celular válido");
  }
  else{
    $("#telephone-empresa").removeClass("error");
    $("#telephone-empresa").addClass("correcto");
    submitMSG_telephone_empresa(false, "");
  }
});
$("#telephone-empresa").keyup(function(){
  // if ($("#telephone-empresa").val() === ""){
  let valueTelephone = $("#telephone-empresa").val()
  if (valueTelephone.length < 10){
    $("#telephone-empresa").removeClass("correcto");
    $("#telephone-empresa").addClass("error");
    submitMSG_telephone_empresa(false, "Digite un número celular válido");
  }
  else{
    $("#telephone-empresa").removeClass("error");
    $("#telephone-empresa").addClass("correcto");
    submitMSG_telephone_empresa(false, "");
  }
});

$("#descripcion-pqrs-empresa").blur(function(){
  // if ($("#telephone-empresa").val() === ""){
  let valueDescripcionPQRS = $("#descripcion-pqrs-empresa").val()
  if (valueDescripcionPQRS.length < 70){
    $("#descripcion-pqrs-empresa").removeClass("correcto");
    $("#descripcion-pqrs-empresa").addClass("error");
    submitMSG_descripcion_pqrs_empresa(false, "Ingrese un mínimo de 70 caracteres");
  }
  else{
    $("#descripcion-pqrs-empresa").removeClass("error");
    $("#descripcion-pqrs-empresa").addClass("correcto");
    submitMSG_descripcion_pqrs_empresa(false, "");
  }
});
$("#descripcion-pqrs-empresa").keyup(function(){
  // if ($("#telephone-empresa").val() === ""){
  let valueDescripcionPQRS = $("#descripcion-pqrs-empresa").val()
  if (valueDescripcionPQRS.length < 70){
    $("#descripcion-pqrs-empresa").removeClass("correcto");
    $("#descripcion-pqrs-empresa").addClass("error");
    submitMSG_descripcion_pqrs_empresa(false, "Ingrese un mínimo de 70 caracteres");
  }
  else{
    $("#descripcion-pqrs-empresa").removeClass("error");
    $("#descripcion-pqrs-empresa").addClass("correcto");
    submitMSG_descripcion_pqrs_empresa(false, "");
  }
});
  
// EMAIL
$("#email-empresa").blur(function(){
  if ($("#email-empresa").val() === ""){
    $("#email-empresa").removeClass("correcto");
    $("#email-empresa").addClass("error");
  }
  else{
    $("#email-empresa").removeClass("error");
    $("#email-empresa").addClass("correcto");
  }
});

// TIPO PQRS
$("#tipo-pqrs-empresa").click(function(){
  if ($("#tipo-pqrs-empresa").val() === ""){
    submitMSG_tipo_pqrs_empresa(false, "Seleccione una opción");

    $("#tipo-pqrs-empresa").removeClass("correcto");
    $("#tipo-pqrs-empresa").addClass("error");
  }
  else{
    submitMSG_tipo_pqrs_empresa(false, "");

    $("#tipo-pqrs-empresa").removeClass("error");
    $("#tipo-pqrs-empresa").addClass("correcto");
  }
});

//  OTRO TIPO PQRS
// $("#tipo-pqrs-empresa-otros").blur(function(){
//   if ($("#tipo-pqrs-empresa-otros").val() === ""){
//     $("#tipo-pqrs-empresa-otros").removeClass("correcto");
//     $("#tipo-pqrs-empresa-otros").addClass("error");
//   }
//   else{
//     $("#tipo-pqrs-empresa-otros").removeClass("error");
//     $("#tipo-pqrs-empresa-otros").addClass("correcto");
//   }
// });
// $("#tipo-pqrs-empresa-otros").keyup(function(){
//   if ($("#tipo-pqrs-empresa-otros").val() === ""){
//     $("#tipo-pqrs-empresa-otros").removeClass("correcto");
//     $("#tipo-pqrs-empresa-otros").addClass("error");
//   }
//   else{
//     $("#tipo-pqrs-empresa-otros").removeClass("error");
//     $("#tipo-pqrs-empresa-otros").addClass("correcto");
//   }
// });


//FORMULARIO DE CONTACTO - Empresa
$("#contactFormEmpresa").validator().on("submit", function (event) {
  let valido_form = 0;
  let valido_select_01 = 0;

  let valueDescripcionPQRS = $("#descripcion-pqrs-empresa").val()
  let valido_description = 0;

  let valido_check = 0;

  //Var Telefono Nombre Correo Etc
  if (event.isDefaultPrevented("")) {
    // handle the invalid form...
    if ($("#organizacion-empresa").val() === ""){
      $("#organizacion-empresa").addClass("error");
    }
    if ($("#nit-empresa").val() === ""){
      $("#nit-empresa").addClass("error");
    }
    if ($("#first-name-empresa").val() === ""){
      $("#first-name-empresa").addClass("error");
    }
    if ($("#telephone-empresa").val() === ""){
      submitMSG_telephone_empresa(false, "Complete este campo");
      $("#telephone-empresa").addClass("error");
    }
    if ($("#email-empresa").val() === ""){
      $("#email-empresa").addClass("error");
    }
  }else {
    event.preventDefault();
    valido_form = 1;
  }

  //Opcion de tipo PQRS
  if ($('#tipo-pqrs-empresa').val() === ''){
    submitMSG_tipo_pqrs_empresa(false, "Seleccione una opción");
    $("#tipo-pqrs-empresa").addClass("error");
  }else {
    event.preventDefault();
    submitMSG_tipo_pqrs_empresa(true, "");
    valido_select_01 = 1;
  }

  //Descripcion PQRS Empresa
  if (valueDescripcionPQRS.length < 70){
    $("#descripcion-pqrs-empresa").removeClass("correcto");
    $("#descripcion-pqrs-empresa").addClass("error");
    submitMSG_descripcion_pqrs_empresa(false, "Complete este campo");
  }
  else{
    $("#descripcion-pqrs-empresa").removeClass("error");
    $("#descripcion-pqrs-empresa").addClass("correcto");
    submitMSG_descripcion_pqrs_empresa(false, "");
    valido_description = 1;
  }

  // if ($('#descripcion-pqrs-empresa').val() === ''){
  //   submitMSG_descripcion_pqrs_empresa(false, "Complete este campo");
  //   $("#descripcion-pqrs-empresa").addClass("error");
  // }else {
  //   event.preventDefault();
  //   submitMSG_descripcion_pqrs_empresa(true, "");
  //   valido_description = 1;
  // }

  //Checkbox
  if ($("#checkbox-web-empresa").is(':checked') === false){
    submitMSG_condiciones_empresa(false, "No ha aceptado los términos y condiciones");
  }else {
    event.preventDefault();
    submitMSG_condiciones_empresa(true, "");
    valido_check = 1;
  }

  //Validacion de que los campos estan completos
  if ((valido_form)&&(valido_select_01)&&(valido_description)&&(valido_check) === 1) {
    $("#form-submit-empresa").prop("disabled", true);

    submitFormEmpresa();
    submitMSG_empresa(true, "");
  }else {
    event.preventDefault();
    submitMSG_empresa(false, "Complete los campos que faltan");
  }
});

function submitFormEmpresa(){
  // Initiate Variables With Form Content
  let empresa = $("#organizacion-empresa").val();
  let nit = $("#nit-empresa").val();
  let firstName = $("#first-name-empresa").val();
  let telephone = $("input[name=full_number_empresa]").val();
  let email = $("#email-empresa").val();
  let tipoPQRS = $("#tipo-pqrs-empresa").val();
  let descripcionPQRS = $("#descripcion-pqrs-empresa").val();

  $.ajax({
      type: "POST",
      url:  "php/process_formulario_pqrs_empresa.php",
      data: "empresa=" + empresa +
            "&nit=" + nit +
            "&firstName=" + firstName +
            "&telephone=" + telephone +
            "&email=" + email +
            "&tipoPQRS=" + tipoPQRS +
            "&descripcionPQRS=" + descripcionPQRS,

      success: function(text){
          if (text == "success"){
            formSuccess_empresa();
            $('#modalPQRSenviada').modal('show')
          } else {
            submitMSG_empresa(false,text);
          }
      }
  });
}

function formSuccess_empresa(){
  $("#contactFormEmpresa")[0].reset();
  submitMSG_empresa(true, "")
}

function submitMSG_empresa(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form center";
  } else {
    var msgClasses = "tx-msg-form center";
  }
  $("#msgSubmit_empresa").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_telephone_empresa(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_telephone_empresa").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_tipo_pqrs_empresa(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_tipo_pqrs_empresa").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_descripcion_pqrs_empresa(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_descripcion_pqrs_empresa").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_empresa(valid, msg){
  if(valid){
      var msgClasses = "tx-msg-form";
  } else {
      var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_condiciones_empresa").removeClass().addClass(msgClasses).text(msg);
}

//FORMULARIO PQRS EMPLEADO

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

// SELECT EVENTS COLLAPSE
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
$('#identificacion-empleado').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
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
$("#identificacion-empleado").blur(function(){
  if ($("#identificacion-empleado").val() === ""){
    $("#identificacion-empleado").removeClass("correcto");
    $("#identificacion-empleado").addClass("error");
  }
  else{
    $("#identificacion-empleado").removeClass("error");
    $("#identificacion-empleado").addClass("correcto");
  }
});
$("#identificacion-empleado").keyup(function(){
  if ($("#identificacion-empleado").val() === ""){
    $("#identificacion-empleado").removeClass("correcto");
    $("#identificacion-empleado").addClass("error");
  }
  else{
    $("#identificacion-empleado").removeClass("error");
    $("#identificacion-empleado").addClass("correcto");
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


// CARGO EMPLEADO
$("#cargo-empleado").blur(function(){
  if ($("#cargo-empleado").val() === ""){
    $("#cargo-empleado").removeClass("correcto");
    $("#cargo-empleado").addClass("error");
  }
  else{
    $("#cargo-empleado").removeClass("error");
    $("#cargo-empleado").addClass("correcto");
  }
});
$("#cargo-empleado").keyup(function(){
  if ($("#cargo-empleado").val() === ""){
    $("#cargo-empleado").removeClass("correcto");
    $("#cargo-empleado").addClass("error");
  }
  else{
    $("#cargo-empleado").removeClass("error");
    $("#cargo-empleado").addClass("correcto");
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
  if (valueDescripcionPQRS.length < 70){
    $("#descripcion-pqrs-empleado").removeClass("correcto");
    $("#descripcion-pqrs-empleado").addClass("error");
    submitMSG_descripcion_pqrs_empleado(false, "Ingrese un mínimo de 70 caracteres");
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
  if (valueDescripcionPQRS.length < 70){
    $("#descripcion-pqrs-empleado").removeClass("correcto");
    $("#descripcion-pqrs-empleado").addClass("error");
    submitMSG_descripcion_pqrs_empleado(false, "Ingrese un mínimo de 70 caracteres");
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


//FORMULARIO DE CONTACTO - Empleado
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
    if ($("#identificacion-empleado").val() === ""){
      $("#identificacion-empleado").addClass("error");
    }
    if ($("#first-name-empleado").val() === ""){
      $("#first-name-empleado").addClass("error");
    }
    if ($("#cargo-empleado").val() === ""){
      $("#cargo-empleado").addClass("error");
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
  if (valueDescripcionPQRS.length < 70){
    $("#descripcion-pqrs-empleado").removeClass("correcto");
    $("#descripcion-pqrs-empleado").addClass("error");
    submitMSG_descripcion_pqrs_empleado(false, "Complete este campo");
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
    $("#form-submit-empleado").prop("disabled", true);

    submitFormEmpleado();
    submitMSG_empleado(true, "");
  }else {
    event.preventDefault();
    submitMSG_empleado(false, "Complete los campos que faltan");
  }
});

function submitFormEmpleado(){
  // Initiate Variables With Form Content
  let empresa = $("#organizacion-empleado").val();
  let idEmpleado = $("#identificacion-empleado").val();
  let firstName = $("#first-name-empleado").val();
  let telephone = $("input[name=full_number_empleado]").val();
  let cargoEmpleado = $("#cargo-empleado").val();
  let email = $("#email-empleado").val();
  let tipoPQRS = $("#tipo-pqrs-empleado").val();
  let descripcionPQRS = $("#descripcion-pqrs-empleado").val();

  $.ajax({
      type: "POST",
      url:  "php/process_formulario_pqrs_empleado.php",
      data: "empresa=" + empresa +
            "&idEmpleado=" + idEmpleado +
            "&firstName=" + firstName +
            "&telephone=" + telephone +
            "&cargoEmpleado=" + cargoEmpleado +
            "&email=" + email +
            "&tipoPQRS=" + tipoPQRS +
            "&descripcionPQRS=" + descripcionPQRS,

      success: function(text){
          if (text == "success"){
            formSuccess_empleado();
            $('#modalPQRSenviada').modal('show')
          } else {
            submitMSG_empleado(false,text);
          }
      }
  });
}

function formSuccess_empleado(){
  $("#contactFormEmpleado")[0].reset();
  submitMSG_empleado(true, "")
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
