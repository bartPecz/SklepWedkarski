<?php 
$PUBLIC = '../../';
require_once $PUBLIC.'app/ConDB.php';

if(null == file_get_contents('php://input')) exit('Not selected product');

header('Content-type: application/json');

$recivedData = json_decode(file_get_contents('php://input'), true);

if(isset($recivedData['category']) && is_array($recivedData['category']) && count($recivedData['category']) > 0) {
    $category_sql = 'category IN("'.implode('","', $recivedData['category']).'")';
}
else $category_sql = 1;

if(isset($recivedData['mark']) && is_array($recivedData['mark']) && count($recivedData['mark']) > 0) {
    $mark_sql = 'mark IN("'.implode('","', $recivedData['mark']).'")';
}
else $mark_sql = 1;


if(isset($recivedData['price']) && is_array($recivedData['price']) && count($recivedData['price']) >= 2) {
    $price_sql = "(price BETWEEN {$recivedData['price'][0]} AND {$recivedData['price'][1]})";
}
else $price_sql = 1;


switch($recivedData['order']) {
    case 'lowestPrice':
        $order_sql = 'price';
        break;
    case 'biggestPrice':
        $order_sql = 'price DESC';
        break;
    case 'mostPopular':
        $order_sql = 'buy_count DESC';
        break;
    default:
        $order_sql = 'name';
}

$connetion = @new ConDB();

$sql_select_products = 
    "   SELECT name, price, path, buy_count, mark, category
        FROM products
        WHERE $category_sql AND $price_sql AND $mark_sql
        ORDER BY $order_sql
    ";

$connetion->connectAll($sql_select_products);
$selected_products = $connetion->result;

$sql_count_marks = 
    "   SELECT mark, COUNT(mark) as 'count'
        FROM products
        WHERE $category_sql AND $price_sql
        GROUP BY mark
    ";

$connetion->connectAll($sql_count_marks);
$count_mark = $connetion->result;

if($recivedData['firstTimeConnect']) {

    $connetion->connectAll("SELECT DISTINCT category from products");
    $category_range = $connetion->result;

    $category_range = array_map(function($arr) {
        return $arr['category'];
    }, $category_range);


    $connetion->connectAll("SELECT MIN(price) as min, MAX(price) as max from products");
    $min = $connetion->result[0]['min'];
    $max = $connetion->result[0]['max'];
    $price_range = [$min, $max];


    $connetion->connectAll("SELECT DISTINCT mark from products");
    $mark_range = $connetion->result;

    $mark_range = array_map(function($arr) {
        return $arr['mark'];
    }, $mark_range);

}
else {
    
    $category_range = $price_range = $mark_range = -1;
}

$first_time_connect = false;

echo json_encode([
    'selected_products'=>$selected_products,
    'count_mark'=>$count_mark,
    'category_range'=>$category_range,
    'price_range'=>$price_range,
    'mark_range'=>$mark_range,
    'first_time_connect'=>$first_time_connect
]);

$connetion->close();

?>