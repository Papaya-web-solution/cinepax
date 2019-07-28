<?php
include "common.php";
$debug = false;

// récupération des données envoyées en POST
$param = (array) json_decode(file_get_contents('php://input'), true);
if ($debug == true) {echoa($param);}

$sep = "<br>";
$body = "";
$body .= "nom: " . $param['nom'] . $sep;
$body .= "email: " . $param['email'] . $sep;
$body .= "message:\n" . nl2br($param['message']);

$subject = "=?utf-8?B?". base64_encode("CINEPAX: Contact via l'APP") ."?=";
$email_expediteur = $param['email'];
$email_destinataire = "bolardmarc@gmail.com";

// To send HTML mail, the Content-type header must be set
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=ISO-8859-1' . "\r\n";
$headers .= 'From: ' . $email_expediteur . '' . "\r\n" ;

$body = utf8_decode($body);

$res = mail($email_destinataire, $subject, $body, $headers);

if ($debug == true) {echoa("e".$res);}

if ($res === true) {
 echo true;
} else {
 echo false;
}




