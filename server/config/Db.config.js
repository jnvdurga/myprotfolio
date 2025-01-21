const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)

const connection = mongoose.connection ;

connection.on('error',()=>{
         console.log('Error connecting to database')
})

connection.on("connected",()=>{
    console.log('connected to data base')
})


module.exports = connection ;

// another way to connect with mongodb data base 

// const connectDB = async()=>{
//     try{
//      const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URL}/my-web-portfolio`)

//      console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`)
//     }catch(error){
//         console.log("MONGODB connection error",error);
//         process.exit(1)
//     }
// }
//  module.exports = connectDB ;