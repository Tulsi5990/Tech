const catchAsyncError = require("../middleware/catchAsyncError");

// In your paymentController.js

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.processPayment = catchAsyncError(async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "TechTrove",
      },
    });

    res.status(200).json({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


exports.sendStripeApiKey = catchAsyncError(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  console.log('Stripe API Key:', process.env.STRIPE_API_KEY);
});
