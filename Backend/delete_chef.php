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

    $stmt = $pdo->prepare("SELECT image_url FROM chefs WHERE id = ?");
    $stmt->execute([$_POST['id']]);
    $chef = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($chef && $chef['image_url'] && file_exists($chef['image_url'])) {
        unlink($chef['image_url']);
    }

    $stmt = $pdo->prepare("DELETE FROM chefs WHERE id = ?");
    $stmt->execute([$_POST['id']]);

    echo json_encode(['success' => true, 'message' => 'Chef deleted successfully']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error deleting chef: ' . $e->getMessage()]);
}
?>