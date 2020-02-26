<?php

echo<<<end

    <div class="background2">
        <div id="navBar">
            <div id="navBarL">    
                <div class="navBarTiles">
                    <div id="navBarKat">
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
            <div id="navBarR">
                <form action="${local}search.php" method="get">
                    <input type="text" name="search" placeholder="szukaj...">
                </form>
            </div>
            
            <div id="navBarMenu">
                <div id="navBarMenuImgContainer">
                    <img  src="../img/menu.png" alt="">
                </div>
                <!-- <div>ccdvvfevevre</div> -->
            </div>
            
        </div>
    </div>


end

?>

