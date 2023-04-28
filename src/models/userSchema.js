import mongoose from "mangoose";
import authenticRoles from "../utils/authenticRoles.js"

const userSchema  = new mongoose.Schema({
  name: {
    type:String,
    required: ["true", "Name is required"],
    maxLength:[50,"Name must be less than 50 chars"]
  
  },
   email: {
    type:String,
    required: ["true","Email is required"]
   },
password: {
  type: String,
  required:['true', 'password is required'],
  minLength: [8, 'password must be at least 8 characters'],
  select:false
},
role:{
  type: String,
  enum: Object.values(authenticRoles),
  default: authenticRoles.USER
},
forgotPasswordToken: String,
forgotPasswordExpiry: Date
},{timestamps: true})

//Ecrypting the password before saving into db 

userSchema.pre("save", async function(next){
  if(!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})