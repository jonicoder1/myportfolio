import React, { useState } from "react";
import classes from "./Payment.module.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkitautofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const message = (
    <div>
      <h2>You just bought a sweet spatula ! Congrats!</h2>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("https://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <fieldset className={classes.FormGroup}>
        <div className={classes.FormRow}>
          <CardElement options={CARD_OPTIONS}></CardElement>
        </div>
      </fieldset>
      <button className={classes.button}>Pay</button>
    </form>
  );

  return <div>{!success ? form : message}</div>;
};

export default PaymentForm;
