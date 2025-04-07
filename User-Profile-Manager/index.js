const express = require("express");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();
app.use(express.json());

connectDB();

const insertUser = async () => {
  try {
    const user = new User({
      name: "ABC",
      email: "abc@mail.com",
      age: 20,
    });
    const result = await user.save();
    console.log("User inserted:", result);
  } catch (err) {
    console.error("Error inserting user:", err.message);
  }
};

const fetchUsers = async () => {
  try {
    const users = await User.find();
    console.log("All users:", users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
  }
};

app.listen(3000, async () => {
  console.log("Server running on http://localhost:3000");
  await insertUser();
  await fetchUsers();
});
