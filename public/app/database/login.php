<?php

    require_once('./config.php');

    $conn = @new mysqli($serverName, $username, 'as',);

    if ($conn->connect_error) {
        exit("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";

    $sql = "SELECT * FROM Users";
    $result = $conn->query($sql);

    // $record = $result->fetch_assoc();

    echo $result->fetch_assoc()['id'];
    echo $result->fetch_assoc()['id'];

    // echo $record['id'];



    // if ($result->num_rows > 0) {
    // // output data of each row
    //     while($row = $result->fetch_assoc()) {
    //         echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["surname"]. "<br>";
    //     }
    // } else {
    //     echo "0 results";
    // }

$conn->close();


?>