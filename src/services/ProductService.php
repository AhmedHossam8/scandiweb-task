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
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
            foreach ($products as &$product) {
                $product['gallery'] = json_decode($product['gallery'], true);
            }
            foreach ($products as &$product) {
                $product['attributes'] = json_decode($product['attributes'], true);
            }
            foreach ($products as &$product) {
                $product['prices'] = json_decode($product['prices'], true);
            }
            return $products;
        }

        public function getProductById($id)
        {
            $query = "SELECT * FROM products WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR);
            $stmt->execute();
            
            $product = $stmt->fetch(PDO::FETCH_ASSOC);

            $product['gallery'] = json_decode($product['gallery'], true); 
            $product['attributes'] = json_decode($product['attributes'], true);
            $product['prices'] = json_decode($product['prices'], true);

            return $product;
            
        }
        public function getProductsByCategory($category)
        {
            $query = "SELECT * FROM products WHERE category = :category";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':category', $category, PDO::PARAM_STR);
            $stmt->execute();
            
            $products =  $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach ($products as &$product) {
                $product['gallery'] = json_decode($product['gallery'], true);
            }
            foreach ($products as &$product) {
                $product['attributes'] = json_decode($product['attributes'], true);
            }
            foreach ($products as &$product) {
                $product['prices'] = json_decode($product['prices'], true);
            }
            if ($products === false || count($products) === 0) {
                $query = "SELECT * FROM products";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
                
                $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach ($products as &$product) {
                    $product['gallery'] = json_decode($product['gallery'], true);
                }
                foreach ($products as &$product) {
                    $product['attributes'] = json_decode($product['attributes'], true);
                }
                foreach ($products as &$product) {
                    $product['prices'] = json_decode($product['prices'], true);
                }
                return $products;
            } else {
                return $products; // Return the array of products
            }
        }
    }
