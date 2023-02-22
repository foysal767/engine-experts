import Lottie from "lottie-react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import checkMark from "./checkMark.json";
import { Link } from "react-router-dom";

type pay = {
  servicePayment: any;
};

const CheckOutForm = ({ servicePayment }: pay) => {
  const [cardError, setCardError] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setprocessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const { price, _id, serviceName } = servicePayment;

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://engine-experts-server-phi.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTransactionId(data.id);
        setClientSecret(data.client_secret);
      });
  }, [price]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      const err = error.message;
      setCardError(err as string);
    } else {
      setCardError("");
    }

    setSuccess("");
    setprocessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "hriday",
            email: servicePayment?.userEmail,
            // price: servicePayment?.price,
          },
        },
      });

    if (confirmError) {
      const errr = confirmError.message;
      setCardError(errr as string);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // store payment info in the database

      const payment = {
        user: user?.email,
        price: price,
        transactionId: transactionId,
        id: _id,
        serviceName: serviceName,
        date: new Date().toLocaleDateString(),
      };

      fetch("https://engine-experts-server-phi.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed.");
          }
        });
    }
    setprocessing(false);
  };
  const disabled: boolean = !stripe || !clientSecret || processing;

  return (
    <>
      {!success ? (
        <>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button
              type="submit"
              className="text-black btn btn-primary bg-sky-600 btn-sm mt-4"
              disabled={disabled}
            >
              Pay
            </button>
          </form>
          <p className="text-red-500">{cardError}</p>
        </>
      ) : (
        <div className="w-full mx-auto">
          <Lottie className="w-2/12 mx-auto" animationData={checkMark} />
          <p className="text-green-500 font-bold">{success}</p>
          <p className="text-black mt-2">
            Txn ID:{" "}
            <span className="font-bold text-black">{transactionId}</span>
          </p>
          <Link to="/dashboard1/booking">
            <button className="btn bg-[#C01C2B] mt-4 rounded-full text-white">
              Go Back
            </button>
          </Link>
        </div>
      )}

      {/* {success && (
        
      )} */}
    </>
  );
};

export default CheckOutForm;
