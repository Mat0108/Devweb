<?php
    require_once('classes/session.php');
    $session = new Session();
    session_destroy();
    header('Location: login.php');
?>