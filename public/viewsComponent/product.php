<?php
function createProduct() {

    echo<<<end
        <a href="#">
            <div class="product">
                <div class="photo">
                    <img src="../img/photos/photo125.jpg" width="200" height="180">
                </div>
                <div class="content">
                    <div class="price">Cena: 113 zł</div>
                    <div class="productName">Shimano</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio repellat unde id repudiandae aliquam cupiditate velit, tempore dolor, maiores nulla officia? Natus labore assumenda veniam corporis ipsam commodi earum.
                        Consequatur aliquam facere maxime rerum voluptas, officia possimus minus placeat earum dolorem facilis. 
                    </div>
                </div>
            </div>
        </a>
    end;
}
?>