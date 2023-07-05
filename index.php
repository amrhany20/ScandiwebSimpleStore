<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_URI'] === '/') {
    include_once 'frontend/build/index.html';
    exit;
    
} else {
    include_once 'backend/Add.php';
    include_once 'backend/Delete.php';
    include_once 'backend/Get.php';
    exit;
}


?>
