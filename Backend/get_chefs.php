<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    $stmt = $pdo->query("SELECT id, name, specialty, achievements, experience, image_url FROM chefs ORDER BY created_at DESC");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Ensure image_url is absolute
    foreach ($data as &$item) {
        if ($item['image_url']) {
            $item['image_url'] = 'http://localhost/food_and_restaurant/' . $item['image_url'];
        }
    }
    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error fetching chefs: ' . $e->getMessage()]);
}
?>