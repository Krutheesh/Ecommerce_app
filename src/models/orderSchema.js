import mongoose from "mongoose";
const orderSchema = new mongoose.Schema( {

  product: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.objctId,
          ref: "Product"
        },
        count: Number,
        price: Number

      }
    ]

  },

  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    length:[10,"phone number should be 10 digits"]
  },
  amount:{
    type:Number,
    required: true
  },
  coupon : String,
  transactionId : String,
  status: {
    type : String,
    //  need to work here
  }
},{timestamps: true})

export default mongoose.model("Order",orderSchema)