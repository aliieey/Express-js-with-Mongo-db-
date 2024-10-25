const mongoose = require("mongoose");



// Connect to MongoDB
async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/SeebizDb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connection to MongoDB Successful!");
    } catch (err) {
        console.error("Error Connecting with MongoDB:", err);
    }
}

connectDb();





