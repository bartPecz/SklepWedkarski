import SliderControler  from './SliderControler';
import ROOT from '../ROOT';

interface ProductsList {
    name?: string,
    path?: string,
    price?: number
}

export default class MainContentSlider extends SliderControler {

    productsList: Array<ProductsList>;
    pathsToImages: Array<string>;
    numberOfLastProduct: number;
    stopDownload: boolean;
    downloading: boolean = false;
    

    constructor(imgFrame: HTMLElement) {

        super(imgFrame);

        this.productsList = JSON.parse(this.imgFrame.dataset.productsList);

        this.pathsToImages = this.productsList.map(el => {
            return ROOT + el.path; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        });
        
        this.numberOfLastProduct = this.productsList.length - 1;

        this.stopDownload = false;

    }

    get allBlocks(): number {
        return this.imgFrame.children.length; 
    }

    get countOfNextBlocks(): number {        
        return this.allBlocks - (this.countOfVisibleParts + this.howManyPass());
    }

    animationEnd() {
        
        this.imgFrame.addEventListener('transitionend', () => {

            this.isAnimate = false;
            this.howManyPass();

            if(Math.round(this.position) == 0) this.backwardButton.classList.add('hide');
            else this.backwardButton.classList.remove('hide');

            this.lastVisibleNumber = parseFloat((this.pass + this.countOfVisibleParts).toFixed());

            if(this.pass + this.countOfVisibleParts == this.productsList.length) this.forwardButton.classList.add('hide');
            else this.forwardButton.classList.remove('hide');
        });
    }   

    onClick(backward: HTMLElement, forward: HTMLElement) {

        this.onResize();
        super.onClick(backward, forward);
    }

    
    onResize() {

        window.addEventListener('resize', () => {

            setTimeout(() => {
                this.imgFrame.style.transitionProperty = null;
            });
            
            if(this.pass <= 5) {

                this.position = -1 * this.pass * this.blockWidth;
                this.imgFrame.style.transitionProperty = 'none';
                this.isAnimate = false;
            }
            else {
                this.position = -1 * (this.lastVisibleNumber - this.countOfVisibleParts) * this.blockWidth;
                this.imgFrame.style.transitionProperty = 'none';
                this.isAnimate = false;
            }
        });

    }

    forward() {

        if(this.countOfNextBlocks < 2 * this.countOfVisibleParts && !this.stopDownload  && !this.downloading) {

            let startNumberDownload = this.allBlocks;
            let endNumberDownload;
            
            this.downloading = true;
            
            if(this.allBlocks + 10 > this.numberOfLastProduct + 1) {

               endNumberDownload = this.numberOfLastProduct + 1;
               this.stopDownload = true;  
            }
            else {
                endNumberDownload = this.allBlocks + 10;
            }

            this.fetchImg(this.pathsToImages.slice(startNumberDownload, endNumberDownload))
            .then(images  => {
                    
                for(const img of images) {
    
                    const imgFrameChildStructure = this.imgFrame.children[0].cloneNode(true) as HTMLElement;
                    const imgInChildStructure = imgFrameChildStructure.getElementsByTagName('img')[0];
                    
                    imgInChildStructure.replaceWith(img);
    
                    this.imgFrame.appendChild(imgFrameChildStructure);
                }
                this.downloading = false;
            });
        }

        if(this.countOfNextBlocks == 0) return;

        super.forward();
    }

    async fetchImg(imagesPath: Array<string>): Promise<Array<HTMLImageElement>> {

        const imgType: HTMLImageElement = new Image();
        
        const imagespromise = imagesPath.map((path: string) => {

            const img = imgType.cloneNode() as HTMLImageElement;

            if(img.addEventListener) {
                
                const promise = new Promise(resolve => {

                    img.addEventListener('load', function loaded() {

                        console.log('załadowane');
                        resolve(this);
                    });
                });

                img.src = path;

                return promise;
            }
            else {
                throw new Error('Nie ma metody addEventListener')
            }

        });

        return await Promise.all(imagespromise) as Array<HTMLImageElement>;
    }

    setStepsNumber(): number {

        if(0 > this.position &&  this.position > -this.imgFrameWidth) return this.howManyPass();

        if(this.countOfNextBlocks < this.countOfVisibleParts && this.countOfNextBlocks > 0) return this.countOfNextBlocks;

        return this.countOfVisibleParts;
    }
} 