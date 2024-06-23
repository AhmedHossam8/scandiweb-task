<?php
    namespace ScandiWeb\Services;

    use ScandiWeb\Models\Category;

    class CategoryService {
        protected $conn;

        public function __construct($conn) {
            $this->conn = $conn;
        }

        public function getAllCategories() {
            $stmt = $this->conn->prepare('SELECT * FROM categories');
            $stmt->execute();
            return $stmt->fetchAll(\PDO::FETCH_ASSOC); // Correct method
        }
        public function getCategoryByName($name) {
            $stmt = $this->conn->prepare('SELECT * FROM categories WHERE name = :name');
            $stmt->bindParam(':name', $name);
            $stmt->execute();
            return $stmt->fetch(\PDO::FETCH_ASSOC); // Correct method
        }
    }
