<?php

    namespace ScandiWeb\GraphQL\Queries;

    use GraphQL\Type\Definition\Type;
    use GraphQL\Type\Definition\ResolveInfo;
    use ScandiWeb\GraphQL\Utils\TypeRegistry;
    use ScandiWeb\Services\CategoryService;

    class CategoryQuery {
        public static function getAllCategories() {
            return [
                'type' => Type::listOf(TypeRegistry::CategoryType()),
                'resolve' => function ($root, $args, $context, ResolveInfo $info) {
                    global $conn;
                    $categoryService = new CategoryService($conn);
                    return $categoryService->getAllCategories();
                },
            ];
        }

        public static function getCategoryByName() {
            return [
                'type' => TypeRegistry::CategoryType(),
                'args' => [
                    'name' => Type::string(),
                ],
                'resolve' => function ($root, $args, $context, ResolveInfo $info) {
                    $categoryService = new CategoryService($context['conn']);
                    return $categoryService->getCategoryByName($args['name']);
                },
            ];
        }

    }
