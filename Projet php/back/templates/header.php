<!Doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>E-commerce</title>
        <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" 
            
            rel="stylesheet" 
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" 
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./styles/main.css" />
  </head >
    
    <body >
    <?php 
    require_once('./classes/session.php');
    $session = new Session();
    if(!$session->get('user')){
        header('Location: login.php');
    }
    $user = $session->get('user');
    require_once('nav.php'); ?>