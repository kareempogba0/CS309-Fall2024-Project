const express = require("express")
const mongoose = require('mongoose')
const Request = require('./model/request_model')
const mongouri = "mongodb+srv://kareempogba:euboV3iBpCrIyJMh@ourcluster.qaupx.mongodb.net/"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))



  app.get('/getStart', async (req, res) => {
    res.send('besm allah');
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




mongoose.set("strictQuery", false)
mongoose
.connect('mongodb+srv://kareempogba:euboV3iBpCrIyJMh@ourcluster.qaupx.mongodb.net/')
.then(() => {
    console.log('connected to MongoDB')
})

try {
    app.listen(3000, () => {
        console.log(`Server is running on port ${3000}`);
    });
} catch (error) {
    console.error(`Failed to start the server: ${error.message}`);
}
