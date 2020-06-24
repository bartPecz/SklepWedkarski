<?php
    $PUBLIC = '../';
    require_once $PUBLIC.'app/ROOT.php';
    session_start();

    $categories = Array('Wędki', 'Kołowrotki', 'Przynęty');
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../css/products.css" type="text/css"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>


<body>
    <header>
        <?php require $PUBLIC.'viewsComponent/topBar.php';?>
        <?php require $PUBLIC.'viewsComponent/navBar.php';?>  
    </header>

    <div class="background1">
        <div class="productsWrapper">
            <div class="left">
                <div class="filter">Filtry</div>
                <div class="categories">
                    <div>Kategorie</div>
                        <?php
                        foreach($categories as $category) {
                            // $checked = $_GET['category'] == $category ? 'checked' : null;
                            $checked = null;

                            echo<<<end
                            <div>
                                <input class="category" type="checkbox" name="$category" $checked><label for="${category}">${category}</label>
                            </div>
                            end;
                        }
                        ?>
                </div>
                <div id="price" class="price">
                    <div class="priceLabel">
                        <div>Cena</div>
                        <input type="text" id="priceRange" readonly>
                    </div>
                    <div id="slider"></div>
                </div>
                <div class="mark"></div>
            </div>
            <div class="right">
                <div class="sortPanel">
                    <div >Sortuj:</div>
                    <select name="">
                        <option value="a-z">Alfabetycznie</option>
                        <option value="lowestPrice">Ceny rosnąco</option>
                        <option value="biggestPrice">Ceny malejąco</option>
                        <option value="mostPopular">Najpopularniejsze</option>
                    </select>
                </div>
                <div class="products">
                    <?php 
                    require $PUBLIC.'viewsComponent/product.php';
                    
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    createProduct();
                    ?>
                </div>
            </div>
        </div>
    </div>
    
    <?php require '../viewsComponent/footer.php';?>
    
    <script src="../js/products.bundle.js" ></script>
</body>
</html>