<?php
    namespace ScandiWeb\Models;
    class Category {
        public $id;
        public $name;
    
        public function __construct($id, $name) {
            $this->id = $id;
            $this->name = $name;
        }
    
        public static function all($conn) {
            $sql = "SELECT * FROM categories";
            $result = $conn->query($sql);
        
            $categories = [];
            while($row = $result->fetch_assoc()) {
                $categories[] = new Category($row['id'], $row['name']);
            }
        
            return $categories;
        }
    
        public static function find($conn, $id) {
            $sql = "SELECT * FROM categories WHERE id = $id";
            $result = $conn->query($sql);
        
            if($row = $result->fetch_assoc()) {
                return new Category($row['id'], $row['name']);
            }
        
            return null;
        }
    }
?>
