const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentroutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// DB Connection
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message || err);
    process.exit(1);
  });
