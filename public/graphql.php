<?php
require_once '../src/db.php';
require_once '../src/graphql/schema.php';

use GraphQL\GraphQL;

try {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];
    $variableValues = isset($input['variables']) ? $input['variables'] : null;

    $result = GraphQL::executeQuery($schema, $query, null, null, $variableValues);
    $output = $result->toArray();
} catch (\Exception $e) {
    $output = [
        'errors' => [
            [
                'message' => $e->getMessage(),
            ],
        ],
    ];
}

header('Content-Type: application/json');
echo json_encode($output);
