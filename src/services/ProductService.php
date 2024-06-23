<?php
    namespace ScandiWeb\Services;

    use PDO;

    class ProductService
    {
        protected $conn;

        public function __construct(PDO $conn)
        {
            $this->conn = $conn;
        }

        public function getAllProducts()
        {
            $query = "SELECT * FROM products";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function getProductById($id)
        {
            $query = "SELECT * FROM products WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        public function getProductsByCategory($category)
        {
            $query = "SELECT * FROM products WHERE category = :category";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':category', $category, PDO::PARAM_STR);
            $stmt->execute();
            
            $products =  $stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($products === false || count($products) === 0) {
                $query = "SELECT * FROM products";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return $products; // Return the array of products
            }
        }
    }
