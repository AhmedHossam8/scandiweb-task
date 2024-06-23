<?php
require_once 'src/controllers/ProductController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

if ($uri[1] == 'products' && $_SERVER['REQUEST_METHOD'] == 'GET') {
    $controller = new ProductController();

    if (isset($uri[2])) {
        $controller->show($uri[2]);
    } else {
        $controller->index();
    }
}

?>
