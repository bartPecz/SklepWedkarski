<?php
    require_once '../php/path.php';
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../css/index.css" type="text/css"/>
</head>


<body>

    <div id="forward">
        Forward
    </div>

    <div id="backward">
        Backward
    </div>

    <header>
        <?php include('../viewsComponent/topBar.php');?>
        <nav>
            <?php include('../viewsComponent/navBar.php');?> 
        </nav> 
    </header>

    <div class="background1">
        <div class="gray2Border">
            <div class="mainContent">
                <?php include('../viewsComponent/mainContentBlocks.php');?>
            </div>
        </div>
    </div>

    <div class="slidingBar">
        <div class="slidingBarOverScreen">
            <?php 
                $pathToCompanyLogos = '../img/companyLogos';

                for($i = 0; $i < 2; $i++){

                    foreach(new DirectoryIterator($pathToCompanyLogos) as $file){
            
                        if($file != '.' && $file != '..'){
                            
                            echo<<<end
                                <div class="slidingBarTile">
                                    <img src="${pathToCompanyLogos}/${file}">
                                </div>
                            end;
                        }
                    }
                }
            ?>
        </div>
    </div>

    <div class="violet">
        <div class="rodPicture">dsds</div>
    </div>

    <div class="textContent">
        <div>
            <div class="textContentBlock">
                <div class="textContentBlockTitle">
                    Jesteśmy gotowi na twoje zamówienie
                </div>
                <div class="textContentBlockText">
                    Naszym priorytetem jest dostarczenie sprzętu spełniającego wszystkie 
                    twoje wymagania, pozwalającego na łowienie jeszcze większych okazów. 
                </div>
            </div>
        </div>
        <div class="background1">
            <div class="textContentBlock">
                <div class="textContentBlockTitle">
                    Pasja do wędkarstwa oraz profesjonalizm
                </div>
                <div class="textContentBlockText">
                    Przyświeca nam zasada "Klient ma zawsze rację".  Szanujemy twoje zdanie i w razie wszelkich wątpliwości  jesteśmy  do  dyspozycji. 
                </div>
            </div>
        </div>
        <div>
            <div class="textContentBlock">
                <div class="textContentBlockTitle">
                    Sprawdzony sprzęt
                </div>
                <div class="textContentBlockText">
                    Oferowany sprzęt jest na co dzień używany przez nas samych, dlatego
                    możemy go polecić <span class="w100">w 100%.

                    </span>
                </div>
            </div>
        </div>
    </div>
    
    <footer>
        <div class="background3">
            <div class="footer">
                <div class="shop">
                        <div class="shopTitle">
                            Sklep
                        </div>
                        <div class="shopText">
                            <div>Dane kontaktowe</div>
                            <div>Współpraca</div>
                            <div>Promocje</div>
                            <div>Regulamin</div>
                        </div>
                </div>
                <div clas="categories">
                        <div class="categoriesTitle">
                            Kategorie
                        </div>
                        <div class="categoriesText">
                                <div>Wędki</div>
                                <div>Kołowrotki</div>
                                <div>Przynęty</div>
                        </div>
                </div>
                <div class="abouUs">
                    O nas
                </div>
                <div class="icons">
                    <div class="phone">
                        <img src="../img/phone.jpg">
                    </div>
                    <div class="addres">
                        <img src="../img/addres.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    

    
    <script src="../js/bundle.js" ></script>
</body>
</html>