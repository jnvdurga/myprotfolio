const express = require('express')
require('dotenv').config()
const connectToDatabase =require('./config/Db.config.js')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const portfolioRoute = require('./routes/portfolioRoute')
app.use(cors({
  origin: 'http://localhost:5173/myportfolio', // Allow specific origin
  methods: 'GET,POST,PUT,DELETE',           // Allowed methods
  allowedHeaders: 'Content-Type,Authorization' // Allowed headers
}));

app.use(express.json())

app.use("/api/portfolio",portfolioRoute)

    app.listen(PORT,()=>{
       
        console.log(`server is running on localhost${PORT}`)
  })
