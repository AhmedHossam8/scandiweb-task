<?php
    
    namespace ScandiWeb\GraphQL\Types;
    
    use GraphQL\Type\Definition\Type;
    use GraphQL\Type\Definition\ObjectType;
    
    class PriceType extends ObjectType {
        public function __construct() {
            parent::__construct([
                'name' => 'Price',
                'fields' => [
                    'amount' => Type::float(),
                    'currency' => new CurrencyType(),
                    '__typename' => Type::string(),
                ],
            ]);
        }
    }