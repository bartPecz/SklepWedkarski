<?php
    // $PUBLIC = '../../';

    require_once $PUBLIC.'app/config.php';
    require_once $PUBLIC.'viewsComponent/mainContentBlocks.php';
    require_once $PUBLIC.'app/ConDB.php';


    $sql_ask = Array(
        'Polecane' =>'SELECT * FROM products ORDER BY buy_count DESC LIMIT 50',
        'Najniższa cena' => 'SELECT * FROM products ORDER BY price LIMIT 50',
        'Najwyższa cena' => 'SELECT * FROM products ORDER BY price DESC LIMIT 50'
    );

    $con = new ConDB();

    foreach($sql_ask as $title => $sql) {

        $con->connectAll($sql);
        echo mainContentBlock($title, $con -> result, 10);
    }

    $con -> close();

    
?>