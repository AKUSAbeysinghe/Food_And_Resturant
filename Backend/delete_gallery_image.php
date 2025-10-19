<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    if (!isset($_POST['id'])) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        exit;
    }

    $stmt = $pdo->prepare("SELECT image_url FROM gallery_images WHERE id = ?");
    $stmt->execute([$_POST['id']]);
    $image = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($image && file_exists($image['image_url'])) {
        unlink($image['image_url']);
    }

    $stmt = $pdo->prepare("DELETE FROM gallery_images WHERE id = ?");
    $stmt->execute([$_POST['id']]);

    echo json_encode(['success' => true, 'message' => 'Image deleted successfully']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error deleting image: ' . $e->getMessage()]);
}
?>