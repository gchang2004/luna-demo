// This is your test secret API key.
require('dotenv').config({ path: './.env' });

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

//const YOUR_DOMAIN = process.env.SERVER_URL;
const YOUR_DOMAIN = "http://localhost:3000/luna-demo";

app.post('/create-checkout-session', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/cancel`,
      });
  
      res.json({ url: session.url });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Failed to create checkout session' });
    }
  });  

app.listen(3000, () => console.log('Running on port 3000'));