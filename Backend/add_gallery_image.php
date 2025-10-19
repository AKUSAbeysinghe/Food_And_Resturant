<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    if (!isset($_FILES['image']) || !isset($_POST['category'])) {
        echo json_encode(['success' => false, 'message' => 'Image and category are required']);
        exit;
    }

    $category = $_POST['category'];
    $allowedCategories = ['all', 'signature_dishes', 'restaurant', 'kitchen', 'events'];
    if (!in_array($category, $allowedCategories)) {
        echo json_encode(['success' => false, 'message' => 'Invalid category']);
        exit;
    }

    $uploadDir = 'Uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    $fileName = uniqid() . '_' . basename($_FILES['image']['name']);
    $filePath = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
        $absoluteUrl = 'http://localhost/food_and_restaurant/' . $filePath;
        $stmt = $pdo->prepare("INSERT INTO gallery_images (image_url, category) VALUES (?, ?)");
        $stmt->execute([$filePath, $category]);
        echo json_encode(['success' => true, 'message' => 'Image added successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error adding image: ' . $e->getMessage()]);
}
?>