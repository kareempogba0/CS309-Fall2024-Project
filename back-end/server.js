const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Product");

const app = express();
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Iam listen in port 5000");
});
