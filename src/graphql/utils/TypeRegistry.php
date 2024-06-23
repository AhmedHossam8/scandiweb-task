<?php

    namespace ScandiWeb\GraphQL\Utils;

    use ScandiWeb\GraphQL\Types\ProductType;
    use ScandiWeb\GraphQL\Types\CategoryType;

    class TypeRegistry {
        private static $productType;
        private static $categoryType;

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
    }
