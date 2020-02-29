<?php

echo<<<end

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
                        <li>Wędki</li>
                        <li>Kołowrotki</li>
                        <li>Przynęty</li>
                    </ul>
                </div>
                <a href="#" class="navBarTiles">Kontakt</a>
                <a href="#" class="navBarTiles">Regulamin</a>
                <a href="#" class="navBarTiles">O nas</a>
            </div>
            <div class="navBarR">
                <div class="navBarInput">  
                    <form action="${local}search.php" method="get">
                        <input type="text" name="search" placeholder="szukaj...">
                    </form>
                </div>
            </div>   
        </div>
    </div>


end

?>

