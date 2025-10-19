<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
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

// Predefined data (matching AdminPanel.jsx)
$predefinedCategories = [
    ['id' => 1, 'name' => 'Fast Food', 'description' => 'Quick and delicious comfort food', 'priority' => 1],
    ['id' => 2, 'name' => 'Starters', 'description' => 'Appetizers to kick off your meal', 'priority' => 2],
    ['id' => 3, 'name' => 'Mains', 'description' => 'Hearty main course dishes', 'priority' => 3],
    ['id' => 4, 'name' => 'Beverages', 'description' => 'Refreshing drinks and beverages', 'priority' => 4],
    ['id' => 5, 'name' => 'Desserts', 'description' => 'Sweet treats to end your meal', 'priority' => 5],
    ['id' => 6, 'name' => 'Cafés & Bakery', 'description' => 'Artisan coffee, pastries, and light meals', 'priority' => 6],
    ['id' => 7, 'name' => 'Casual Dining', 'description' => 'Relaxed dining with a variety of dishes', 'priority' => 7],
];

$predefinedSubCategories = [
    1 => [
        ['id' => 1, 'category_id' => 1, 'name' => 'Burgers & Sandwiches', 'description' => 'Classic burgers and sandwiches', 'priority' => 1],
        ['id' => 2, 'category_id' => 1, 'name' => 'Fried Chicken', 'description' => 'Crispy fried chicken dishes', 'priority' => 2],
        ['id' => 3, 'category_id' => 1, 'name' => 'Sides', 'description' => 'Side dishes and snacks', 'priority' => 3],
    ],
    2 => [
        ['id' => 4, 'category_id' => 2, 'name' => 'Appetizers', 'description' => 'Small bites to start', 'priority' => 1],
        ['id' => 5, 'category_id' => 2, 'name' => 'Soups', 'description' => 'Warm and comforting soups', 'priority' => 2],
        ['id' => 6, 'category_id' => 2, 'name' => 'Salads', 'description' => 'Fresh and crisp salads', 'priority' => 3],
    ],
    3 => [
        ['id' => 7, 'category_id' => 3, 'name' => 'Seafood', 'description' => 'Fresh seafood dishes', 'priority' => 1],
        ['id' => 8, 'category_id' => 3, 'name' => 'Meat Dishes', 'description' => 'Savory meat-based mains', 'priority' => 2],
        ['id' => 9, 'category_id' => 3, 'name' => 'Vegetarian Dishes', 'description' => 'Flavorful vegetarian options', 'priority' => 3],
    ],
    4 => [
        ['id' => 10, 'category_id' => 4, 'name' => 'Coffees & Teas', 'description' => 'Hot and cold brews', 'priority' => 1],
        ['id' => 11, 'category_id' => 4, 'name' => 'Juices & Smoothies', 'description' => 'Fresh and fruity drinks', 'priority' => 2],
        ['id' => 12, 'category_id' => 4, 'name' => 'Sodas & Specialty Drinks', 'description' => 'Unique beverages', 'priority' => 3],
    ],
    5 => [
        ['id' => 13, 'category_id' => 5, 'name' => 'Cakes & Pastries', 'description' => 'Sweet baked goods', 'priority' => 1],
        ['id' => 14, 'category_id' => 5, 'name' => 'Ice Creams & Sorbets', 'description' => 'Cool and creamy treats', 'priority' => 2],
        ['id' => 15, 'category_id' => 5, 'name' => 'Puddings & Custards', 'description' => 'Rich and smooth desserts', 'priority' => 3],
    ],
    6 => [
        ['id' => 16, 'category_id' => 6, 'name' => 'Artisan Coffee & Beverages', 'description' => 'Specialty coffee and drinks', 'priority' => 1],
        ['id' => 17, 'category_id' => 6, 'name' => 'Fresh Baked Pastries', 'description' => 'Freshly baked goods', 'priority' => 2],
        ['id' => 18, 'category_id' => 6, 'name' => 'Light Meals & Sandwiches', 'description' => 'Quick and light meals', 'priority' => 3],
    ],
    7 => [
        ['id' => 19, 'category_id' => 7, 'name' => 'Appetizers & Starters', 'description' => 'Tasty starters for casual dining', 'priority' => 1],
        ['id' => 20, 'category_id' => 7, 'name' => 'Main Courses', 'description' => 'Satisfying main dishes', 'priority' => 2],
        ['id' => 21, 'category_id' => 7, 'name' => 'Pasta & Risotto', 'description' => 'Classic pasta and risotto dishes', 'priority' => 3],
    ],
];

// Check if categories table is empty
$stmt = $pdo->query("SELECT COUNT(*) as count FROM categories");
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if ($row['count'] == 0) {
    // Insert categories
    $stmt = $pdo->prepare("INSERT INTO categories (id, name, description, priority) VALUES (:id, :name, :description, :priority)");
    foreach ($predefinedCategories as $cat) {
        $stmt->execute([
            ':id' => $cat['id'],
            ':name' => $cat['name'],
            ':description' => $cat['description'],
            ':priority' => $cat['priority']
        ]);
    }

    // Insert sub-categories
    $stmt = $pdo->prepare("INSERT INTO sub_categories (id, category_id, name, description, priority) VALUES (:id, :category_id, :name, :description, :priority)");
    foreach ($predefinedSubCategories as $cat_id => $sub_cats) {
        foreach ($sub_cats as $sub) {
            $stmt->execute([
                ':id' => $sub['id'],
                ':category_id' => $sub['category_id'],
                ':name' => $sub['name'],
                ':description' => $sub['description'],
                ':priority' => $sub['priority']
            ]);
        }
    }

    echo json_encode(['success' => true, 'message' => 'Database seeded with categories and sub-categories']);
} else {
    echo json_encode(['success' => true, 'message' => 'Database already seeded']);
}
?>