<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    $stmt = $pdo->query("
        SELECT m.id, m.category_id, m.sub_category_id, m.name, m.price, m.description, m.chef, 
               CONCAT('http://localhost/food_and_restaurant/', m.image_url) AS image_url, m.popular,
               c.name AS category_name, s.name AS sub_category_name
        FROM menu_items m
        LEFT JOIN categories c ON m.category_id = c.id
        LEFT JOIN sub_categories s ON m.sub_category_id = s.id
        ORDER BY m.created_at DESC
    ");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['success' => true, 'data' => $data]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error fetching menu items: ' . $e->getMessage()]);
}
?>