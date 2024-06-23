<?php

namespace ScandiWeb\GraphQL\Queries;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use ScandiWeb\GraphQL\Utils\TypeRegistry;
use ScandiWeb\Services\ProductService;
use scandiweb\GraphQL\Types\ProductType;

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

                // Transform gallery to match GraphQL type
                // $productData['gallery'] = json_decode($productData['gallery'], true);

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
