const express = require("express");
const connectDB = require("./db");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
