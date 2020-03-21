<?php 

namespace ViewsComponent\MainContentBlocks;

$pathToApi = '../img/api';

$block = '';
for($i = 0; $i < 2; $i++){

    foreach(new \DirectoryIterator($pathToApi) as $file){

        if( $file != '.' && $file != '..'){
    
            $block .= <<<end
                <div class="mainContentBlock">
                    <div class="mainContentBlockMiddle">
                        <img src="${pathToApi}/${file}" class="mainContentBlockImg">
                        <div class="mainContentBlockTitle"> Wędka</div>
                        <div class="mainContentBlockPrice">300zł</div>
                    </div>
                </div>
            end;
        }
    }
}


$slideTitles = Array('Polecane', 'Kupione przez ciebie');

$content = '';

foreach($slideTitles as $title){

    $content .= <<<end
        <div class="mainContentSlide">
                <div class="mainContentSlideTitle">
                    ${title}
                </div>
                <div class="mainContentBlocksOverScreen">
                    ${block}
                </div>
        </div>    
    end;
}

echo $content;

?>