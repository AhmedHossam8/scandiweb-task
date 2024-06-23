<?php
namespace ScandiWeb\Models;
require_once 'src/config/database.php';
require_once 'src/models/Product.php';

class ProductController {
    public function index() {
        global $conn;
        $products = Product::all($conn);
        echo json_encode($products);
    }

    public function show($id) {
        global $conn;
        $product = Product::find($conn, $id);
        echo json_encode($product);
    }
}
?>
