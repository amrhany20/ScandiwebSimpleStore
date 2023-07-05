<?php
include_once 'classes/Database.php';
include_once 'classes/Product.php';
include_once 'classes/DVD.php';
include_once 'classes/Book.php';
include_once 'classes/Furniture.php';
// Add a new product
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the data from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data === null) {
        // Error decoding JSON data
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Invalid JSON data']);
        exit;
    }

    // Access the data fields
    $sku = isset($data['sku']) ? $data['sku'] : '';
    $name = isset($data['name']) ? $data['name'] : '';
    $price = isset($data['price']) ? $data['price'] : '';
    $selectedValue = isset($data['selectedValue']) ? $data['selectedValue'] : '';
    $inputValue = isset($data['inputValue']) ? $data['inputValue'] : '';

    // Perform further processing with the data, such as storing in a database or performing actions based on the selected value
    $productMappings = [
    'DVD' => DVD::class,
    'Book' => Book::class,
    'Furniture' => Furniture::class,
];
    $DB = new Database('localhost', 'id20971107_root', 'DBdb@123$', 'id20971107_store');

    // switch ($selectedValue) {
    //     case 'DVD':
    //         $newProduct = new DVD($sku, $name, $price, $selectedValue, $inputValue);
    //         break;
    //     case 'Book':
    //         $newProduct = new Book($sku, $name, $price, $selectedValue, $inputValue);
    //         break;
    //     case 'Furniture':
    //         $newProduct = new Furniture($sku, $name, $price, $selectedValue, $inputValue);
    //         break;
    //     default:
    //         break;
    // }
$newProduct = new $productMappings[$selectedValue]($sku, $name, $price, $selectedValue, $inputValue);
    $DB->saveProduct($newProduct);
    $DB->closeConnection();

    header('Content-Type: application/json');
    echo json_encode(['message' => 'Product added successfully']);
    exit;
}

