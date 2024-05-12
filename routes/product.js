import express from "express";
const router = express.Router();
import productModel from "../model/product.js";
import validate from "../middelware/validate.js";
import schema from "../validation/product.validation.js";
//Create produvt
router.post(
  "/add",
  validate(schema.product),
  async (req, res) => {
    try {
      const product = await productModel.create(req.body);
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
// Get All products
router.get("/list",  async (req, res) => {
  try {
    const course = await productModel.find();
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});




//Update product
router.get("/:id",  async (req, res) => {
  try {
    const course = await productModel.findOne({_id:req.params.id});
    res.send({ status: "Success", staCode: 200, data: course });
  } catch (error) {
    res.status(500).send(error);
  }
});
//Delete course
router.delete(
  "/:id",
  
  validate(schema.params),
  async (req, res) => {
    try {
      const course = await productModel.findByIdAndDelete(req.params.id);
      res.send({ status: "Success", staCode: 200, data: course });
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export default router;
