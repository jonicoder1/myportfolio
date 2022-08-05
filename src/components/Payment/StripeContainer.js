import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import PaymentForm from "./PaymentForm";
import classes from "./Payment.module.css";

import testItem from "../Body/ForSale/images/for_sale_yes/Alfa_Network/IMG_2867-min.JPG";

const PUBLIC_KEY =
  "pk_live_51LCvTJKjUJAhtlOyrm2JUX6XUvKEKnzB0J5BbI87R8qXXgpW4eW6mmpDY3EyIqavwvloPOVPPMKiQdxNPDkbLq9M0053C3aseG";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  const [showItem, setShowItem] = useState(false);

  return (
    <>
      {showItem ? (
        <Elements stripe={stripeTestPromise}>
          <PaymentForm />
        </Elements>
      ) : (
        <div className={classes.container}>
          <h3>$10.00</h3> <img src={testItem} alt="Spatula" />
          <button onClick={() => setShowItem(true)} className={classes.button}>
            Purchase Spatula
          </button>
        </div>
      )}
    </>
  );
};

export default StripeContainer;
