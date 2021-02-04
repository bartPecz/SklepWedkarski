import './login/login';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { ProcductsSelect } from './productsSelect/ProductsSelect';
import './navBar/navBarClick';

const categories = document.getElementsByClassName('categoryOption') as HTMLCollectionOf<HTMLElement>;
const marks = document.getElementsByClassName('markOption') as HTMLCollectionOf<HTMLInputElement>;

const $slider = $("#slider");
const $priceRangeLabel = $('#priceRange');

const $even = $('.product').filter(':odd');

$even.css({
    background: '#e4e4e4'
});


const productSelect = new ProcductsSelect(categories, {
    $sliderElement: $slider,
    $priceRangeLabelElement: $priceRangeLabel
    
});

console.dir(productSelect);


productSelect.launch();



