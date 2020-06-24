import './login/login';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { ProcductsSelect } from './productsSelect/ProductsSelect';
import './navBar/navBarClick';

const categories = document.getElementsByClassName('category') as HTMLCollectionOf<HTMLInputElement>;

const $slider = $("#slider");
const $priceRangeLabel = $('#priceRange');

// const product = 
// `
//     <a href="#">
//         <div class="product">
//             <div class="photo">
//                 <img width="180" height="200">
//             </div>
//             <div class="right">
//                 <div class="price">Cena: 113 zł</div>
//                 <div class="productName">Shimano</div>
//                 <div class="description">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio repellat unde id repudiandae aliquam cupiditate velit, tempore dolor, maiores nulla officia? Natus labore assumenda veniam corporis ipsam commodi earum.
//                     Consequatur aliquam facere maxime rerum voluptas, officia possimus minus placeat earum dolorem facilis.
//                 </div>
//             </div>
//         </div>
//     </a>
// `;

const $even = $('.product').filter(':odd');

$even.css({
    background: '#e4e4e4'
});


const productSelect = new ProcductsSelect(categories, {
    $sliderElement: $slider,
    $priceRangeLabelElement: $priceRangeLabel
    
});

productSelect.launch();


