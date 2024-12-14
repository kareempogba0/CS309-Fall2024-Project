const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./Product");
const Request = require('./request_model')

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
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

app.post("/addproducts", async (req, res) => {
  try {
    if (isNaN(req.body.price) || req.body.price <= 0) {
      return res.status(400).send("Price must be a positive number");
    }

    const exist = await Product.findOne({ id: req.body.id });
    if (exist) {
      return res.status(400).send("Product already exists");
    }
    const product = new Product({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
    });

    await product.save();
    res.send("Product added successfully");
  } catch (err) {
    res.status(500).send("Server error: " + err);
  }
});

app.get("/products/:category?", async (req, res) => {
  try {
    const category = req.params.category;
    if (!category) {
      const products = await Product.find();
      return res.json(products);
    }
    const products = await Product.find({ category: category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findOneAndDelete({ id: id });

    if (!deletedProduct) {
      return res.status(500).send("Product not found");
    }

    res.send("Product deleted successfully");
  } catch (err) {
    res.status(500).send("Server error: " + err);
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

try {
  app.listen(3000, () => {
      console.log(`Server is running on port ${3000}`);
  });
} catch (error) {
  console.error(`Failed to start the server: ${error.message}`);
}