<?php

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
                        <li class="categorySelect" data-category="Wędki">
                            <a href="{$ROOT}views/products.php">
                                Wędki
                            </a>
                        </li>
                        <li class="categorySelect" data-category="Kołowrotki">
                            <a href="{$ROOT}views/products.php">
                                Kołowrotki
                            </a>
                        </li>
                        <li class="categorySelect" data-category="Przynęty">
                            <a href="{$ROOT}views/products.php">
                                Przynęty
                            </a>
                        </li>
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

end

?>

