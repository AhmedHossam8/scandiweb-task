<?php

namespace ScandiWeb\GraphQL\Queries;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use ScandiWeb\GraphQL\Utils\TypeRegistry;
use ScandiWeb\Services\ProductService;

class ProductQuery {
    public static function getAllProducts() {
        return [
            'type' => Type::listOf(TypeRegistry::productType()),
            'resolve' => function ($root, $args, $context, ResolveInfo $info) {
                global $conn;
                $productService = new ProductService($conn);
                return $productService->getAllProducts();
            },
        ];
    }

    public static function getProductById() {
        return [
            'type' => TypeRegistry::productType(),
            'args' => [
                'id' => Type::string(),
            ],
            'resolve' => function ($root, $args, $context, ResolveInfo $info) {
                global $conn;
                $productService = new ProductService($conn);
                $productData = $productService->getProductById($args['id']);

                return $productData;
            },
        ];
    }
    public static function getProductsByCategory() {
        return [
            'type' => Type::listOf(TypeRegistry::productType()),
            'args' => [
                'category' => Type::string(),
            ],
            'resolve' => function ($root, $args, $context, ResolveInfo $info) {
                global $conn;
                $productService = new ProductService($conn);
                $productData = $productService->getProductsByCategory($args['category']);

                return $productData;
            },
        ];
    }
}
