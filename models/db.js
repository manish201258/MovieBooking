const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/mern-admin"
const URI = process.env.BASE_URL;

const connectDb = async()=>{
try {
   await mongoose.connect(URI)
   console.log("Connection successful")
} catch (error) {
    console.log("Connection failed")
    process.exit(0)
}
}

module.exports = connectDb