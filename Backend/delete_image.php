<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require 'db_connect.php';

try {
    $id = isset($_POST['id']) ? (int)$_POST['id'] : null;
    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        exit();
    }

    $stmt = $pdo->prepare("DELETE FROM images WHERE id = ?");
    $stmt->execute([$id]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Image deleted successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Image not found']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error deleting image: ' . $e->getMessage()]);
}
?>