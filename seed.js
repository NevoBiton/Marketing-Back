// // seed.js
// // This script seeds the database with sample data.
// // This is for development purposes only and should not be used in production.

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const Product = require("./models/product.model");

// dotenv.config(); // Load environment variables

// // Sample data
// const products = [
//   {
    
//     name: "Smartphone",
//     price: 599.99,
//     quantity: 0,
//     category: "Electronics",
//   },
//   {

//     name: "Laptop",
//     price: 1299.99,
//     quantity: 50,
//     category: "Electronics",
//   },
//   {
    
//     name: "Smartwatch",
//     price: 199.99,
//     quantity: 200,
//     category: "Electronics",
//   },
//   {
   
//     name: "Bluetooth Speaker",
//     price: 49.99,
//     quantity: 0,
//     category: "Electronics",
//   },
//   {
   
//     name: "Tablet",
//     price: 299.99,
//     quantity: 20,
//     category: "Electronics",
//   },
//   {

//     name: "Gaming Console",
//     price: 399.99,
//     quantity: 19,
//     category: "Electronics",
//   },
//   {

//     name: "Digital Camera",
//     price: 499.99,
//     quantity: 50,
//     category: "Electronics",
//   },
//   {
    
//     name: "E-reader",
//     price: 129.99,
//     quantity: 0,
//     category: "Electronics",
//   },
//   {
//     name: "External Hard Drive",
//     price: 79.99,
//     quantity: 15,
//     category: "Electronics",
//   },
//   {
   
//     name: "Wireless Mouse",
//     price: 29.99,
//     quantity: 100,
//     category: "Accessories",
//   },
//   {    name: "Wireless Keyboard",
//     price: 49.99,
//     quantity: 200,
//     category: "Accessories",
//   },
//   {
//     name: "Gaming Headset",
//     price: 79.99,
//     quantity: 150,
//     category: "Accessories",
//   },
//   {
//     name: "USB-C Hub",
//     price: 24.99,
//     quantity: 300,
//     category: "Accessories",
//   },
//   {
//     name: "External Hard Drive 1TB",
//     price: 59.99,
//     quantity: 80,
//     category: "Storage",
//   },
//   {
//     name: "Laptop Stand",
//     price: 39.99,
//     quantity: 120,
//     category: "Accessories",
//   },
//   {
//     name: "Bluetooth Speaker",
//     price: 34.99,
//     quantity: 250,
//     category: "Audio",
//   },
//   {
//     name: "Wireless Charger",
//     price: 19.99,
//     quantity: 400,
//     category: "Accessories",
//   },
//   {
//     name: "Noise Cancelling Earbuds",
//     price: 49.99,
//     quantity: 300,
//     category: "Audio",
//   },
//   {
//     name: "Smartwatch",
//     price: 199.99,
//     quantity: 75,
//     category: "Wearable",
//   },
//   {
//     name: "Portable Power Bank",
//     price: 29.99,
//     quantity: 500,
//     category: "Accessories",
//   },
//   {
//     name: "Mechanical Keyboard",
//     price: 89.99,
//     quantity: 60,
//     category: "Accessories",
//   },
//   {
//     name: "4K Monitor",
//     price: 299.99,
//     quantity: 40,
//     category: "Displays",
//   },
//   {
//     name: "Webcam",
//     price: 59.99,
//     quantity: 180,
//     category: "Accessories",
//   },
//   {
//     name: "Ergonomic Chair",
//     price: 149.99,
//     quantity: 100,
//     category: "Furniture",
//   },
//   {
//     name: "Graphics Tablet",
//     price: 79.99,
//     quantity: 90,
//     category: "Accessories",
//   }
// ];

// // Insert sample data into the database
// async function seedDB() {
//   await connectDB(); // Connect to the database
//   try {
//     await Product.deleteMany({});
//     await Product.insertMany(products);
//     console.log("Database seeded");
//   } catch (err) {
//     console.error(err);
//   } finally {
//     mongoose.connection.close(); // Close the database connection
//   }
// }

// seedDB();


// seed.js
// This script seeds the database with sample data.
// This is for development purposes only and should not be used in production.

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");

const Product = require("./models/product.model");
const User = require("./models/user.model.js");

const SALT_ROUNDS = 10; // Number of rounds to generate salt. 10 is recommended value

dotenv.config(); // Load environment variables

const products = [
  {
    name: "Laptop",
    quantity: 50,
    price: 999.99,
    categories: ["electronics", "computers"],
  },
  {
    name: "Book",
    quantity: 0,
    price: 19.99,
    categories: ["books"],
  },
  {
    name: "Pen",
    quantity: 1000,
    price: 1.49,
    categories: ["office supplies"],
  },
  {
    name: "Desk",
    quantity: 0,
    price: 199.99,
    categories: ["furniture"],
  },
  {
    name: "Monitor",
    quantity: 30,
    price: 149.99,
    categories: ["electronics"],
  },
  {
    name: "Headphones",
    quantity: 100,
    price: 49.99,
    categories: ["electronics"],
  },
  {
    name: "Chair",
    quantity: 10,
    price: 79.99,
    categories: ["furniture"],
  },
  {
    name: "Notebook",
    quantity: 500,
    price: 4.99,
    categories: ["office supplies"],
  },
  {
    name: "Backpack",
    quantity: 25,
    price: 29.99,
    categories: ["bags"],
  },
  {
    name: "Tablet",
    quantity: 40,
    price: 199.99,
    categories: ["electronics"],
  },
  {
    name: "Printer",
    quantity: 15,
    price: 89.99,
    categories: ["electronics", "office supplies"],
  },
  {
    name: "Mouse",
    quantity: 300,
    price: 14.99,
    categories: ["electronics", "computers"],
  },
  {
    name: "Keyboard",
    quantity: 200,
    price: 29.99,
    categories: ["electronics", "computers"],
  },
  {
    name: "USB Drive",
    quantity: 150,
    price: 9.99,
    categories: ["electronics"],
  },
  {
    name: "Smartphone",
    quantity: 60,
    price: 699.99,
    categories: ["electronics"],
  },
  {
    name: "Camera",
    quantity: 25,
    price: 299.99,
    categories: ["electronics"],
  },
  {
    name: "Speakers",
    quantity: 80,
    price: 39.99,
    categories: ["electronics"],
  },
  {
    name: "Lamp",
    quantity: 200,
    price: 19.99,
    categories: ["furniture"],
  },
  {
    name: "Bookshelf",
    quantity: 10,
    price: 59.99,
    categories: ["furniture"],
  },
  {
    name: "Calculator",
    quantity: 250,
    price: 12.99,
    categories: ["office supplies"],
  },
  {
    name: "Scissors",
    quantity: 400,
    price: 2.99,
    categories: ["office supplies"],
  },
  {
    name: "Stapler",
    quantity: 500,
    price: 6.99,
    categories: ["office supplies"],
  },
  {
    name: "File Cabinet",
    quantity: 5,
    price: 129.99,
    categories: ["furniture"],
  },
  {
    name: "Whiteboard",
    quantity: 50,
    price: 49.99,
    categories: ["office supplies"],
  },
  {
    name: "Briefcase",
    quantity: 20,
    price: 39.99,
    categories: ["bags"],
  },
  {
    name: "Laptop Bag",
    quantity: 45,
    price: 24.99,
    categories: ["bags"],
  },
  {
    name: "Projector",
    quantity: 12,
    price: 399.99,
    categories: ["electronics"],
  },
  {
    name: "Router",
    quantity: 60,
    price: 79.99,
    categories: ["electronics"],
  },
  {
    name: "Modem",
    quantity: 40,
    price: 69.99,
    categories: ["electronics"],
  },
  {
    name: "Desk Organizer",
    quantity: 100,
    price: 14.99,
    categories: ["office supplies"],
  },
  {
    name: "Paper Shredder",
    quantity: 30,
    price: 89.99,
    categories: ["office supplies"],
  },
  {
    name: "Office Chair Mat",
    quantity: 25,
    price: 29.99,
    categories: ["furniture"],
  },
  {
    name: "Cushion",
    quantity: 50,
    price: 14.99,
    categories: ["furniture"],
  },
  {
    name: "Binder",
    quantity: 600,
    price: 3.99,
    categories: ["office supplies"],
  },
  {
    name: "Laptop Stand",
    quantity: 40,
    price: 29.99,
    categories: ["office supplies"],
  },
];

const users = [
  {
    username: "omer_mazig",
    password: "1234",
    firstName: "Omer",
    lastName: "Mazig",
  },
  {
    username: "baba_bubu",
    password: "5678",
    firstName: "Baba",
    lastName: "BuBu",
  },
];

async function seedDB() {
  try {
    await connectDB(); // Connect to the database
    await User.deleteMany({});
    await Product.deleteMany({});

    // const createdUsers = await User.insertMany(users);
    const createdUsers = await Promise.all(
      users.map(async u => {
        const hashedPassword = await bcrypt.hash(u.password, SALT_ROUNDS); // Hash password
        const user = new User({ ...u, password: hashedPassword }); // Create new user object
        await user.save(); // Save user to database
        return user; // Return the saved user object
      })
    );

    // Assign each product a user
    const productsWithUsers = products.map((product, index) => {
      return {
        ...product,
        user: createdUsers[index % createdUsers.length]._id,
      };
    });

    const createdProducts = await Product.insertMany(productsWithUsers);

    // Update users with the products they are selling
    for (let product of createdProducts) {
      await User.findByIdAndUpdate(
        product.user,
        { $push: { products: product._id } },
        { new: true, useFindAndModify: false }
      );
    }

    console.log("Database seeded");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

seedDB();
