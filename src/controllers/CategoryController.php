<?php
namespace ScandiWeb\Models;
require_once 'src/config/database.php';
require_once 'src/models/Category.php';

class CategoryController {
    public function index() {
        global $conn;
        $categories = Category::all($conn);
        echo json_encode($categories);
    }

    public function show($id) {
        global $conn;
        $category = Category::find($conn, $id);
        echo json_encode($category);
    }
}
?>
