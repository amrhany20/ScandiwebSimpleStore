<?php 
include_once "Product.php";

class DVD extends Product {
    private $size;

    public function __construct($sku, $name, $price,$type,$size) {
        parent::__construct($sku, $name, $price,$type);
        $this->size = "Size: {$size} MB";
    }

    public function getAdditionalInfo() {
        return $this->size;
    }
}

?>