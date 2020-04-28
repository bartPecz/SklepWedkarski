<?php 
 
    function mainContentBlock($title, $arrBlocks, $countOfPicturesOnStart) {
        global $PUBLIC;
        
        $productsList=  json_encode($arrBlocks);

        $block = '';
        $content = '';
        
        for($i = 0; $i < $countOfPicturesOnStart; $i++) {

            $img_path = $PUBLIC.$arrBlocks[$i]['path'];
            $img_name = $arrBlocks[$i]['name'];
            $img_price = $arrBlocks[$i]['price'].' zł';

            $button_forward = 'buttonForward';
            $button_backward = 'buttonBackward';

            $next_arrow = $PUBLIC.'img/next.png';

            $block .= <<<end
                    <div class="mainContentBlock">
                        <div class="mainContentBlockMiddle">
                            <div class="imgScalableHeight">
                                <img src="${img_path}" class="mainContentBlockImg">
                            </div>
                            <div class="mainContentBlockTitle">${img_name}</div>
                            <div class="mainContentBlockPrice">${img_price}</div>
                        </div>
                    </div>
            end;
        }


        $content .= <<<end
            <div class="mainContentWrapper">
                <div class="mainContentSlide">
                        <div class="mainContentSlideTitle">
                            ${title}
                        </div>
                        <div class="mainContentBlocksOverScreen" data-products-list=${productsList}>
                            ${block}
                        </div>
                </div>
                <div class="mainContentButtons">
                    <div class="${button_forward}">
                        <img src="${next_arrow}">
                    </div>
                    <div class="${button_backward}">
                        <img src="${next_arrow}">
                    </div>
                </div>
            </div>   
        end;

        return $content;
    }

    
?>


