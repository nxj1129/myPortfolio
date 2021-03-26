<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $email = $_POST['email'];
    $message = $_POST['message'];

if (empty($email)) {
    $errors[] = 'Email is empty';
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is invalid';
}

if (empty($message)) {
    $errors[] = 'Message is empty';
}

if (empty($errors)) {
    $toEmail = 'niko.jugovac@gmail.com';
    $emailSubject = 'Message from Portfolio';
    $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

    $bodyParagraphs = ["Email: {$email}", "Message:", $message];
    $body = join(PHP_EOL, $bodyParagraphs);

    if (mail($toEmail, $emailSubject, $body, $headers)) {
        header('Location: index.html');
    } else {
        $errorMessage = 'Oops, something went wrong. Please try again later';
    }
} else {
    $allErrors = join('<br/>', $errors);
    $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
}
}
