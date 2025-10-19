<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    $stmt = $pdo->query("SELECT id, image_url, category FROM gallery_images ORDER BY created_at DESC");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Ensure image_url is absolute
    foreach ($data as &$item) {
        $item['image_url'] = 'http://localhost/food_and_restaurant/' . $item['image_url'];
    }
    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error fetching gallery images: ' . $e->getMessage()]);
}
?>