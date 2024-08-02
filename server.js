const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config();

const router = require('./router/auth-router')
const connectDb = require("./models/db")

// handle cors policy issue
const corsOptions = {
  origin:process.env.BASE_URL,
  method:"GET, POST,PUT,DELETE,PATCH,HEAD",
  Credential:true,
}
app.use(cors(corsOptions));

app.use(express.json())

app.use("/api/auth",router)

connectDb().then(()=>{

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})