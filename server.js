const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const portfolioRoutes = require("./routes/portfolioRoute");
app.use("/api/v1/portfolio", portfolioRoutes);

// Static files (Vite build)
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "myPortfolio", "dist")));

// Root route
app.get("/", (req, res) => {
  res.send("✅ Backend + React App Running");
});

// Catch-all for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname1, "myPortfolio", "dist", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server Running on PORT ${PORT}`);
});