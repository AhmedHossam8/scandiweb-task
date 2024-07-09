<?php

namespace ScandiWeb\GraphQL\Utils;

use ScandiWeb\GraphQL\Types\ProductType;
use ScandiWeb\GraphQL\Types\CategoryType;
use ScandiWeb\GraphQL\Types\OrderType;
use ScandiWeb\GraphQL\Types\OrderItemType;

class TypeRegistry {
    private static $productType;
    private static $categoryType;
    private static $orderType;
    private static $orderItemType;

    public static function productType() {
        if (!self::$productType) {
            self::$productType = new ProductType();
        }
        return self::$productType;
    }

    public static function categoryType() {
        if (!self::$categoryType) {
            self::$categoryType = new CategoryType();
        }
        return self::$categoryType;
    }

    public static function orderType() {
        if (!self::$orderType) {
            self::$orderType = new OrderType();
        }
        return self::$orderType;
    }

    public static function orderItemType() {
        if (!self::$orderItemType) {
            self::$orderItemType = new OrderItemType();
        }
        return self::$orderItemType;
    }
}
