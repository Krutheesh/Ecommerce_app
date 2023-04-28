import app from "./src/App.js";

 import mongoose from "mongoose";

 ( async() => {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
    console.log("sucessfully db connected")
   app.on('error', (err) => {
    console.error("error",err)
    throw err
   })
   app.listen(5000,() => {
    console.log("hello 5000")
   })
  }
  catch(err){
    console.log("error",err)
  }
  
 })()

 