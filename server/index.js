const express = require('express')
require('dotenv').config()
const connectToDatabase =require('./config/Db.config.js')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const portfolioRoute = require('./routes/portfolioRoute')
const corsOptions = {
  origin: 'https://shimmering-toffee-894daf.netlify.app', // Allow Netlify URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json())

app.use("/api/portfolio",portfolioRoute)

    app.listen(PORT,()=>{
       
        console.log(`server is running on localhost${PORT}`)
  })
