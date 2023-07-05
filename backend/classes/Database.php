<?php
require_once 'Book.php';
require_once 'DVD.php';
require_once 'Furniture.php';
require_once 'Product.php';



class Database {
    private $connection;

    public function __construct($host, $username, $password, $database) {
        $this->connection = mysqli_connect($host, $username, $password, $database);
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function saveProduct(Product $product) {
        $sku = $product->getSKU();
        $name = $product->getName();
        $price = $product->getPrice();
        $type = $product->getType();
        $additionalInfo = $product->getAdditionalInfo();

        $sql = "INSERT INTO products (sku, name, price,type,info) VALUES ('$sku', '$name', $price,'$type','$additionalInfo')";
        if ($this->connection->query($sql) === TRUE) {
            //echo "Product saved successfully";
        } else {
            echo "Error saving product: " . $this->connection->error;
        }
    }
    public function getAll() {
        $sql = "SELECT * FROM products";
        $result = $this->connection->query($sql);
    
        $products = [];
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $sku = $row['sku'];
                $name = $row['name'];
                $price = $row['price'];
                $type = $row['type'];
                $additionalInfo = $row['info'];
                array_push($products,[$sku,$name ,$price ,$type ,$additionalInfo ]);
            }

            return $products;
        } else {
            return []; // Return an empty array if no products are found
        }
    }
    
    public function deleteProduct($sku) {
        $sku = $this->escapeString($sku);

        $sql = "DELETE FROM products WHERE sku = '$sku'";

        if ($this->connection->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }
public function deleteAll() {

        $sql = "DELETE FROM products ";

        if ($this->connection->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    private function escapeString($value) {
        return $this->connection->real_escape_string($value);
    }


    public function closeConnection() {
        $this->connection->close();
    }
}

?>