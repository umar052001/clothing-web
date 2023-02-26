require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51LVOw9EIfyt9ggQYJslK2mkVZdGUGMUJaoy5n2P4Lr7NEoIYw8cfrKKXHWEss9ntBhS9nP3ZYDnv3nnYHlTOvXXw00lVOF4B9j"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    alert("Error: ");
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
