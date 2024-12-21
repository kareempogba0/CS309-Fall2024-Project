const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./Product");
const Request = require('./request_model')
const VisaCard = require('./VisaCard')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const User = require('./user.model')

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Adjust origin as needed
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
      return res.sendStatus(200); // Respond OK to preflight
  }
  next();
});

app.use(cors({
    origin: "http://localhost:3000", // Frontend URL
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
}));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://kareempogba:euboV3iBpCrIyJMh@ourcluster.qaupx.mongodb.net/labtopDB?retryWrites=true&w=majority")

  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

  app.post("/addproduct", async (req, res) => {
    try {
      console.log("Request to add product:", req.body); // Debugging log
  
      if (isNaN(req.body.price) || req.body.price <= 0) {
        return res.status(400).send("Price must be a positive number");
      }
  
      const exist = await Product.findOne({ id: req.body.id });
      if (exist) {
        return res.status(400).send("Product already exists");
      }
  
      const product = new Product(req.body);
      await product.save();
  
      res.status(200).send("Product added successfully");
    } catch (err) {
      res.status(500).send("Server error: " + err.message);
    }
  });
  

app.get("/products/:category?", async (req, res) => {
  console.log("Received request for /products");
  try {
    const category = req.params.category;
    if (!category) {
      const products = await Product.find();
      console.log("Fetched products:", products);
      return res.json(products);
    }
    const products = await Product.find({ category: category });
    console.log(`Fetched products for category ${category}:`, products);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// app.get("/product", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.put("/updateproduct/:id", async (req, res) => {
  try {
    if (isNaN(req.body.price) || req.body.price <= 0) {
      return res.status(400).send("Price must be a positive number");
    }
    const updatedProduct = await Product.findOneAndUpdate(
      { id: req.params.id },
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        rating: req.body.rating,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(500).send("Product not found");
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/deleteproduct/:id", async (req, res) => {
  const { id } = req.params; // Ensure 'id' is retrieved from params
  try {
      const deletedProduct = await Product.findOneAndDelete({ id: id });
      if (!deletedProduct) {
          return res.status(404).send("Product not found");
      }
      res.send("Product deleted successfully");
  } catch (err) {
      console.error("Error deleting product:", err);
      res.status(500).send("Server error: " + err.message);
  }
});

app.get("/request/:id", async (req, res) => {
    const id = req.params.id; 
    try {
        const getRequest = await Request.findById(id); 
        if (!getRequest) {
            return res.status(404).send({ message: `Request with id ${id} not found` });
        }

        res.status(200).send(getRequest);
    } catch (error) {
        res.status(500).send({ message: `Error retrieving request: ${error.message}` });
    }
});

app.get("/requests", async (req, res) => {
    try {
        const requests = await Request.find(); 
        res.status(200).json(requests); 
    } catch (error) {
        res.status(500).send({ message: `Error retrieving requests: ${error.message}` });
    }
});

app.post('/request', async (req, res) => {
    const { Name, Address, Email, phoneNumber } = req.body;
    try {
        const request = new Request({ Name, Address, Email, phoneNumber });
        const savedRequest = await request.save(); 
        const id = savedRequest._id;
        res.status(201).send(`Request with name "${Name}" added successfully. Your request number is "${id}"`);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});



app.delete("/request/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRequest = await Request.findByIdAndDelete(id);
        if (!deletedRequest) {
            return res.status(404).send({ message: "Request not found" });
        }
        res.status(200).send({ message: `Request with id ${id} deleted successfully` });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.put("/request/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedRequest = await Request.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRequest) {
            return res.status(404).send({ message: "Request not found" });
        }
        res.status(200).send(updatedRequest);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.post('/addVisaCard', async (req, res) => {
  const { Name, CardNumber, CVV } = req.body;
  try {
      const visaCard = new VisaCard({ Name, CardNumber, CVV });
      const savedVisaCard = await visaCard.save();
      res.status(200).send(savedVisaCard);
  } catch (error) {
      res.status(400).send({ message: error.message });
  }
});

app.get("/visaCards", async (req, res) => {
  try {
      const visaCards = await VisaCard.find();
      res.status(200).json(visaCards);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.delete("/deleteVisaCard/:id", async (req, res) => {
  const id = req.params.id; 

  try {
      const deletedVisaCard = await VisaCard.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });

      if (!deletedVisaCard) {
          return res.status(404).send("VisaCard not found");
      }
      res.status(200).send("VisaCard deleted successfully");
  } catch (err) {
      console.error("Error deleting VisaCard:", err);
      res.status(500).send("Server error: " + err.message);
  }
});

app.put("/updateVisaCard/:id", async (req, res) => {
  const id = req.params.id; 
  try {
      const updatedVisaCard = await VisaCard.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedVisaCard) {
          return res.status(404).send("VisaCard not found");
      }
      res.status(200).send(updatedVisaCard);
  } catch (err) {
      res.status(500).send("Server error: " + err.message);
  }
});
app.get('/users', async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
});

app.get('/user/:id', async (req, res) => {
  
  try {
      // req id 
      const id = req.params.id;
      // find by id in users 
      const user = await User.findById(id);
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
});

app.post('/adduser', async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
      return res.status(400).send('Full Name, Email, and Password are required');
  }

  try {
      // Check if user already exists
      if (await User.findOne({ email })) {
          return res.status(400).send(`User with email "${email}" already exists`);
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = new User({
          name,
          email,
          password: hashedPassword,
          phoneNumber,
      });

      await user.save();
      res.status(200).send('User added successfully');
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.delete('/user/:id', async (req, res) => {

  // req id 
  const id = req.params.id;
  // delet by id in users 
 
  try {
      const {id} = req.params;
      const user = await User.findByIdAndDelete(id);
      if(!user){
          return res.status(404).json({message: `cannot find any user with ID ${id}`})
      }
      res.status(200).json(user);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
});

app.put("/user/:id", async (req, res) => {
  try{
      const { id } = req.params;
      const updates = req.body;

      //find user by ID and update
      const user = await User.findByIdAndUpdate(id, updates, { new: true });
      if(!user){
          return res.status(404).json({ message: `User with Id ${id} not found` });
      }

      res.status(200).json({ message: "User updated successfully", user });
  } catch(error){
      res.status(500).json({ message: error.message });
  }
});

try {
  app.listen(5000, () => {
      console.log(`Server is running on port ${5000}`);
  });
} catch (error) {
  console.error(`Failed to start the server: ${error.message}`);
}