<?php
$PUBLIC = '../../';
require_once $PUBLIC.'app/ConDB.php';

if(null == file_get_contents('php://input')) exit('Not selected product');

header('Content-type: application/json');

$products_parameters = json_decode(file_get_contents('php://input'), true);

if(!count($products_parameters['category'])) {

    echo json_encode(array(0));
    exit();
}

$category_sql = 'category IN("'.implode('","', $products_parameters['category']).'")';
$price_sql = $products_parameters['price'] ? "price BETWEEN $range_low AND $range_high" : 1; 


$sql_main_data = 
    "   SELECT name, price, path, buy_count, mark, category
        FROM products
        WHERE ($category_sql) AND ($price_sql)
    ";

$con = @new ConDB();

$con->connectAll($sql_main_data);
$result_main_data = $con->result;

$prices = array();

foreach($result_main_data as $product) {
    array_push($prices, $product['price']);
}

$price_range = array(
    'lowest_price' => min($prices),
    'biggest_price' => max($prices)
);

echo json_encode(array(
    'result_main_data' => $result_main_data,
    'price_range' => $price_range
));

$con->close();

?>