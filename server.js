const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path=require('path');
// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
//static files
// app.use(express.static(path.join(__dirname,'./myPortfolio/dist')))
// Routes
const portfolioRoutes = require('./routes/portfolioRoute');
app.use('/api/v1/portfolio', portfolioRoutes);
// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname,'./myPortfolio/dist/index.html'))
// })
// Server Port
const PORT = process.env.PORT || 8080;

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server Running on PORT ${PORT}`);
});
