
import mongoose from "mongoose";
const schema = mongoose.Schema({
  name: { type: String, required: true },
  discription: { type: String, required: true },
  price: {
    type: String, required: true
  },
  forSale: { type: Boolean, required: true },
  discount: { type: String, required: false },
  batchNumber: { type: String, required: false },
});

export default mongoose.model("product", schema);
