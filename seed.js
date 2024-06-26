// seed.js
// This script seeds the database with sample data.
// This is for development purposes only and should not be used in production.

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/product.model");

dotenv.config(); // Load environment variables

// Sample data
const products = [
  {
    
    name: "Smartphone",
    price: 599.99,
    quantity: 0,
    category: "Electronics",
  },
  {

    name: "Laptop",
    price: 1299.99,
    quantity: 50,
    category: "Electronics",
  },
  {
    
    name: "Smartwatch",
    price: 199.99,
    quantity: 200,
    category: "Electronics",
  },
  {
   
    name: "Bluetooth Speaker",
    price: 49.99,
    quantity: 0,
    category: "Electronics",
  },
  {
   
    name: "Tablet",
    price: 299.99,
    quantity: 20,
    category: "Electronics",
  },
  {

    name: "Gaming Console",
    price: 399.99,
    quantity: 19,
    category: "Electronics",
  },
  {

    name: "Digital Camera",
    price: 499.99,
    quantity: 50,
    category: "Electronics",
  },
  {
    
    name: "E-reader",
    price: 129.99,
    quantity: 0,
    category: "Electronics",
  },
  {
    name: "External Hard Drive",
    price: 79.99,
    quantity: 15,
    category: "Electronics",
  },
  {
   
    name: "Wireless Mouse",
    price: 29.99,
    quantity: 100,
    category: "Accessories",
  },
  {    name: "Wireless Keyboard",
    price: 49.99,
    quantity: 200,
    category: "Accessories",
  },
  {
    name: "Gaming Headset",
    price: 79.99,
    quantity: 150,
    category: "Accessories",
  },
  {
    name: "USB-C Hub",
    price: 24.99,
    quantity: 300,
    category: "Accessories",
  },
  {
    name: "External Hard Drive 1TB",
    price: 59.99,
    quantity: 80,
    category: "Storage",
  },
  {
    name: "Laptop Stand",
    price: 39.99,
    quantity: 120,
    category: "Accessories",
  },
  {
    name: "Bluetooth Speaker",
    price: 34.99,
    quantity: 250,
    category: "Audio",
  },
  {
    name: "Wireless Charger",
    price: 19.99,
    quantity: 400,
    category: "Accessories",
  },
  {
    name: "Noise Cancelling Earbuds",
    price: 49.99,
    quantity: 300,
    category: "Audio",
  },
  {
    name: "Smartwatch",
    price: 199.99,
    quantity: 75,
    category: "Wearable",
  },
  {
    name: "Portable Power Bank",
    price: 29.99,
    quantity: 500,
    category: "Accessories",
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 60,
    category: "Accessories",
  },
  {
    name: "4K Monitor",
    price: 299.99,
    quantity: 40,
    category: "Displays",
  },
  {
    name: "Webcam",
    price: 59.99,
    quantity: 180,
    category: "Accessories",
  },
  {
    name: "Ergonomic Chair",
    price: 149.99,
    quantity: 100,
    category: "Furniture",
  },
  {
    name: "Graphics Tablet",
    price: 79.99,
    quantity: 90,
    category: "Accessories",
  }
];

// Insert sample data into the database
async function seedDB() {
  await connectDB(); // Connect to the database
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

seedDB();
