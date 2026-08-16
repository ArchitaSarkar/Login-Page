const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors({
    origin: 'https://architasarkar.github.io/Login-Page/', // Your exact GitHub Pages URL
    credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Login API is running"
  });
});

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});