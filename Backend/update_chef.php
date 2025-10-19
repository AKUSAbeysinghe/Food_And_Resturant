<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'db_connect.php';

try {
    if (!isset($_POST['id']) || !isset($_POST['name']) || !isset($_POST['specialty'])) {
        echo json_encode(['success' => false, 'message' => 'ID, name, and specialty are required']);
        exit;
    }

    $id = $_POST['id'];
    $name = $_POST['name'];
    $specialty = $_POST['specialty'];
    $achievements = $_POST['achievements'] ?? '';
    $experience = $_POST['experience'] ?? '';
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

    $query = "UPDATE chefs SET name = ?, specialty = ?, achievements = ?, experience = ?";
    $params = [$name, $specialty, $achievements, $experience];
    if ($imageUrl) {
        $query .= ", image_url = ?";
        $params[] = $imageUrl;
    }
    $query .= " WHERE id = ?";
    $params[] = $id;

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);

    echo json_encode(['success' => true, 'message' => 'Chef updated successfully']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error updating chef: ' . $e->getMessage()]);
}
?>