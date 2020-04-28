<?php
$PUBLIC = '../../';
require_once $PUBLIC.'app/ConDB.php';

header('Content-Type: application/json');

$login_data = json_decode(file_get_contents('php://input'), true);

$login_name = $login_data[0]['value'];
$login_pass = $login_data[1]['value'];

$sql = "SELECT * FROM users WHERE name='$login_name' AND password='$login_pass'";

$con = @new ConDB();

$con->connectAll($sql);
$result = $con->result;

if($con->affected_rows > 0){
    echo json_encode($result);
}
else{
    echo 0;
}

$con->close();
?>
