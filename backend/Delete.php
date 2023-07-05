<?php
include_once 'classes/Database.php';
include_once 'classes/Product.php';
include_once 'classes/DVD.php';
include_once 'classes/Book.php';
include_once 'classes/Furniture.php';


// Delete product(s)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $D1 =$data['data'];
    $checkedItems = $D1['checkedItems'];
    $DB = new Database('localhost', 'id20971107_root', 'DBdb@123$', 'id20971107_store');

    if (!$checkedItems) {
        $DB->deleteAll();
        header('Content-Type: application/json');
        echo json_encode("All Deleted");
    } else {
        foreach ($checkedItems as $object) {
            $DB->deleteProduct($object);
        }
        header('Content-Type: application/json');
        echo json_encode("Some Deleted");
    }

    $DB->closeConnection();
    exit;
}
?>
