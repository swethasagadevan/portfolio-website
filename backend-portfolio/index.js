require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Connection Caching Logic
let isConnected = false;
const connectDB = async () => {
    if (isConnected) return;
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = db.connections[0].readyState;
        console.log("DB connected");
    } catch (err) {
        console.error("DB connection error:", err);
    }
};

// 2. Define Schema & Model correctly (prevents re-registration errors)
const projectSchema = new mongoose.Schema({}, { strict: false });
const projectList = mongoose.models.Projects || mongoose.model("Projects", projectSchema, "projects");

// Middleware to ensure DB is connected before handling routes
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

app.post("/contactus", (req, res) => {
    console.log(req.body)
    if (req.body.name === "Swetha") {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.get("/getProjects", async (req, res) => {
    try {
        const data = await projectList.find();
        res.send(data);
    } catch (err) {
        res.status(500).send({ error: "Failed to fetch projects" });
    }
});

// IMPORTANT: Do NOT use app.listen() for Vercel production
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log("App started on port 3000"));
}

// Export the app for Vercel to use as a serverless function
module.exports = app;
