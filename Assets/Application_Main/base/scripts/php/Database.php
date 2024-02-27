<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
    session_start();
    include_once "Connection.php";

    class Database
    {
        private static $conn;

        public static function GetConnection()
        {
            $dotenv = Dotenv\Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
            $dotenv->load();

            if (!isset(Database::$conn))
                Database::$conn = new connection($_ENV['DB_HOST'], $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASS'], $_ENV['DB_PORT'], $_ENV['DB_CHARSET']);

            return Database::$conn;
        }
    }