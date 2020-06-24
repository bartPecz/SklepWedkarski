<?php
    $PUBLIC = '../';
    require_once $PUBLIC.'app/ROOT.php';
    session_start();
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
    <header>
        <?php require $PUBLIC.'viewsComponent/topBar.php';?>
        <?php require $PUBLIC.'viewsComponent/navBar.php';?> 
    </header>

    <div class="background1">
        <div class="gray2Border">
            <div class="mainContent">
                <?php require $PUBLIC.'app/build/mainContents.php';?>
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
        <div class="rodPicture">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquid ducimus alias. Optio, quas itaque incidunt exercitationem sint dicta reiciendis totam fugiat. Voluptatum neque officiis provident ex iste, sit voluptates?
                Iure, nostrum rerum non velit excepturi ipsam dolores modi. 
            </div>
            
        </div>
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
    
   <?php require '../viewsComponent/footer.php';?>
    

    
    <script src="../js/index.bundle.js" ></script>
</body>
</html>