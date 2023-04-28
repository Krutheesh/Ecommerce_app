import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name : {
    type : String,
    required: ["true", "please provide a product name"],
    trim: true,
    maxlength : [120, 'product name should not be max than 120 chars']
  },
  price : {
    type: Number,
    required:["true","please provide the product price"],
    maxlength:[5,"product price should not be more than 5 digits"]
  },
  description: {
    type:String
  },
  photos:[
    {
      secure_url:{
        type: String,
        required: true
      }
    }
  ],
  stocks:{
    type:Number,
    default:0
  }
  ,sold:{
    type:Number,
    default: 0
  },
  collectionId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection"
  }

},{
  timestamps: true
})


export default mongoose.model("Proudct", productSchema)