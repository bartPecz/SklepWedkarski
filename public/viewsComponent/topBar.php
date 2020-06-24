<?php
$data_login = $_SESSION['user']['login'] ?? null;
$hide_logout = isset($data_login) ? 'hide' : null;
$hide_login = isset($data_login) ? null : 'hide';
    
echo<<<end
    <div class="background1">
        <div id="topBar">
            <a href="{$ROOT}views/" id="topBarL">
                <img src="../img/rod.png" id="topBarImg" alt="yo">
                <div id="topBarText">
                    <span id="topBarSklep">sklep</span> <span id="topBarBez">BEZhaczyka</span>
                </div>
            </a>
            <div id="topBarR">
                <div class="topBarLog {$hide_logout}" data-log=logout>
                    Zaloguj się
                </div>
                <div data-log="logout" class="{$hide_logout}">
                    Zarejestruj się
                </div>
                <div data-log="login" class="userLogin {$hide_login}">
                    {$data_login}
                </div>
                <div data-log="login" class="logout {$hide_login}">Wyloguj się</div>
            </div>
        </div>
    </div>

end

?>