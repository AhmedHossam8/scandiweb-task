<?php

namespace ScandiWeb\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;

class OrderItemType extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'OrderItem',
            'fields' => [
                'productId' => Type::nonNull(Type::string()),
                'quantity' => Type::nonNull(Type::int()),
            ],
        ]);
    }
}
