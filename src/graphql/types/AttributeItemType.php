<?php

    namespace ScandiWeb\GraphQL\Types;

    use GraphQL\Type\Definition\Type;
    use GraphQL\Type\Definition\ObjectType;

    class AttributeItemType extends ObjectType {
        public function __construct() {
            parent::__construct([
                'name' => 'AttributeItem',
                'fields' => [
                    'id' => Type::string(),
                    'value' => Type::string(),
                    'displayValue' => Type::string(),
                    '__typename' => Type::string(),
                ],
            ]);
        }
    }