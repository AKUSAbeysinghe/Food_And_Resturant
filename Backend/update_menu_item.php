<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = 'localhost';
$dbname = 'food_and_restaurant';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
}

$id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
$category_id = isset($_POST['category_id']) ? (int)$_POST['category_id'] : 0;
$name = $_POST['name'] ?? '';
$price = isset($_POST['price']) ? (float)$_POST['price'] : 0;
$description = $_POST['description'] ?? '';
$chef = $_POST['chef'] ?? '';
$popular = isset($_POST['popular']) && $_POST['popular'] === 'true' ? 1 : 0;
$sub_category_id = !empty($_POST['sub_category_id']) ? (int)$_POST['sub_category_id'] : null;

if ($id <= 0 || !$name || !$price || !$category_id) {
    echo json_encode(['success' => false, 'message' => 'ID, name, price, and category are required']);
    exit();
}

// Validate category_id
$stmt = $pdo->prepare("SELECT id FROM categories WHERE id = :id");
$stmt->execute([':id' => $category_id]);
if (!$stmt->fetch()) {
    echo json_encode(['success' => false, 'message' => 'Invalid category ID']);
    exit();
}

// Validate sub_category_id (if provided)
if ($sub_category_id) {
    $stmt = $pdo->prepare("SELECT id FROM sub_categories WHERE id = :id AND category_id = :category_id");
    $stmt->execute([':id' => $sub_category_id, ':category_id' => $category_id]);
    if (!$stmt->fetch()) {
        echo json_encode(['success' => false, 'message' => 'Invalid sub-category ID']);
        exit();
    }
}

// Handle image upload
$image_url = null;
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $upload_dir = 'Uploads/';
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }
    $image_name = uniqid() . '_' . basename($_FILES['image']['name']);
    $image_path = $upload_dir . $image_name;
    if (move_uploaded_file($_FILES['image']['tmp_name'], $image_path)) {
        $image_url = $image_path;
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
        exit();
    }
}

$query = "UPDATE menu_items SET category_id = :category_id, sub_category_id = :sub_category_id, name = :name, price = :price, description = :description, chef = :chef, popular = :popular";
$params = [
    ':category_id' => $category_id,
    ':sub_category_id' => $sub_category_id,
    ':name' => $name,
    ':price' => $price,
    ':description' => $description,
    ':chef' => $chef,
    ':popular' => $popular
];

if ($image_url) {
    $query .= ", image_url = :image_url";
    $params[':image_url'] = $image_url;
}

$query .= " WHERE id = :id";
$params[':id'] = $id;

$stmt = $pdo->prepare($query);
try {
    $stmt->execute($params);
    echo json_encode(['success' => true, 'message' => 'Menu item updated successfully']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>