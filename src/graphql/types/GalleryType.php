<?php

    namespace ScandiWeb\GraphQL\Types;
    
    use GraphQL\Type\Definition\Type;
    use GraphQL\Type\Definition\ObjectType;
    
    class GalleryType extends ObjectType {
        public function __construct() {
            parent::__construct([
                'name' => 'Gallery',
                'fields' => [
                    'image' => Type::string(),
                ],
            ]);
        }
    }