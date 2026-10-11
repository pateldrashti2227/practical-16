import React, { useState } from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: price,
      category: category,
      quantity: quantity,
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setPrice("");
    setCategory("");
    setQuantity("");
  }

  return (
    <div className="product-container">
      <h1>🛍️ Product Management</h1>
      <p className="subtitle">Add and manage your products</p>

      <div className="product-card">
        <h2>➕ Add New Product</h2>

        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label>Product Price (₹)</label>
          <input
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0.01"
            step="0.01"
            required
          />

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Accessories">Accessories</option>
            <option value="Other">Other</option>
          </select>

          <label>Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            step="1"
            required
          />

          <button type="submit">Add Product +</button>
        </form>
      </div>

      <div className="product-list">
        <h2>📦 Product List</h2>

        {products.length === 0 ? (
          <p className="empty-message">
            No products added yet. Add your first product!
          </p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-item" key={product.id}>
                <h3>{product.name}</h3>
                <p>
                  <strong>Price:</strong> ₹{product.price}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Quantity:</strong> {product.quantity}
                </p>
                <span className="success-badge">✓ Product Added</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductManagement;