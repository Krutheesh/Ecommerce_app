import User from "../models/userSchema.js"



export const signUp = asyncHandler( async (req,res) => {
//getting data from the user 

const {name,email,password} = req.body;

if (name || email || password) {
  const error = new Error("User not found")
  error.status=404;
  throw error
}

const existingUser = await User.findOne({email})

if(existingUser){
const error = new Error("user already exists");
error.status= 404
throw error
}

const user = await User.create({
  name,
  email,
  password
})

const token = user.getJWTtoken()

user.password = undefined

//storing this token in users cookie
res.cookie("token",token,cookieOption)

res.status(200).json({
  success: true,
  token,
  user,
})

})



export const login = asyncHandler( async(req,res) => {
  const {email,password} = req.body
 if( email || password){
  const error = new Error("please fill all the details")
  error.status= 400
  throw error
 }
 
const user = User.findone({email}).select("+password")

if(!user){
  const error = new Error("inavalid credetials")
  error.status = 400
  throw error
}

const isPasswordMatched = await user.comparePassword(password)
if(isPasswordMatched){
  const token = user.getJWTtoken()
  user.password= undefined
  res.cookie("token",tokekn,cookieOption)
  return res.status(200).json({
    success: true,
    token,
    user
  })
}
const error = new Error ("password is incorrect")
error.status = 400
throw err
})





export const logout = asyncHandler( async (req,res) => {
  res.cookie("token",null,{
    expires: new Date(Date.now()) ,
    httpOnly: true
  })
  res.status(200).json({
    success:true,
    message:'Logged Out'
  })
})


export const 