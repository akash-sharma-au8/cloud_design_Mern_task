const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// initialize express middleware
app.use(express.json({ extended: false }));


app.get("/", (req, res) => {
  res.send("Health OK");
});



app.listen(PORT, () => console.log(`Server is running on ${PORT}`));