<?php
require_once '../../src/graphql/schema.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

if ($uri[1] == 'graphql' && $_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'src/graphql/schema.php';
}
?>
