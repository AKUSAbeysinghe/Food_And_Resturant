<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require 'db_connect.php';

try {
    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['success' => false, 'message' => 'Image is required']);
        exit();
    }

    $upload_dir = 'uploads/';
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }
    $image_name = time() . '_' . basename($_FILES['image']['name']);
    $image_path = $upload_dir . $image_name;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $image_path)) {
        $stmt = $pdo->prepare("INSERT INTO images (image_url) VALUES (?)");
        $stmt->execute([$image_path]);
        echo json_encode(['success' => true, 'message' => 'Image added successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error adding image: ' . $e->getMessage()]);
}
?>