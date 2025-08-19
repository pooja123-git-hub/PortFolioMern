const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes (API)
const portfolioRoutes = require("./routes/portfolioRoute");
app.use("/api/v1/portfolio", portfolioRoutes);

// Serve React build (Vite generates "dist")
const __dirname1 = path.resolve();
const buildPath = path.join(__dirname1, "myPortfolio", "dist");
app.use(express.static(buildPath));

// API test route
app.get("/api", (req, res) => {
  res.json({
    message: "✅ Backend API Running"
  });
});

// Catch-all route → React Router handle
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});