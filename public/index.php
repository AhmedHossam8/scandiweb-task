<?php
    
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    // Autoload dependencies and project files
    // require_once __DIR__ . '/../src/graphql/schema.php';
    require_once '../src/db.php';
    require_once '../src/graphql/schema.php';
    
    use GraphQL\GraphQL;
    use GraphQL\Error\DebugFlag;
    
    $debug = DebugFlag::INCLUDE_DEBUG_MESSAGE | DebugFlag::INCLUDE_TRACE;
    
    try {
        $rawInput = file_get_contents('php://input');
        $input = json_decode($rawInput, true);
        $query = $input['query'] ?? '';
        $variableValues = $input['variables'] ?? null;
        
        $result = GraphQL::executeQuery($schema, $query, null, ['conn' => $conn], $variableValues);
        $output = $result->toArray($debug);
    } catch (\Exception $e) {
        $output = [
            'errors' => [
                [
                    'message' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ],
            ],
        ];
    }
    
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    echo json_encode($output);

