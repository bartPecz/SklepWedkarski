<?php

session_start();

if($_SERVER['REQUEST_METHOD'] === 'GET') {

    if(!isset($_SERVER['REQUEST_METHOD'])) exit();

    echo $_SESSION['chooseCategoryFromNavBar'];
    $_SESSION['chooseCategoryFromNavBar'] = null;
    exit();
}

$_SESSION['chooseCategoryFromNavBar'] = file_get_contents('php://input');
?>
