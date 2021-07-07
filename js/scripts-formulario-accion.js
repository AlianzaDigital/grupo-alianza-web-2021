//FORMULARIO PC

//AÑADIR CHECK VALIDO AL ABRIR POPUP
$("#aceptar_terminos_popUp_web").on("click", function() {

  if ($("#checkbox-web").is(':checked')){
      $('#modalTerminosCondiciones').modal('hide');
  }
  else{
      $('#modalTerminosCondiciones').modal('hide');
      $("#checkbox-web").prop("checked", true);
  }
});


// SELECT EVENTS COLLAPSE
$('.event-funciones').on('click', function(event){
  let dataClick = $(event.target).data('click');
  if (dataClick === 'Otro'){
    $('#funciones-otro').removeClass('d-none')
    $('#funciones-otro').focus()

    $('#collapseSelectFunciones').collapse('hide')
    $('#funciones').attr('value', dataClick)

    $("#funciones").removeClass("error");
    $("#funciones").addClass("correcto");

    submitMSG_funciones(true, "");
  }
  else{
    $('#funciones-otro').addClass('d-none')

    $('#collapseSelectFunciones').collapse('hide')
    $('#funciones').attr('value', dataClick)

    $("#funciones").removeClass("error");
    $("#funciones").addClass("correcto");

    submitMSG_funciones(true, "");
  }
})

// GET URL UTM CAMPAINGS
$(document).ready(function(){
  let previousURL = document.referrer
  $('#previousURL').attr('value', previousURL)
  
    if (previousURL.includes('pauta-facebook-ads')) {
      $('#getPreviousURL').attr('value','pauta-facebook-ads')
    }
    else if (previousURL.includes('pauta-google-search')) {
      $('#getPreviousURL').attr('value','pauta-google-search')
    }
    else if (previousURL.includes('pauta-linkedin-ads')) {
      $('#getPreviousURL').attr('value','pauta-linkedin-ads')
    }
    else if (previousURL.includes('pauta-google-display')) {
      $('#getPreviousURL').attr('value','pauta-google-display')
    }
    else if (previousURL.includes('google-my-business')) {
      $('#getPreviousURL').attr('value','google-my-business')
    }
    else if (previousURL.includes('mailing')) {
      $('#getPreviousURL').attr('value','mailing')
    }
    else{
      $('#getPreviousURL').attr('value','seo-sitio-web')
    }

});



// VALIDATE ALL VARIABLES OF THE FORM
$('#nit').on('input', function () { 
  this.value = this.value.replace(/[^0-9-]/g,'');
});

$('#telephone').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

$('#telephone-line').on('input', function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
});

// EMPRESA
$("#empresa").blur(function(){
  if ($("#empresa").val() === ""){
    $("#empresa").removeClass("correcto");
    $("#empresa").addClass("error");
  }
  else{
    $("#empresa").removeClass("error");
    $("#empresa").addClass("correcto");
  }
});
$("#empresa").keyup(function(){
  if ($("#empresa").val() === ""){
    $("#empresa").removeClass("correcto");
    $("#empresa").addClass("error");
  }
  else{
    $("#empresa").removeClass("error");
    $("#empresa").addClass("correcto");
  }
});

// NIT
$("#nit").blur(function(){
  if ($("#nit").val() === ""){
    $("#nit").removeClass("correcto");
    $("#nit").addClass("error");
  }
  else{
    $("#nit").removeClass("error");
    $("#nit").addClass("correcto");
  }
});
$("#nit").keyup(function(){
  if ($("#nit").val() === ""){
    $("#nit").removeClass("correcto");
    $("#nit").addClass("error");
  }
  else{
    $("#nit").removeClass("error");
    $("#nit").addClass("correcto");
  }
});

// FIRST NAME
$("#first-name").blur(function(){
  if ($("#first-name").val() === ""){
    $("#first-name").removeClass("correcto");
    $("#first-name").addClass("error");
  }
  else{
    $("#first-name").removeClass("error");
    $("#first-name").addClass("correcto");
  }
});
$("#first-name").keyup(function(){
  if ($("#first-name").val() === ""){
    $("#first-name").removeClass("correcto");
    $("#first-name").addClass("error");
  }
  else{
    $("#first-name").removeClass("error");
    $("#first-name").addClass("correcto");
  }
});

// TELEPHONE
$("#telephone").blur(function(){
  // if ($("#telephone").val() === ""){
  let valueTelephone = $("#telephone").val()
  if (valueTelephone.length < 10){
    $("#telephone").removeClass("correcto");
    $("#telephone").addClass("error");
    submitMSG_telephone(false, "Digite un número celular válido");
  }
  else{
    $("#telephone").removeClass("error");
    $("#telephone").addClass("correcto");
    submitMSG_telephone(false, "");
  }
});
$("#telephone").keyup(function(){
  // if ($("#telephone").val() === ""){
  let valueTelephone = $("#telephone").val()
  if (valueTelephone.length < 10){
    $("#telephone").removeClass("correcto");
    $("#telephone").addClass("error");
    submitMSG_telephone(false, "Digite un número celular válido");
  }
  else{
    $("#telephone").removeClass("error");
    $("#telephone").addClass("correcto");
    submitMSG_telephone(false, "");
  }
});
  
// EMAIL
$("#email").blur(function(){
  if ($("#email").val() === ""){
    $("#email").removeClass("correcto");
    $("#email").addClass("error");
  }
  else{
    $("#email").removeClass("error");
    $("#email").addClass("correcto");
  }
});

// FUNCIONES
$("#funciones").click(function(){
  if ($("#funciones").val() === ""){
    submitMSG_funciones(false, "Seleccione una opción");

    $("#funciones").removeClass("correcto");
    $("#funciones").addClass("error");
  }
  else{
    submitMSG_funciones(false, "");

    $("#funciones").removeClass("error");
    $("#funciones").addClass("correcto");
  }
});

// FUNCIONES OTROS
$("#funciones-otros").blur(function(){
  if ($("#funciones-otros").val() === ""){
    $("#funciones-otros").removeClass("correcto");
    $("#funciones-otros").addClass("error");
  }
  else{
    $("#funciones-otros").removeClass("error");
    $("#funciones-otros").addClass("correcto");
  }
});
$("#funciones-otros").keyup(function(){
  if ($("#funciones-otros").val() === ""){
    $("#funciones-otros").removeClass("correcto");
    $("#funciones-otros").addClass("error");
  }
  else{
    $("#funciones-otros").removeClass("error");
    $("#funciones-otros").addClass("correcto");
  }
});


//Checkbox servicios de interes
// Select 01
$("#checkbox-opcion-03-a").click(function(){
  if ($("#checkbox-opcion-03-a").is(':checked')){
    $("#checkbox-opcion-03-a").attr("value", "| Administración de personal temporal |");
  }else {
    $("#checkbox-opcion-03-a").attr("value", "");
  }
});

// Select 02
$("#checkbox-opcion-03-b").click(function(){
  if ($("#checkbox-opcion-03-b").is(':checked')){
    $("#checkbox-opcion-03-b").attr("value", "| Outsourcing de nómina |");
  }else {
    $("#checkbox-opcion-03-b").attr("value", "");
  }
});

// Select 03
$("#checkbox-opcion-03-c").click(function(){
  if ($("#checkbox-opcion-03-c").is(':checked')){
    $("#checkbox-opcion-03-c").attr("value", "| Reclutamiento y selección de personal |");
  }else {
    $("#checkbox-opcion-03-c").attr("value", "");
  }
});

// Select 04
$("#checkbox-opcion-03-d").click(function(){
  if ($("#checkbox-opcion-03-d").is(':checked')){
    $("#checkbox-opcion-03-d").attr("value", "| Estudio de antecedentes |");
  }else {

    $("#checkbox-opcion-03-d").attr("value", "");
  }
});

// Select 05
$("#checkbox-opcion-03-e").click(function(){
  if ($("#checkbox-opcion-03-e").is(':checked')){
    $("#checkbox-opcion-03-e").attr("value", "| Prueba de poligrafía |");
  }else {

    $("#checkbox-opcion-03-e").attr("value", "");
  }
});

// Select 06
$("#checkbox-opcion-03-f").click(function(){
  if ($("#checkbox-opcion-03-f").is(':checked')){
    $("#checkbox-opcion-03-f").attr("value", "| Visitas domiciliarias |");
  }else {

    $("#checkbox-opcion-03-f").attr("value", "");
  }
});


// Select 07
$("#checkbox-opcion-03-g").click(function(){
  if ($("#checkbox-opcion-03-g").is(':checked')){
    $("#checkbox-opcion-03-g").attr("value", "| Pruebas psicotécnicas |");
  }else {

    $("#checkbox-opcion-03-g").attr("value", "");
  }
});

//FORMULARIO DE CONTACTO - contactForm_psa
$("#contactForm").validator().on("submit", function (event) {
  let valido_form = 0;
  let valido_select_01 = 0;
  let valido_select_02 = 0;
  let valido_check = 0;

  //Var Telefono Nombre Correo Etc
  if (event.isDefaultPrevented("")) {
    // handle the invalid form...
    if ($("#empresa").val() === ""){
      $("#empresa").addClass("error");
    }
    if ($("#nit").val() === ""){
      $("#nit").addClass("error");
    }
    if ($("#first-name").val() === ""){
      $("#first-name").addClass("error");
    }
    if ($("#telephone").val() === ""){
      submitMSG_telephone(false, "Complete este campo");
      $("#telephone").addClass("error");
    }
    if ($("#email").val() === ""){
      $("#email").addClass("error");
    }
  }else {
    event.preventDefault();
    valido_form = 1;
  }

  //Opcion de tipo casa
  if ($('#funciones').val() === ''){
    submitMSG_funciones(false, "Seleccione una opción");
    $("#funciones").addClass("error");
  }else {
    event.preventDefault();
    submitMSG_funciones(true, "");
    valido_select_01 = 1;
  }

  if (($("input[name='checkbox-cotizar-servicios']").is(':checked') === false)){
    submitMSG_servicios_cotizar(false, "Seleccione al menos una opción");
  }else {
    event.preventDefault();
    submitMSG_servicios_cotizar(true, "");
    valido_select_02 = 1;
  }

  //Checkbox
  if ($("#checkbox-web").is(':checked') === false){
    submitMSG_condiciones(false, "No ha aceptado los términos y condiciones");
  }else {
    event.preventDefault();
    submitMSG_condiciones(true, "");
    valido_check = 1;
  }

  //Validacion de que los campos estan completos
  if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_check) === 1) {
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

    submitForm();
    submitMSG(true, "");
  }else {
    event.preventDefault();
    submitMSG(false, "Complete los campos que faltan");
  }
});

function submitForm(){
  // Initiate Variables With Form Content
  let empresa = $("#empresa").val();
  let nit = $("#nit").val();
  let firstName = $("#first-name").val();
  // var telephone = $("#telephone").val();
  let telephone = $("input[name=full_number]").val();
  let telephoneLine = $("#telephone-line").val();
  let email = $("#email").val();
  let funciones = $("#funciones").val();
  let funcionesOtro = $("#funciones-otro").val();
  let serviciosCotizar = 
    ($("#checkbox-opcion-03-a").val()) + 
    ($("#checkbox-opcion-03-b").val()) + 
    ($("#checkbox-opcion-03-c").val()) + 
    ($("#checkbox-opcion-03-d").val()) + 
    ($("#checkbox-opcion-03-e").val()) + 
    ($("#checkbox-opcion-03-f").val()) + 
    ($("#checkbox-opcion-03-g").val()) ;

  let getPreviousURL = ($('#getPreviousURL').val());
  let previousURL = ($('#previousURL').val());

  $.ajax({
      type: "POST",
      url:  "php/process_formulario.php",
      data: "empresa=" + empresa +
            "&nit=" + nit +
            "&firstName=" + firstName +
            "&telephone=" + telephone +
            "&telephoneLine=" + telephoneLine +
            "&email=" + email +
            "&funciones=" + funciones +
            "&funcionesOtro=" + funcionesOtro +
            "&serviciosCotizar=" + serviciosCotizar +

            "&getPreviousURL=" + getPreviousURL +
            "&previousURL=" + previousURL,

      success: function(text){
          if (text == "success"){
              formSuccess();
              window.location.href = "gracias.html";
          } else {
              submitMSG(false,text);
          }
      }
  });
}

function formSuccess(){
  $("#contactForm")[0].reset();
  submitMSG(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form center";
  } else {
    var msgClasses = "tx-msg-form center";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_telephone(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_telephone").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_funciones(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_funciones").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_servicios_cotizar(valid, msg){
  if(valid){
    var msgClasses = "tx-msg-form";
  } else {
    var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_servicios_cotizar").removeClass().addClass(msgClasses).text(msg);
}


function submitMSG_condiciones(valid, msg){
  if(valid){
      var msgClasses = "tx-msg-form";
  } else {
      var msgClasses = "tx-msg-form";
  }
  $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);
}
