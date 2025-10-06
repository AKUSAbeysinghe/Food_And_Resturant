// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("menu_items");
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
//   const [images, setImages] = useState([]);
//   const [imageData, setImageData] = useState({ image: null });
//   const [formData, setFormData] = useState({
//     category_id: "",
//     sub_category_id: "",
//     name: "",
//     price: "",
//     description: "",
//     chef: "",
//     image: null,
//     popular: false,
//   });

//   const [admin, setAdmin] = useState({
//     name: "Loading...",
//     email: "Loading...",
//     profilePic: "https://i.pravatar.cc/100?img=25",
//   });
//   const [adminLoading, setAdminLoading] = useState(true);

//   const navigate = useNavigate();

//   // Predefined categories and subcategories
//   const predefinedCategories = [
//     { id: 1, name: "Fast Food", description: "Quick and delicious comfort food", priority: 1 },
//     { id: 2, name: "Starters", description: "Appetizers to kick off your meal", priority: 2 },
//     { id: 3, name: "Mains", description: "Hearty main course dishes", priority: 3 },
//     { id: 4, name: "Beverages", description: "Refreshing drinks and beverages", priority: 4 },
//     { id: 5, name: "Desserts", description: "Sweet treats to end your meal", priority: 5 },
//     { id: 6, name: "Cafés & Bakery", description: "Artisan coffee, pastries, and light meals", priority: 6 },
//     { id: 7, name: "Casual Dining", description: "Relaxed dining with a variety of dishes", priority: 7 },
//   ];

//   const predefinedSubCategories = {
//     1: [
//       { id: 1, category_id: 1, name: "Burgers & Sandwiches", description: "Classic burgers and sandwiches", priority: 1 },
//       { id: 2, category_id: 1, name: "Fried Chicken", description: "Crispy fried chicken dishes", priority: 2 },
//       { id: 3, category_id: 1, name: "Sides", description: "Side dishes and snacks", priority: 3 },
//     ],
//     2: [
//       { id: 4, category_id: 2, name: "Appetizers", description: "Small bites to start", priority: 1 },
//       { id: 5, category_id: 2, name: "Soups", description: "Warm and comforting soups", priority: 2 },
//       { id: 6, category_id: 2, name: "Salads", description: "Fresh and crisp salads", priority: 3 },
//     ],
//     3: [
//       { id: 7, category_id: 3, name: "Seafood", description: "Fresh seafood dishes", priority: 1 },
//       { id: 8, category_id: 3, name: "Meat Dishes", description: "Savory meat-based mains", priority: 2 },
//       { id: 9, category_id: 3, name: "Vegetarian Dishes", description: "Flavorful vegetarian options", priority: 3 },
//     ],
//     4: [
//       { id: 10, category_id: 4, name: "Coffees & Teas", description: "Hot and cold brews", priority: 1 },
//       { id: 11, category_id: 4, name: "Juices & Smoothies", description: "Fresh and fruity drinks", priority: 2 },
//       { id: 12, category_id: 4, name: "Sodas & Specialty Drinks", description: "Unique beverages", priority: 3 },
//     ],
//     5: [
//       { id: 13, category_id: 5, name: "Cakes & Pastries", description: "Sweet baked goods", priority: 1 },
//       { id: 14, category_id: 5, name: "Ice Creams & Sorbets", description: "Cool and creamy treats", priority: 2 },
//       { id: 15, category_id: 5, name: "Puddings & Custards", description: "Rich and smooth desserts", priority: 3 },
//     ],
//     6: [
//       { id: 16, category_id: 6, name: "Artisan Coffee & Beverages", description: "Specialty coffee and drinks", priority: 1 },
//       { id: 17, category_id: 6, name: "Fresh Baked Pastries", description: "Freshly baked goods", priority: 2 },
//       { id: 18, category_id: 6, name: "Light Meals & Sandwiches", description: "Quick and light meals", priority: 3 },
//     ],
//     7: [
//       { id: 19, category_id: 7, name: "Appetizers & Starters", description: "Tasty starters for casual dining", priority: 1 },
//       { id: 20, category_id: 7, name: "Main Courses", description: "Satisfying main dishes", priority: 2 },
//       { id: 21, category_id: 7, name: "Pasta & Risotto", description: "Classic pasta and risotto dishes", priority: 3 },
//     ],
//   };

//   // Input change handler
//   const handleChange = (e, isImage = false) => {
//     const { name, value, files, type, checked } = e.target;
//     if (isImage) {
//       setImageData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: type === "checkbox" ? checked : files ? files[0] : value,
//       }));
//       if (name === "category_id") {
//         setSubCategories(predefinedSubCategories[value] || []);
//         setFormData((prev) => ({ ...prev, sub_category_id: "" }));
//       }
//     }
//   };

//   // Fetch Admin Details
//   const fetchAdmin = async () => {
//     setAdminLoading(true);
//     try {
//       let adminId = localStorage.getItem("adminId") || 1;
//       const res = await fetch(`http://localhost/food_and_restaurant/get_admin.php?id=${adminId}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       if (data.success && data.admin) {
//         setAdmin({
//           name: data.admin.username || "Temporary Admin",
//           email: data.admin.email || "No email provided",
//           profilePic: "https://i.pravatar.cc/100?img=25",
//         });
//       } else {
//         setAdmin({
//           name: "Temporary Admin",
//           email: "No email provided",
//           profilePic: "https://i.pravatar.cc/100?img=25",
//         });
//       }
//     } catch (e) {
//       setAdmin({
//         name: "Temporary Admin",
//         email: "No email provided",
//         profilePic: "https://i.pravatar.cc/100?img=25",
//       });
//     } finally {
//       setAdminLoading(false);
//     }
//   };

//   // Fetch Categories
//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("http://localhost/food_and_restaurant/get_categories.php", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       if (data.success && Array.isArray(data.data)) {
//         setCategories(data.data);
//         if (data.data.length > 0) {
//           setFormData((prev) => ({ ...prev, category_id: data.data[0].id }));
//           setSubCategories(predefinedSubCategories[data.data[0].id] || []);
//         }
//       } else {
//         setCategories(predefinedCategories);
//         setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
//         setError("⚠️ Using predefined categories.");
//       }
//     } catch (e) {
//       setCategories(predefinedCategories);
//       setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
//       setError("⚠️ Could not fetch categories: " + e.message);
//     }
//   };

//   // Fetch Menu Items
//   const fetchMenuItems = async () => {
//     try {
//       const res = await fetch("http://localhost/food_and_restaurant/get_menu_items.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       if (data.success === false) {
//           setError(data.message || "⚠️ Could not fetch menu items.");
//           setMenuItems([]);
//       } else {
//           setMenuItems(Array.isArray(data.data) ? data.data : []);
//       }
//     } catch (e) {
//       setError("⚠️ Could not fetch menu items: " + e.message);
//       setMenuItems([]);
//     }
//   };

//   // Fetch Images
//   const fetchImages = async () => {
//     try {
//       const res = await fetch("http://localhost/food_and_restaurant/get_images.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setImages(Array.isArray(data) ? data : []);
//     } catch (e) {
//       setError("⚠️ Could not fetch images.");
//     }
//   };

//   useEffect(() => {
//     fetchAdmin();
//     fetchCategories();
//     fetchMenuItems();
//     fetchImages();
//   }, []);

//   // Save / Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     const isImage = activeTab === "images";
//     const formObj = isImage ? imageData : formData;

//     if (isImage && !formObj.image && !isEditing) {
//       setError("⚠️ Please select an image.");
//       setIsSubmitting(false);
//       return;
//     }

//     if (!isImage && (!formObj.name || !formObj.price || !formObj.category_id)) {
//       setError("⚠️ Name, price, and category are required.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const data = new FormData();
//       Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
//       if (isEditing) data.append("id", editId);

//       const url = isImage
//         ? isEditing
//           ? "http://localhost/food_and_restaurant/update_image.php"
//           : "http://localhost/food_and_restaurant/add_image.php"
//         : isEditing
//         ? "http://localhost/food_and_restaurant/update_menu_item.php"
//         : "http://localhost/food_and_restaurant/add_menu_item.php";

//       const res = await fetch(url, { method: "POST", body: data });
//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         setError(result.message || "❌ Save failed");
//       } else {
//         setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
//         setShowForm(false);
//         if (isImage) {
//           setImageData({ image: null });
//           await fetchImages();
//         } else {
//           setFormData({
//             category_id: categories.length > 0 ? categories[0].id : "",
//             sub_category_id: "",
//             name: "",
//             price: "",
//             description: "",
//             chef: "",
//             image: null,
//             popular: false,
//           });
//           await fetchMenuItems();
//         }
//         setIsEditing(false);
//         setEditId(null);
//       }
//     } catch (err) {
//       setError("⚠️ Server error while saving");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete Confirmation
//   const confirmDelete = (id) => {
//     setItemToDelete(id);
//     setShowConfirmModal(true);
//   };

//   // Delete
//   const handleDelete = async () => {
//     if (!itemToDelete) return;
//     setShowConfirmModal(false);
//     setMessage("");
//     setError("");

//     try {
//       const url =
//         activeTab === "images"
//           ? "http://localhost/food_and_restaurant/delete_image.php"
//           : "http://localhost/food_and_restaurant/delete_menu_item.php";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${itemToDelete}`,
//       });

//       const result = await res.json();
//       if (result.success) {
//         if (activeTab === "images") {
//           setImages(images.filter((img) => img.id !== itemToDelete));
//         } else {
//           setMenuItems(menuItems.filter((item) => item.id !== itemToDelete));
//         }
//         setMessage("✅ Deleted!");
//       } else {
//         setError(result.message || "❌ Delete failed");
//       }
//     } catch (err) {
//       setError("⚠️ Server error while deleting");
//     } finally {
//       setItemToDelete(null);
//     }
//   };

//   // Edit
//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setEditId(item.id);

//     if (activeTab === "images") {
//       setImageData({ image: null });
//     } else {
//       setFormData({
//         category_id: item.category_id || (categories.length > 0 ? categories[0].id : ""),
//         sub_category_id: item.sub_category_id || "",
//         name: item.name || "",
//         price: item.price || "",
//         description: item.description || "",
//         chef: item.chef || "",
//         image: null,
//         popular: item.popular || false,
//       });
//       setSubCategories(predefinedSubCategories[item.category_id] || []);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
//       {/* Admin Panel Header */}
//       <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow-lg p-6 border-b-2 border-gray-200">
//         <div className="flex items-center gap-6">
//           <div className="relative">
//             <img
//               src={admin.profilePic}
//               alt="admin"
//               className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
//             />
//             <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
//           </div>
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{admin.name}</h1>
//             <p className="text-md text-gray-600 mt-1">{admin.email}</p>
//             <p className="text-sm font-semibold text-green-600 mt-1 tracking-wide">Admin Panel</p>
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <button
//             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
//               activeTab === "menu_items" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//             onClick={() => setActiveTab("menu_items")}
//           >
//             Menu Items
//           </button>
//           <button
//             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
//               activeTab === "images" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//             onClick={() => setActiveTab("images")}
//           >
//             Images
//           </button>
//         </div>
//       </div>

//       {/* Alerts & Messages */}
//       {message && (
//         <div className="mb-6 p-4 rounded-lg bg-green-200 text-green-800 border-2 border-green-400 font-medium transition-all duration-300">
//           {message}
//         </div>
//       )}
//       {error && (
//         <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium transition-all duration-300">
//           {error}
//         </div>
//       )}

//       {/* Action Button */}
//       <div className="mb-6">
//         <button
//           className="bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
//           onClick={() => {
//             setShowForm(true);
//             setIsEditing(false);
//             setEditId(null);
//             setImageData({ image: null });
//             setFormData({
//               category_id: categories.length > 0 ? categories[0].id : "",
//               sub_category_id: "",
//               name: "",
//               price: "",
//               description: "",
//               chef: "",
//               image: null,
//               popular: false,
//             });
//             setSubCategories(predefinedSubCategories[categories[0]?.id] || []);
//           }}
//         >
//           <span className="font-semibold">+ Add {activeTab === "images" ? "Image" : "Menu Item"}</span>
//         </button>
//       </div>

//       {/* Menu Items Table */}
//       {activeTab === "menu_items" && (
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Menu Items</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border-collapse">
//               <thead className="bg-gray-200 text-gray-700">
//                 <tr className="border-b-2 border-gray-300">
//                   <th className="p-4 text-left">ID</th>
//                   <th className="p-4 text-left">Image</th>
//                   <th className="p-4 text-left">Name</th>
//                   <th className="p-4 text-left">Category</th>
//                   <th className="p-4 text-left">Sub-Category</th>
//                   <th className="p-4 text-left">Price</th>
//                   <th className="p-4 text-left">Description</th>
//                   <th className="p-4 text-left">Chef</th>
//                   <th className="p-4 text-left">Popular</th>
//                   <th className="p-4 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {menuItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="10" className="p-6 text-center text-gray-400">
//                       No menu items available
//                     </td>
//                   </tr>
//                 ) : (
//                   menuItems.map((item) => (
//                     <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                       <td className="p-4">{item.id}</td>
//                       <td className="p-4">
//                         {item.image_url ? (
//                           <img
//                             src={item.image_url}
//                             alt={item.name}
//                             className="w-14 h-14 object-cover rounded-md shadow-sm"
//                           />
//                         ) : (
//                           "No Image"
//                         )}
//                       </td>
//                       <td className="p-4 font-medium">{item.name}</td>
//                       <td className="p-4">{item.category_name || "Unknown"}</td>
//                       <td className="p-4">{item.sub_category_name || "None"}</td>
//                       <td className="p-4 text-gray-600">Rs.{Number(item.price).toFixed(2)}</td>
//                       <td className="p-4">{item.description || "N/A"}</td>
//                       <td className="p-4">{item.chef || "N/A"}</td>
//                       <td className="p-4">{item.popular ? "Yes" : "No"}</td>
//                       <td className="p-4 space-x-2">
//                         <button
//                           onClick={() => handleEdit(item)}
//                           className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => confirmDelete(item.id)}
//                           className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Images Table */}
//       {activeTab === "images" && (
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Images</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border-collapse">
//               <thead className="bg-gray-200 text-gray-700">
//                 <tr className="border-b-2 border-gray-300">
//                   <th className="p-4 text-left">ID</th>
//                   <th className="p-4 text-left">Image</th>
//                   <th className="p-4 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {images.length === 0 ? (
//                   <tr>
//                     <td colSpan="3" className="p-6 text-center text-gray-400">
//                       No images available
//                     </td>
//                   </tr>
//                 ) : (
//                   images.map((img) => (
//                     <tr key={img.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                       <td className="p-4">{img.id}</td>
//                       <td className="p-4">
//                         <img
//                           src={img.image_url}
//                           alt={`Image ${img.id}`}
//                           className="w-14 h-14 object-cover rounded-md shadow-sm"
//                         />
//                       </td>
//                       <td className="p-4 space-x-2">
//                         <button
//                           onClick={() => handleEdit(img)}
//                           className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => confirmDelete(img.id)}
//                           className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg transform scale-100 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-bold mb-6 text-center">
//               {isEditing
//                 ? `Edit ${activeTab === "images" ? "Image" : "Menu Item"}`
//                 : `Add New ${activeTab === "images" ? "Image" : "Menu Item"}`}
//             </h3>

//             {activeTab === "menu_items" ? (
//               <>
//                 <select
//                   name="category_id"
//                   value={formData.category_id}
//                   onChange={handleChange}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   required
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((cat) => (
//                     <option key={cat.id} value={cat.id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   name="sub_category_id"
//                   value={formData.sub_category_id}
//                   onChange={handleChange}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                 >
//                   <option value="">Select Sub-Category (Optional)</option>
//                   {subCategories.map((sub) => (
//                     <option key={sub.id} value={sub.id}>
//                       {sub.name}
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Item Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   step="0.01"
//                   min="0"
//                   required
//                 />
//                 <textarea
//                   name="description"
//                   placeholder="Description (Optional)"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                 />
//                 <input
//                   type="text"
//                   name="chef"
//                   placeholder="Chef Name (Optional)"
//                   value={formData.chef}
//                   onChange={handleChange}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                 />
//                 <div className="mb-4">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       name="popular"
//                       checked={formData.popular}
//                       onChange={handleChange}
//                       className="mr-2"
//                     />
//                     <span className="text-sm font-semibold">Mark as Popular</span>
//                   </label>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-2">Image (Optional)</label>
//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     onChange={handleChange}
//                     className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                   />
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-2">Image</label>
//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     onChange={(e) => handleChange(e, true)}
//                     className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                     required={!isEditing}
//                   />
//                 </div>
//               </>
//             )}

//             <div className="flex justify-between mt-6">
//               <button
//                 type="button"
//                 className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
//                 onClick={() => {
//                   setShowForm(false);
//                   setIsEditing(false);
//                 }}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-gray-900 rounded-full font-semibold text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Confirmation Modal */}
//       {showConfirmModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
//           <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
//             <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete this item? This action cannot be undone.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={() => setShowConfirmModal(false)}
//                 className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-6 py-2 bg-red-600 rounded-full font-semibold text-white hover:bg-red-700 transition-colors"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("menu_items");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [chefs, setChefs] = useState([]);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [imageData, setImageData] = useState({ image: null, category: "all" });
  const [chefData, setChefData] = useState({
    name: "",
    specialty: "",
    achievements: "",
    experience: "",
    image: null,
  });
  const [formData, setFormData] = useState({
    category_id: "",
    sub_category_id: "",
    name: "",
    price: "",
    description: "",
    chef: "",
    image: null,
    popular: false,
  });

  const [admin, setAdmin] = useState({
    name: "Loading...",
    email: "Loading...",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });
  const [adminLoading, setAdminLoading] = useState(true);

  const navigate = useNavigate();

  // Predefined categories and subcategories
  const predefinedCategories = [
    { id: 1, name: "Fast Food", description: "Quick and delicious comfort food", priority: 1 },
    { id: 2, name: "Starters", description: "Appetizers to kick off your meal", priority: 2 },
    { id: 3, name: "Mains", description: "Hearty main course dishes", priority: 3 },
    { id: 4, name: "Beverages", description: "Refreshing drinks and beverages", priority: 4 },
    { id: 5, name: "Desserts", description: "Sweet treats to end your meal", priority: 5 },
    { id: 6, name: "Cafés & Bakery", description: "Artisan coffee, pastries, and light meals", priority: 6 },
    { id: 7, name: "Casual Dining", description: "Relaxed dining with a variety of dishes", priority: 7 },
  ];

  const predefinedSubCategories = {
    1: [
      { id: 1, category_id: 1, name: "Burgers & Sandwiches", description: "Classic burgers and sandwiches", priority: 1 },
      { id: 2, category_id: 1, name: "Fried Chicken", description: "Crispy fried chicken dishes", priority: 2 },
      { id: 3, category_id: 1, name: "Sides", description: "Side dishes and snacks", priority: 3 },
    ],
    2: [
      { id: 4, category_id: 2, name: "Appetizers", description: "Small bites to start", priority: 1 },
      { id: 5, category_id: 2, name: "Soups", description: "Warm and comforting soups", priority: 2 },
      { id: 6, category_id: 2, name: "Salads", description: "Fresh and crisp salads", priority: 3 },
    ],
    3: [
      { id: 7, category_id: 3, name: "Seafood", description: "Fresh seafood dishes", priority: 1 },
      { id: 8, category_id: 3, name: "Meat Dishes", description: "Savory meat-based mains", priority: 2 },
      { id: 9, category_id: 3, name: "Vegetarian Dishes", description: "Flavorful vegetarian options", priority: 3 },
    ],
    4: [
      { id: 10, category_id: 4, name: "Coffees & Teas", description: "Hot and cold brews", priority: 1 },
      { id: 11, category_id: 4, name: "Juices & Smoothies", description: "Fresh and fruity drinks", priority: 2 },
      { id: 12, category_id: 4, name: "Sodas & Specialty Drinks", description: "Unique beverages", priority: 3 },
    ],
    5: [
      { id: 13, category_id: 5, name: "Cakes & Pastries", description: "Sweet baked goods", priority: 1 },
      { id: 14, category_id: 5, name: "Ice Creams & Sorbets", description: "Cool and creamy treats", priority: 2 },
      { id: 15, category_id: 5, name: "Puddings & Custards", description: "Rich and smooth desserts", priority: 3 },
    ],
    6: [
      { id: 16, category_id: 6, name: "Artisan Coffee & Beverages", description: "Specialty coffee and drinks", priority: 1 },
      { id: 17, category_id: 6, name: "Fresh Baked Pastries", description: "Freshly baked goods", priority: 2 },
      { id: 18, category_id: 6, name: "Light Meals & Sandwiches", description: "Quick and light meals", priority: 3 },
    ],
    7: [
      { id: 19, category_id: 7, name: "Appetizers & Starters", description: "Tasty starters for casual dining", priority: 1 },
      { id: 20, category_id: 7, name: "Main Courses", description: "Satisfying main dishes", priority: 2 },
      { id: 21, category_id: 7, name: "Pasta & Risotto", description: "Classic pasta and risotto dishes", priority: 3 },
    ],
  };

  // Gallery categories
  const galleryCategories = [
    { value: "all", label: "All Photos" },
    { value: "signature_dishes", label: "Signature Dishes" },
    { value: "restaurant", label: "Restaurant" },
    { value: "kitchen", label: "Kitchen" },
    { value: "events", label: "Events" },
  ];

  // Input change handler
  const handleChange = (e, isImage = false, isChef = false) => {
    const { name, value, files, type, checked } = e.target;
    if (isImage) {
      setImageData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    } else if (isChef) {
      setChefData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : files ? files[0] : value,
      }));
      if (name === "category_id") {
        setSubCategories(predefinedSubCategories[value] || []);
        setFormData((prev) => ({ ...prev, sub_category_id: "" }));
      }
    }
  };

  // Fetch Admin Details
  const fetchAdmin = async () => {
    setAdminLoading(true);
    try {
      let adminId = localStorage.getItem("adminId") || 1;
      const res = await fetch(`http://localhost/food_and_restaurant/get_admin.php?id=${adminId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success && data.admin) {
        setAdmin({
          name: data.admin.username || "Temporary Admin",
          email: data.admin.email || "No email provided",
          profilePic: "https://i.pravatar.cc/100?img=25",
        });
      } else {
        setAdmin({
          name: "Temporary Admin",
          email: "No email provided",
          profilePic: "https://i.pravatar.cc/100?img=25",
        });
      }
    } catch (e) {
      setAdmin({
        name: "Temporary Admin",
        email: "No email provided",
        profilePic: "https://i.pravatar.cc/100?img=25",
      });
    } finally {
      setAdminLoading(false);
    }
  };

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_categories.php", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setCategories(data.data);
        if (data.data.length > 0) {
          setFormData((prev) => ({ ...prev, category_id: data.data[0].id }));
          setSubCategories(predefinedSubCategories[data.data[0].id] || []);
        }
      } else {
        setCategories(predefinedCategories);
        setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
        setError("⚠️ Using predefined categories.");
      }
    } catch (e) {
      setCategories(predefinedCategories);
      setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
      setError("⚠️ Could not fetch categories: " + e.message);
    }
  };

  // Fetch Menu Items
  const fetchMenuItems = async () => {
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_menu_items.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      if (data.success === false) {
        setError(data.message || "⚠️ Could not fetch menu items.");
        setMenuItems([]);
      } else {
        setMenuItems(Array.isArray(data.data) ? data.data : []);
      }
    } catch (e) {
      setError("⚠️ Could not fetch menu items: " + e.message);
      setMenuItems([]);
    }
  };

  // Fetch Gallery Images
  const fetchGalleryImages = async () => {
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_gallery_images.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setGalleryImages(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("⚠️ Could not fetch gallery images.");
    }
  };

  // Fetch Chefs
  const fetchChefs = async () => {
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_chefs.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setChefs(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("⚠️ Could not fetch chefs.");
    }
  };

  useEffect(() => {
    fetchAdmin();
    fetchCategories();
    fetchMenuItems();
    fetchGalleryImages();
    fetchChefs();
  }, []);

  // Save / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    const isGallery = activeTab === "gallery";
    const isChef = activeTab === "chefs";
    const formObj = isGallery ? imageData : isChef ? chefData : formData;

    if (isGallery && !formObj.image && !isEditing) {
      setError("⚠️ Please select an image.");
      setIsSubmitting(false);
      return;
    }

    if (isChef && (!formObj.name || !formObj.specialty)) {
      setError("⚠️ Name and specialty are required for chefs.");
      setIsSubmitting(false);
      return;
    }

    if (!isGallery && !isChef && (!formObj.name || !formObj.price || !formObj.category_id || formObj.price < 0)) {
      setError("⚠️ Name, price, and category are required, and price must be non-negative.");
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
      if (isEditing) data.append("id", editId);

      const url = isGallery
        ? isEditing
          ? "http://localhost/food_and_restaurant/update_gallery_image.php"
          : "http://localhost/food_and_restaurant/add_gallery_image.php"
        : isChef
        ? isEditing
          ? "http://localhost/food_and_restaurant/update_chef.php"
          : "http://localhost/food_and_restaurant/add_chef.php"
        : isEditing
        ? "http://localhost/food_and_restaurant/update_menu_item.php"
        : "http://localhost/food_and_restaurant/add_menu_item.php";

      const res = await fetch(url, { method: "POST", body: data });
      const result = await res.json();

      if (!res.ok || !result.success) {
        setError(result.message || "❌ Save failed");
      } else {
        setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
        setShowForm(false);
        if (isGallery) {
          setImageData({ image: null, category: "all" });
          await fetchGalleryImages();
        } else if (isChef) {
          setChefData({
            name: "",
            specialty: "",
            achievements: "",
            experience: "",
            image: null,
          });
          await fetchChefs();
        } else {
          setFormData({
            category_id: categories.length > 0 ? categories[0].id : "",
            sub_category_id: "",
            name: "",
            price: "",
            description: "",
            chef: "",
            image: null,
            popular: false,
          });
          await fetchMenuItems();
        }
        setIsEditing(false);
        setEditId(null);
      }
    } catch (err) {
      setError("⚠️ Server error while saving");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Confirmation
  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowConfirmModal(true);
  };

  // Delete
  const handleDelete = async () => {
    if (!itemToDelete) return;
    setShowConfirmModal(false);
    setMessage("");
    setError("");

    try {
      const url =
        activeTab === "gallery"
          ? "http://localhost/food_and_restaurant/delete_gallery_image.php"
          : activeTab === "chefs"
          ? "http://localhost/food_and_restaurant/delete_chef.php"
          : "http://localhost/food_and_restaurant/delete_menu_item.php";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${itemToDelete}`,
      });

      const result = await res.json();
      if (result.success) {
        if (activeTab === "gallery") {
          setGalleryImages(galleryImages.filter((img) => img.id !== itemToDelete));
        } else if (activeTab === "chefs") {
          setChefs(chefs.filter((chef) => chef.id !== itemToDelete));
        } else {
          setMenuItems(menuItems.filter((item) => item.id !== itemToDelete));
        }
        setMessage("✅ Deleted!");
      } else {
        setError(result.message || "❌ Delete failed");
      }
    } catch (err) {
      setError("⚠️ Server error while deleting");
    } finally {
      setItemToDelete(null);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(item.id);

    if (activeTab === "gallery") {
      setImageData({ image: null, category: item.category || "all" });
    } else if (activeTab === "chefs") {
      setChefData({
        name: item.name || "",
        specialty: item.specialty || "",
        achievements: item.achievements || "",
        experience: item.experience || "",
        image: null,
      });
    } else {
      setFormData({
        category_id: item.category_id || (categories.length > 0 ? categories[0].id : ""),
        sub_category_id: item.sub_category_id || "",
        name: item.name || "",
        price: item.price || "",
        description: item.description || "",
        chef: item.chef || "",
        image: null,
        popular: item.popular || false,
      });
      setSubCategories(predefinedSubCategories[item.category_id] || []);
    }
  };

  // Filter gallery images based on selected category
  const filteredGalleryImages = galleryFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === galleryFilter);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
      {/* Admin Panel Header */}
      <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow-lg p-6 border-b-2 border-gray-200">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={admin.profilePic}
              alt="admin"
              className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100?text=No+Image";
              }}
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{admin.name}</h1>
            <p className="text-md text-gray-600 mt-1">{admin.email}</p>
            <p className="text-sm font-semibold text-green-600 mt-1 tracking-wide">Admin Panel</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "menu_items" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("menu_items")}
          >
            Menu Items
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "gallery" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "chefs" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("chefs")}
          >
            Chefs
          </button>
        </div>
      </div>

      {/* Alerts & Messages */}
      {message && (
        <div className="mb-6 p-4 rounded-lg bg-green-200 text-green-800 border-2 border-green-400 font-medium transition-all duration-300">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium transition-all duration-300">
          {error}
        </div>
      )}

      {/* Action Button */}
      <div className="mb-6">
        <button
          className="bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setEditId(null);
            setImageData({ image: null, category: "all" });
            setChefData({
              name: "",
              specialty: "",
              achievements: "",
              experience: "",
              image: null,
            });
            setFormData({
              category_id: categories.length > 0 ? categories[0].id : "",
              sub_category_id: "",
              name: "",
              price: "",
              description: "",
              chef: "",
              image: null,
              popular: false,
            });
            setSubCategories(predefinedSubCategories[categories[0]?.id] || []);
          }}
        >
          <span className="font-semibold">+ Add {activeTab === "gallery" ? "Image" : activeTab === "chefs" ? "Chef" : "Menu Item"}</span>
        </button>
      </div>

      {/* Menu Items Table */}
      {activeTab === "menu_items" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Menu Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Sub-Category</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Chef</th>
                  <th className="p-4 text-left">Popular</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="p-6 text-center text-gray-400">
                      No menu items available
                    </td>
                  </tr>
                ) : (
                  menuItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{item.id}</td>
                      <td className="p-4">
                        {item.image_url ? (
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded-md shadow-sm"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150?text=No+Image";
                              console.error(`Failed to load image: ${item.image_url}`);
                            }}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4">{item.category_name || "Unknown"}</td>
                      <td className="p-4">{item.sub_category_name || "None"}</td>
                      <td className="p-4 text-gray-600">Rs.{Number(item.price).toFixed(2)}</td>
                      <td className="p-4">{item.description || "N/A"}</td>
                      <td className="p-4">{item.chef || "N/A"}</td>
                      <td className="p-4">{item.popular ? "Yes" : "No"}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(item.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Gallery Table */}
      {activeTab === "gallery" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Gallery</h2>
          <div className="mb-4 flex gap-2 flex-wrap">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  galleryFilter === cat.value ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setGalleryFilter(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGalleryImages.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-6 text-center text-gray-400">
                      No images available
                    </td>
                  </tr>
                ) : (
                  filteredGalleryImages.map((img) => (
                    <tr key={img.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{img.id}</td>
                      <td className="p-4">
                        <img
                          src={img.image_url}
                          alt={`Image ${img.id}`}
                          className="w-14 h-14 object-cover rounded-md shadow-sm"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=No+Image";
                            console.error(`Failed to load image: ${img.image_url}`);
                          }}
                        />
                      </td>
                      <td className="p-4">{galleryCategories.find((cat) => cat.value === img.category)?.label || img.category}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(img)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(img.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Chefs Table */}
      {activeTab === "chefs" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Chefs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Specialty</th>
                  <th className="p-4 text-left">Achievements</th>
                  <th className="p-4 text-left">Experience</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {chefs.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-6 text-center text-gray-400">
                      No chefs available
                    </td>
                  </tr>
                ) : (
                  chefs.map((chef) => (
                    <tr key={chef.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{chef.id}</td>
                      <td className="p-4">
                        {chef.image_url ? (
                          <img
                            src={chef.image_url}
                            alt={chef.name}
                            className="w-14 h-14 object-cover rounded-md shadow-sm"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150?text=No+Image";
                              console.error(`Failed to load image: ${chef.image_url}`);
                            }}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td className="p-4 font-medium">{chef.name}</td>
                      <td className="p-4">{chef.specialty || "N/A"}</td>
                      <td className="p-4">{chef.achievements || "N/A"}</td>
                      <td className="p-4">{chef.experience || "N/A"}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(chef)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(chef.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg transform scale-100 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {isEditing
                ? `Edit ${activeTab === "gallery" ? "Image" : activeTab === "chefs" ? "Chef" : "Menu Item"}`
                : `Add New ${activeTab === "gallery" ? "Image" : activeTab === "chefs" ? "Chef" : "Menu Item"}`}
            </h3>

            {activeTab === "menu_items" ? (
              <>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <select
                  name="sub_category_id"
                  value={formData.sub_category_id}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">Select Sub-Category (Optional)</option>
                  {subCategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <div className="relative mb-4">
                  <label className="block text-sm font-semibold mb-2">Price (Rs.)</label>
                  <div className="flex items-center">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">Rs.</span>
                    <input
                      type="number"
                      name="price"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full p-3 pl-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <textarea
                  name="description"
                  placeholder="Description (Optional)"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="text"
                  name="chef"
                  placeholder="Chef Name (Optional)"
                  value={formData.chef}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="popular"
                      checked={formData.popular}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm font-semibold">Mark as Popular</span>
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Image (Optional)</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              </>
            ) : activeTab === "gallery" ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e, true)}
                    className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    required={!isEditing}
                  />
                </div>
                <select
                  name="category"
                  value={imageData.category}
                  onChange={(e) => handleChange(e, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  {galleryCategories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Chef Name"
                  value={chefData.name}
                  onChange={(e) => handleChange(e, false, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="text"
                  name="specialty"
                  placeholder="Specialty"
                  value={chefData.specialty}
                  onChange={(e) => handleChange(e, false, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <textarea
                  name="achievements"
                  placeholder="Achievements (Optional)"
                  value={chefData.achievements}
                  onChange={(e) => handleChange(e, false, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <textarea
                  name="experience"
                  placeholder="Experience (Optional)"
                  value={chefData.experience}
                  onChange={(e) => handleChange(e, false, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Image (Optional)</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e, false, true)}
                    className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              </>
            )}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                }}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 rounded-full font-semibold text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-600 rounded-full font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;