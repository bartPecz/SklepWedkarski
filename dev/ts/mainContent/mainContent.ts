
let mainContentSlide =
`
    <div class="mainContentSlide">
        <div class="mainContentSlideTitle">
            #
        </div>
        <div class="mainContentBlocksOverScreen">
            #
        </div>
    </div>  
`

let mainContentBlock = 
`
    <div class="mainContentBlock">
        <div class="mainContentBlockMiddle">
            <img src="#" class="mainContentBlockImg">
            <div class="mainContentBlockTitle">#</div>
            <div class="mainContentBlockPrice">#</div>
        </div>
    </div> 
`

const div = document.createElement('div');

interface MainContent {
    mainContentSlide: HTMLElement;
    mainContentBlock: HTMLElement;
}

const mainContent: MainContent = {
    mainContentSlide: Object.assign(div),
    mainContentBlock : Object.assign(div)
} 

mainContent.mainContentSlide.innerHTML = mainContentSlide;
mainContent.mainContentBlock.innerHTML = mainContentBlock;

// console.log(mainContent.mainContentBlock.innerHTML);


