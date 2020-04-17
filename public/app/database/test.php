<?php 

$json = file_get_contents('php://input');

// Converts it into a PHP object


echo json_encode($json);

?>