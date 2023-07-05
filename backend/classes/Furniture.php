<?php
include_once 'Product.php';
class Furniture extends Product {
    private $dimensions;

    public function __construct($sku, $name, $price,$type,$dimensions) {
        parent::__construct($sku, $name, $price,$type);
        $this->dimensions = "Dimensions: {$dimensions}";
    }
    public function getAdditionalInfo() {
        return $this->dimensions;
    }
    
}

?>