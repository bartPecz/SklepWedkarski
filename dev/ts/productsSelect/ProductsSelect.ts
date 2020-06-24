import ROOT from '../ROOT';
import $ from 'jquery';
import 'jquery-ui-bundle';

interface ToSend {
    category: Array<string | any>;
    price: Array<string>;
    mark: Array<string>;
}

interface PriceSlide {
    $sliderElement: JQuery<HTMLElement>;
    $priceRangeLabelElement: JQuery<HTMLElement>;
}

enum StorageState {
    empty,
    savedConfiguration 
}

enum dataTypeInStorage {
    string,
    object
}

export class ProcductsSelect {

    toSend: ToSend;
    storageSupport: boolean;
    storageState: StorageState;
    countOfDownloadedRecords: number;
    chooseCategoryFromNavBar: string;

    constructor(public categories:HTMLCollectionOf<HTMLInputElement>, public priceSlide: PriceSlide) {

        this.toSend = {
            category: [],
            price: [],
            mark: []
        }
    }

    set recivedData(responseData) {
        
        if(responseData['price_range']) {
            const minPrice = Number(responseData['price_range']['lowest_price']);
            const maxPrice = Number(responseData['price_range']['biggest_price']);
            this.priceSliderLaunch(minPrice, maxPrice);
        }
        else {
            this.priceSliderLaunch(0, 0);
        }
    }

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
                    break;
                case dataTypeInStorage.string:
                    return pureDataFromStorage;
                    break;
            }

        })(pureDataFromStorage);
    }

    async chooseCategoryFromNavBarFunction() {

        try {
            const responseStream = await fetch(ROOT + 'app/productsSelect/categoryFromNavBar.php');

            if(!responseStream.ok) return Promise.reject(responseStream.status);
            
            const category = await responseStream.text();

            if([...category].length === 0) this.chooseCategoryFromNavBar = null;
            
            this.chooseCategoryFromNavBar = category;
        }
        catch(status) {
            console.error(status);
        }   

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

            if(dataPromise.ok == false) throw new Error('Response not ok response from fetch');
        
            const dataJson = await dataPromise.json();
            
            console.log(dataJson);
            this.recivedData = dataJson;
            return dataJson;
        }
        catch(err) {
            console.error(err);
        }
    }

    onCategoryChange() {

        for(const category of this.categories){
            
            category.addEventListener('click', (e) => {
                
                const input = e.target as HTMLInputElement;
                
                if(input.checked) {

                    this.toSend.category.push(input.name);
                    this.toSend.category = [...new Set(this.toSend.category)];

                    
                }
                else {

                    for(const [index, categoryName] of this.toSend.category.entries()) {
                        if(categoryName === input.name) {
                            this.toSend.category.splice(index, 1);
                            break;
                        }
                    }
                }

                if(this.storageSupport) {
                    this.sendDataToStorage();
                }
                this.sendDataToServer();
            });
        }
    }

    priceSliderLaunch(minPrice: number, maxPrice: number) {

        this.priceSlide.$sliderElement.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [ minPrice, maxPrice],  
            slide: function( event, ui ) {
                $("#priceRange").val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                console.log(ui.values[0]);
              }
        });

        this.priceSlide.$priceRangeLabelElement.val( "$" + $("#slider").slider( "values", 0 ) +
        " - $" + $( "#slider" ).slider( "values", 1 ) );
    }

    async launch() {

        const checkedInputs = () => {

            for(const category of this.categories) {

                if(category.name === this.chooseCategoryFromNavBar) {
                    this.toSend.category.push(category.name);
                    category.checked = true;
                }
            }
        }

        this.storageTest();
        this.onCategoryChange();
        

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

            this.storageState = StorageState.savedConfiguration;
            this.getDataFromStorage('toSend', dataTypeInStorage.object);
            
            for(const categoryInput of this.categories) {
                for(const categoryName of this.toSend.category) {
                    if(categoryName === categoryInput.name) {
                        categoryInput.checked = true;
                        break;
                    }
                }
            }
        }
        else if(!isDataInLocalStorage) {  
            this.storageState = StorageState.empty;
            this.sendDataToStorage();
        }

        await this.sendDataToServer();

        // this.priceSliderLaunch();
    }

}


