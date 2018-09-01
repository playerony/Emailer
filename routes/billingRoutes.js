const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const { token, credits } = req.body;

    await stripe.charges.create({
      amount: credits * 100,
      currency: "usd",
      description: `$${credits} for ${credits} credits`,
      source: token.id
    });

    req.user.credits += Number(credits);
    const user = await req.user.save();

    res.send(user);
  });
};
