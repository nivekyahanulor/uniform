<?php
    class Database {
        private static $host = "localhost";
        private static $dbname = "db_uniformv2";
        private static $username = "root";
        private static $password = "";

        public static function connect() {
            try {
                $pdo = new PDO("mysql:host=" . self::$host . ";dbname=" . self::$dbname, self::$username, self::$password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $pdo;
            } catch (PDOException $e) {
                die("Database connection failed: " . $e->getMessage());
            }
        }
    }
?>



