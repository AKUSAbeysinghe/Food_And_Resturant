<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    if (!isset($_POST['id']) || !isset($_POST['category'])) {
        echo json_encode(['success' => false, 'message' => 'ID and category are required']);
        exit;
    }

    $id = $_POST['id'];
    $category = $_POST['category'];
    $allowedCategories = ['all', 'signature_dishes', 'restaurant', 'kitchen', 'events'];
    if (!in_array($category, $allowedCategories)) {
        echo json_encode(['success' => false, 'message' => 'Invalid category']);
        exit;
    }

    $imageUrl = null;
    if (isset($_FILES['image']) && $_FILES['image']['size'] > 0) {
        $uploadDir = 'Uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        $fileName = uniqid() . '_' . basename($_FILES['image']['name']);
        $filePath = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
            $imageUrl = $filePath;
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
            exit;
        }
    }

    $query = "UPDATE gallery_images SET category = ?";
    $params = [$category];
    if ($imageUrl) {
        $query .= ", image_url = ?";
        $params[] = $imageUrl;
    }
    $query .= " WHERE id = ?";
    $params[] = $id;

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);

    echo json_encode(['success' => true, 'message' => 'Image updated successfully']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error updating image: ' . $e->getMessage()]);
}
?>