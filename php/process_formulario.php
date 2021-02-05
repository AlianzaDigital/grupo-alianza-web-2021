<?php

$errorMSG = "";

// URL DECODE ORIGIN
if (empty($_POST["getPreviousURL"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $getPreviousURL= $_POST["getPreviousURL"];
}

// URL
if (empty($_POST["previousURL"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $previousURL = $_POST["previousURL"];
}

// EMPRESA
if (empty($_POST["empresa"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $empresa = $_POST["empresa"];

}

// NIT
if (empty($_POST["nit"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $nit = $_POST["nit"];

}

// FIRST NAME
if (empty($_POST["firstName"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $firstName = $_POST["firstName"];
}

// TELEPHONE
if (empty($_POST["telephone"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $telephone = $_POST["telephone"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $email = $_POST["email"];
}

// FUNCIONES
if (empty($_POST["funciones"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $funciones = $_POST["funciones"];
}

// FUNCIONES OTROS
$funcionesOtro = $_POST["funcionesOtro"];

// PROCESO SELECCION
if (empty($_POST["serviciosCotizar"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $serviciosCotizar = $_POST["serviciosCotizar"];
}

/****************************** ENVIAR A CRM SALES UP ******************************/
$url = 'https://api.salesup.com/integraciones/P02AP198A57CF-B555-4320-A107-08AD0FA39368';
$params = array(
    'empresa' => ($empresa), 
    'nombre' => ($firstName),
    'puesto' => ($funciones)." | ".($funcionesOtro),
    'movil' => ($telephone),
    'correo' => ($email),
    'origen' => ($getPreviousURL),
    'comentarios' => ("Nuevo lead Grupo Alianza 2021: Formulario Acción")." | ".("NIT: ".$nit)." | ".("Servicios a cotizar: ".$serviciosCotizar)." | ".("Call UTM: ".$previousURL)
);


$request = curl_init();
curl_setopt($request, CURLOPT_URL, $url);
curl_setopt($request, CURLOPT_POST, 1);
curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($request, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 60);
curl_setopt($request, CURLOPT_TIMEOUT, 60);

$result = curl_exec($request);

curl_close($request);
//print_r($result); 



/****************************** ENVIAR EMAIL ******************************/
//CONTACTOS Y ASUNTO
$Contacts = array('soluciones@grupo-alianza.com','grupoalianzadigital@gmail.com','controlmarketingleads@gmail.com');
$Subject = "Nuevo lead Grupo Alianza 2021: Formulario Acción";

// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Empresa: ");
$Body .= utf8_decode($empresa);
$Body .= "\n";

$Body .= utf8_decode("NIT: ");
$Body .= utf8_decode($nit);
$Body .= "\n";

$Body .= utf8_decode("Nombre y Apellido: ");
$Body .= utf8_decode($firstName);
$Body .= "\n";

$Body .= utf8_decode("Celular: ");
$Body .= utf8_decode($telephone);
$Body .= "\n";

$Body .= utf8_decode("Correo eletrónico: ");
$Body .= utf8_decode($email);
$Body .= "\n";

$Body .= utf8_decode("Descripción de funciones: ");
$Body .= utf8_decode($funciones);
$Body .= "\n";

$Body .= utf8_decode("Otro rol: ");
$Body .= utf8_decode($funcionesOtro);
$Body .= "\n";

$Body .= utf8_decode("Servicios a cotizar: ");
$Body .= utf8_decode($serviciosCotizar);
$Body .= "\n";

// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:".$email);
}

// redirect to success page
if ($success && $errorMSG == ""){
    echo "success";
}
else{
    if($errorMSG == ""){
        echo "Algo salío mal :(";
    }
    else {
        echo $errorMSG;
    }
}

?>
