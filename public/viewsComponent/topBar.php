<?php

echo<<<end
    <div class="background1">
        <div id="topBar">
            <a href="${ROOT}" id="topBarL">
                <img src="../img/rod.png" id="topBarImg" alt="yo">
                <div id="topBarText">
                    <span id="topBarSklep">sklep</span> <span id="topBarBez">BEZhaczyka</span>
                </div>
            </a>
            <div id="topBarR">
                <div id="topBarLog">
                    Zaloguj się
                </div>
                <a href="${ROOT}api/strona.php" id="topBarReg">
                    Zarejestruj się
                </a>
            </div>
        </div>
    </div>

end

?>