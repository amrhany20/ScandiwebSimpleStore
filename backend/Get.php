<?php
include_once 'classes/Database.php';
include_once 'classes/Product.php';
include_once 'classes/DVD.php';
include_once 'classes/Book.php';
include_once 'classes/Furniture.php';

// Get all products
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $DB = new Database('localhost', 'id20971107_root', 'DBdb@123$', 'id20971107_store');
    $products = $DB->getAll();
    $DB->closeConnection();
    $newArray = [];

    foreach ($products as $object) {
        $newArray[] = [
            'sku' => $object[0],
            'name' => $object[1],
            'price' => $object[2],
            'type' => $object[3],
            'info' => $object[4]
        ];
    }

    header('Content-Type: application/json');
    echo json_encode($newArray);
    exit;
}

