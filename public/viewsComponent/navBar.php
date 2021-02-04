<?php

require_once $PUBLIC.'app/ConDB.php';

$conn = new ConDB();

$conn->connectAll("SELECT DISTINCT category FROM products");

$categories_array_html = array_map(function($record) {
    global $ROOT;

    return  <<<end
            <li class="categorySelect" data-category="{$record['category']}">
                <a href="{$ROOT}views/products.php?category={$record['category']}">
                    {$record['category']}
                </a>
            </li>
            end;
}, $conn->result);

$categories_html = '';

foreach($categories_array_html as $category_html) {
    $categories_html .= $category_html;
}

echo<<<end
<nav>
    <div class="background2">
        
        <div class="navBar">
            <div class="navBarMenu">
                <div class="navBarMenuImgContainer">
                    <img  src="../img/menu.png" alt="">
                </div>
            </div>

            <div class="navBarL">    
                <div class="navBarTiles">
                    <div class="navBarKat">
                        <div>Kategorie</div>
                        <img src="../img/icon.png"/>
                    </div>
                    
                    <ul> 
                       $categories_html
                    </ul>
                </div>
                <a href="" class="navBarTiles">Kontakt</a>
                <a href="" class="navBarTiles">Regulamin</a>
                <a href="" class="navBarTiles">O nas</a>
            </div>

            <div class="navBarR">
                <div class="navBarInput">  
                    <form action="${ROOT}search.php" method="get">
                        <input type="text" name="search" placeholder="szukaj...">
                    </form>
                </div>
            </div>   
        </div>

    </div>
</nav>

end;

$conn->close();

?>

