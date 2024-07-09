<?php

namespace ScandiWeb\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use ScandiWeb\GraphQL\Utils\TypeRegistry;

class OrderType extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'Order',
            'fields' => [
                'id' => Type::nonNull(Type::string()),
                'total' => Type::nonNull(Type::float()),
                'items' => Type::listOf(TypeRegistry::OrderItemType()),
            ],
        ]);
    }
}
