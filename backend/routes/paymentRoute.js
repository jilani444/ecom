const express = require("express");
const { processpayment, sendStripeApiKey } = require("../controller/paymentController");

const {isAuthenticatedUser} = require("../middlewares/auth")

const router = express.Router()

router.route("/payment/process").post(isAuthenticatedUser,processpayment)

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey)



module.exports = router;