import mongoose from "mongoose";
const schema = mongoose.Schema({
  productId: { type: String, required: true },
  paymentId: { type: String, required: true },
  createdAt: { type: String,required: true,},
  paymentType: { type: String, required: true },
  billDtail: { type: Object, required: true },
  cardDatail: { type: Object, required: true },


});

export default mongoose.model("checkout", schema);
