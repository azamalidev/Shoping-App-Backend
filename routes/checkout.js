import express from "express";
const router = express.Router();
import checkoutModel from "../model/checkout.js";
import stripe from 'stripe';
const stripeInstance = stripe('sk_test_51NFKTXFEHgcA89oMmCuz2pCPzPm1yfX1zlELwTMrk5fwh03QEEebaXoAz57mZQMCXIlYhuUzXDmSqECraSmP6QgV00d42Ca35i');





// Add To card
router.post("/now", async (req, res) => {
  try {
    const checkout = await checkoutModel.create(req.body);
    res.send(checkout);
  } catch (error) {
    res.status(500).send(error);
  }
});






export default router;
