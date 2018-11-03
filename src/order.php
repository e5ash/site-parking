<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}

$message;
if ($name) {
	$message .= "Имя: $name";
}
if ($phone) {
	$message .= "\nТелефон: $phone";
}
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$to = "olfrey@ya.ru";
$send = mail($to, $subject, $message, $headers);
$to = "e5ash.bro@gmail.com";
$send = mail($to, $subject, $message, $headers);
?>
