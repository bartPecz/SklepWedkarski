<?php
require_once $PUBLIC.'app/config.php';


class ConDB extends mysqli {

    public $result;
    
    function __construct($sql = NULL) {

        global $serverName, $username, $password, $database;

        parent::__construct($serverName, $username, $password, $database);

        if ($this->connect_error) {
            exit("Connection failed: " . $this->connect_error);
        }

        if(isset($sql)) $this->connectAll($sql);
    }

    function connectAll($sql) {

        $result = $this->query($sql);
        $this->result = $result->fetch_all(true);
    }

}

?>