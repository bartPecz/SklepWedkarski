<?php
session_start();
$PUBLIC = '../../';
require_once $PUBLIC.'app/ConDB.php';

header('Content-Type: application/json');

$login_data = json_decode(file_get_contents('php://input'), true);

$login_name = $login_data[0]['value'];
$login_pass = $login_data[1]['value'];

$sql = "SELECT name, surname, email, login FROM users WHERE login='$login_name' AND password='$login_pass'";

$con = @new ConDB();

$con->connectAll($sql);
$result = $con->result;

if($con->affected_rows == 1){

    $_SESSION['user'] = $result[0];
    echo json_encode($result);
}
else if($con->affected_rows == 0){
    echo json_encode('Brak wyniku');
}
else{
    echo json_encode('Błąd bazy danych');
}

$con->close();
?>
