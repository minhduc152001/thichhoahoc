import express, { Application } from "express";
import CheckoutController from "../controllers/checkout.ctrl";

export default (app: Application) => {
  app.post(
    "/create-checkout-session",
    CheckoutController.createCheckoutSession
  );
  app.post("/webhooks", CheckoutController.webhooks);
};
