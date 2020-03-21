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
        <img src="../img/rodPicture.png" class="rodPicture" alt="">
    </div>

    <br>
    <br>
    <br>
    <br>

    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero, eveniet nam, suscipit voluptates quo obcaecati odio est, omnis doloremque ad esse nisi recusandae eligendi. Illum ducimus nam laboriosam optio!
    </div>
    
    <script src="../js/bundle.js" ></script>
</body>
</html>