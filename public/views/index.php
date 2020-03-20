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

    <div class="slidingBar">
        <div class="slidingBarOverScreen">
            <?php 
                $pathToCompanyLogos = '../img/companyLogos';
             
                foreach(new DirectoryIterator($pathToCompanyLogos) as $file){
            
                    if($file != '.' && $file != '..'){
                        
                        echo<<<end
                            <div class="slidingBarTile">
                                <img src="${pathToCompanyLogos}/${file}">
                            </div>
                        end;
                    }
                }

                foreach(new DirectoryIterator($pathToCompanyLogos) as $file){
            
                    if($file != '.' && $file != '..'){
                        
                        echo<<<end
                            <div class="slidingBarTile">
                                <img src="${pathToCompanyLogos}/${file}">
                            </div>
                        end;
                    }
                }
            ?>
        </div>
    </div>
    
    <script src="../js/bundle.js"></script>
</body>
</html>