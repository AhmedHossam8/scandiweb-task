<?php

    namespace ScandiWeb\GraphQL\Types;

    use GraphQL\Type\Definition\Type;
    use GraphQL\Type\Definition\ObjectType;

    class ProductType extends ObjectType {
        public function __construct() {
            parent::__construct([
                'name' => 'Product',
                'fields' => [
                    'id' => Type::string(),
                    'name' => Type::string(),
                    'description' => Type::string(),
                    'inStock' => Type::boolean(),
                    'prices' => Type::string(),
                    'gallery' => Type::string(),
                    'category' => Type::string(),
                    'attributes' => Type::string(),
                    'brand' => Type::string(),
                ],
            ]);
        }
    }