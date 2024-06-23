<?php
namespace ScandiWeb\Models;
class Product {
    public $id;
    public $name;
    public $description;
    public $price;
    public $category_id;

    public function __construct($id, $name, $description, $price, $category_id) {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->category_id = $category_id;
    }

    public static function all($conn) {
        $sql = "SELECT * FROM products";
        $result = $conn->query($sql);

        $products = [];
        while($row = $result->fetch_assoc()) {
            $products[] = new Product($row['id'], $row['name'], $row['description'], $row['price'], $row['category_id']);
        }

        return $products;
    }

    public static function find($conn, $id) {
        $sql = "SELECT * FROM products WHERE id = $id";
        $result = $conn->query($sql);

        if($row = $result->fetch_assoc()) {
            return new Product($row['id'], $row['name'], $row['description'], $row['price'], $row['category_id']);
        }

        return null;
    }
}
?>
