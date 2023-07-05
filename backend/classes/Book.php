<?php 
include_once "Product.php";
class Book extends Product {
    private $weight;

    public function __construct($sku, $name, $price,$type,$weight) {
        parent::__construct($sku, $name, $price,$type);
        $this->weight = "Weight: {$weight} Kg";
    }

    public function getAdditionalInfo() {
        return $this->weight;
    }
}

?>