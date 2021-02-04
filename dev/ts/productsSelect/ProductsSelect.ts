import ROOT from '../ROOT';
import $, { readyException } from 'jquery';
import 'jquery-ui-bundle';
import Url from 'url-parse';
import queryParse from 'query-string';


interface ToSend {
    category: Array<string>;
    price: [number, number];
    mark: Array<string>;
    order: string;
    firstTimeConnect: boolean;
}

interface Product {
    name: string;
    price: string;
    path: string;
    buy_count: string;
    mark: string;
    category: string;
}

interface CountMark {
    mark: string;
    count: string;
}

interface RecivedData {
    selected_products: Array<Product>;
    count_mark: Array<CountMark>;
    category_range: Array<string>;
    price_range: [string, string];
    mark_range: Array<string>;
    first_time_connect: boolean
}

interface PriceSlide {
    $sliderElement: JQuery<HTMLElement>;
    $priceRangeLabelElement: JQuery<HTMLElement>;
}

interface EventHelp<T extends EventTarget> extends Event {
    target: T
}

enum StorageState {
    empty,
    savedConfiguration 
}

enum dataTypeInStorage {
    string,
    object
}

enum ToSendParameter {
    category = 'category',
    mark = 'mark'
}




export class ProcductsSelect {

    toSend: ToSend = {
        category: [],
        mark: [],
        price: [0, 1000000],
        order: null,
        firstTimeConnect: true
    };

    recivedData: RecivedData;
    storageSupport: boolean;
    storageState: StorageState;
    countOfDownloadedRecords: number;
    chooseCategoryFromNavBar: string;
    
    constructor(public categories: HTMLCollectionOf<HTMLElement>, public priceSlide: PriceSlide) {}

    storageTest() {
        
        try {

            localStorage.setItem('test', 'ok');
            if(localStorage.getItem('test') === 'ok') {
                
                this.storageSupport = true;
                localStorage.removeItem('test');
            }

        }
        catch(info) {

            console.log(info);
            this.storageSupport = false;
        }
    }

    sendDataToStorage() {

        localStorage.setItem('toSend', JSON.stringify(this.toSend));
    }

    getDataFromStorage(dataFromStorage: string, typeOfData: dataTypeInStorage) {

        const pureDataFromStorage = localStorage.getItem(dataFromStorage);

        this[dataFromStorage] = (function(pureDataFromStorage) {

            switch(typeOfData) {
                case dataTypeInStorage.object:
                    return JSON.parse(pureDataFromStorage);
                case dataTypeInStorage.string:
                    return pureDataFromStorage;
            }

        })(pureDataFromStorage);
    }

    async chooseCategoryFromNavBarFunction() {

        // try {
        //     const responseStream = await fetch(ROOT + 'app/productsSelect/categoryFromNavBar.php');
            
        //     if(!responseStream.ok) return Promise.reject(responseStream.status);
            
        //     const category = await responseStream.text();
        //     console.log(category);

        //     if([...category].length === 0) this.chooseCategoryFromNavBar = null;

        //     this.chooseCategoryFromNavBar = category;
        // }
        // catch(status) {
        //     console.error(status);
        // }   

        const url = new Url(document.URL);
        console.log(url);
        const searchQueryObject = queryParse.parse(url.query);
        console.log(searchQueryObject);

        if(typeof searchQueryObject.category === 'string') this.chooseCategoryFromNavBar = searchQueryObject.category;        
    }

    async sendDataToServer(send = this.toSend) {

        try {

            const dataPromise = await fetch(ROOT + 'app/productsSelect/productsSelect.php', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(send)
            });
            console.dir(dataPromise);
            if(dataPromise.ok == false) throw new Error('Response not ok response from fetch');
        
            const dataJson = await dataPromise.json();
            
            console.log(dataJson);

            this.recivedData = dataJson;
            this.handleRecivedDataFromServer(dataJson);

            return dataJson;
        }
        catch(err) {
            console.error(err);
        }
    }

    // updatePrice() {

    //     // this.toSend.price[0] =  this.priceSlide.$sliderElement.slider( "values", 0 );
    //     // this.toSend.price[1] = this.priceSlide.$sliderElement.slider( "values", 1);

    //     this.toSend.price[0] =  0;
    //     this.toSend.price[1] = 1000;
        
    // }

    inputChange(toSendParameter: ToSendParameter, event) {
        
        const input = event.target as HTMLInputElement;
 
                if(input.checked) {

                    this.toSend[toSendParameter].push(input.name);
                    this.toSend[toSendParameter] = [...new Set(this.toSend[toSendParameter])];

                }
                else {

                    for(const [index, categoryName] of this.toSend[toSendParameter].entries()) {
                        if(categoryName === input.name) {
                            this.toSend[toSendParameter].splice(index, 1);
                            break;
                        }
                    }
                }

                // this.updatePrice();

                if(this.storageSupport) {
                    this.sendDataToStorage();
                }
                this.sendDataToServer();
    }

    onCategoryChange() {

        for(const category of this.categories) {
            
            category.addEventListener('click', (event: EventHelp<HTMLInputElement>) => {
                this.inputChange.call(this, ToSendParameter.category, event);
            });
        }
    }

    onMarkChange() {

        let marks = document.getElementById('marks');

        marks.addEventListener('click', (event: EventHelp<HTMLInputElement>) => {
            
            console.log(event.target);
            console.log(event.target.name);

            if(event.target.type=== 'checkbox') {

                console.log('yes checkbox was clicked');
                this.inputChange.call(this, ToSendParameter.mark, event)
            }            
        });

    }

    onSortChange() {

        let sortPanel = <HTMLSelectElement> document.getElementById('sortPanel');

        sortPanel.addEventListener('change', (event: EventHelp<HTMLSelectElement>) => {

            this.toSend.order = sortPanel.options[sortPanel.selectedIndex].value;
            // this.updatePrice();

            if(this.storageSupport) {
                this.sendDataToStorage();
            }

            this.sendDataToServer();
        });
    }

    priceSliderLaunch(minPriceRange: number, maxPriceRange: number, minPrice: number, maxPrice: number) {

        const thisObject:ProcductsSelect = this;
        this.storageTest();
        
        const sliderRange = this.priceSlide.$sliderElement.slider({
            range: true,
            min: minPriceRange,
            max: maxPriceRange,
            values: [ minPrice, maxPrice],  
            slide: function( event, ui ) {
                thisObject.priceSlide.$priceRangeLabelElement.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                
            },
            stop: function(event, ui) {

                thisObject.toSend.price[0] = ui.values[0];
                thisObject.toSend.price[1] = ui.values[1];
            
                if(thisObject.storageSupport) {
                    thisObject.sendDataToStorage();
                }

                console.dir(thisObject.toSend);

                thisObject.sendDataToServer();
            }
        });

        this.priceSlide.$priceRangeLabelElement.val( "$" + this.priceSlide.$sliderElement.slider( "values", 0 ) +
        " - $" + this.priceSlide.$sliderElement.slider( "values", 1 ) );
//

        // const selectedProductRange = document.createElement('div');

        // selectedProductRange.style.cssText = 'position: absolute; z-index: 100; left: 30px; width: 40px; height: 100%; background-color: red;';
           
            
        
        // sliderRange[0].appendChild(selectedProductRange);

    }

    
    handleRecivedDataFromServer(responseData: RecivedData) {
        
        if(this.toSend.firstTimeConnect) {

            const categories = document.getElementById('categories')

            responseData['category_range'].forEach(recivedCategory => {
                
                const category = document.createElement('div');

                category.classList.add('categoryOption');

                const checked = (recivedCategory === this.chooseCategoryFromNavBar) ? 'checked' : null;
                console.log(this.chooseCategoryFromNavBar)
                category.innerHTML = 
                `
                    <input type="checkbox" name="${recivedCategory}" ${checked}><label for="${recivedCategory}">${recivedCategory}</label>
                `;

                categories.appendChild(category);
            });


            const marks = document.getElementById('marks');

            responseData['mark_range'].forEach(recivedMark => {

                const mark = document.createElement('div');

                mark.classList.add('markOption');

                mark.innerHTML = 
                `
                    <input type="checkbox" name=${recivedMark}><label for="${recivedMark}">${recivedMark}  <span></span></label>
                `;

                marks.appendChild(mark);
            });

            this.priceSliderLaunch(0, parseInt(responseData['price_range'][1]), 0, parseInt(responseData['price_range'][1]));

        }

        const markOptionsSpan = document.querySelectorAll('.markOption span');

        markOptionsSpan.forEach(span => {
            
            if(this.recivedData.count_mark.length === 0) {
                span.innerHTML = '(0)';
                return 0;
            }

            for(const markObj of this.recivedData.count_mark) {

                if( (<HTMLInputElement>span.parentElement.previousElementSibling).name === markObj.mark) {
                    span.innerHTML = '(' + markObj.count + ')';
                    break;
                }
                else {
                    span.innerHTML = '(0)';
                }
            }``
        });

        this.toSend.firstTimeConnect = responseData['first_time_connect'];

    }

    async launch() {
        console.log('123');
        console.log(this.toSend.order);

        const checkedInputs = () => {

            for(const category of this.categories) {

                const input = <HTMLInputElement>category.children[0];

                if(input.name === this.chooseCategoryFromNavBar) {
                    this.toSend.category.push(input.name);
                    input.checked = true;
                }
            }
        }

        this.storageTest();
        
        
        await this.chooseCategoryFromNavBarFunction();

        if(!this.storageSupport) {

            console.log(`Storage dosen't exsist`);

            if(this.chooseCategoryFromNavBar) {
                checkedInputs();
            }
            return 0;
        }
        
        const isDataInLocalStorage = localStorage.getItem('toSend');

        if(this.chooseCategoryFromNavBar) {
            checkedInputs();
            this.sendDataToStorage();
        }
        else if(isDataInLocalStorage) {

            // this.storageState = StorageState.savedConfiguration;
            // this.getDataFromStorage('toSend', dataTypeInStorage.object);
            
            // for(const categoryInput of this.categories) {
            //     for(const categoryName of this.toSend.category) {
            //         if(categoryName === categoryInput.name) {
            //             categoryInput.checked = true;
            //             break;
            //         }
            //     }
            // }
        }
        else if(!isDataInLocalStorage) {  
            this.storageState = StorageState.empty;
            this.sendDataToStorage();
        }

        await this.sendDataToServer();

        this.onCategoryChange();
        this.onMarkChange();
        this.onSortChange();
    }


}


