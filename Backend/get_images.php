<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require 'db_connect.php';

try {
    $stmt = $pdo->query("SELECT id, image_url FROM images ORDER BY created_at DESC");
    $images = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($images);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error fetching images: ' . $e->getMessage()]);
}
?>