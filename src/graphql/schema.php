<?php

namespace ScandiWeb\GraphQL;

use GraphQL\Type\Schema;
use GraphQL\Type\Definition\ObjectType;
use ScandiWeb\GraphQL\Queries\CategoryQuery;
use ScandiWeb\GraphQL\Queries\ProductQuery;

require_once __DIR__ . '../../../vendor/autoload.php';

// Define GraphQL schema
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'products' => ProductQuery::getAllProducts(),
        'product' => ProductQuery::getProductById(),
        'productsByCategory' => ProductQuery::getProductsByCategory(),
        'categories' => CategoryQuery::getAllCategories(),
        'category' => CategoryQuery::getCategoryByName(),
    ],
]);

$schema = new Schema([
    'query' => $queryType,
]);
