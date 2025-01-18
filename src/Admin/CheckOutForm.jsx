import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { FaRegPaperPlane } from "react-icons/fa";
import useSecure from "../Hook/useSecure";
import { useNavigate } from "react-router-dom"; // For redirection after payment
import toast from "react-hot-toast";

const CheckoutForm = ({ employee, setOpenModal, refetch }) => {
  const [employeeSecret, setEmployeeSecret] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const date = new Date();

  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    if (employee?._id) {
      getPaymentIntent();
    }
  }, [employee?._id]);

  const secureAxios = useSecure();

  const getPaymentIntent = async () => {
    setLoading(true);
    try {
      const { data } = await secureAxios.post(`/create-payment-intent`, {
        employeeId: employee?._id,
      });
      setEmployeeSecret(data.clientSecret); // Set the client secret correctly
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create payment intent. Please try again.");
      setLoading(false);
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on submit

    if (!stripe || !elements || loading) {
      return; // Disable form submit if Stripe is not ready or still loading
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    setLoading(true); // Start loading

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("[Error]", error);
      alert("Error while creating payment method. Please try again.");
      setLoading(false); // Stop loading
      return;
    }

    const { error: paymentError, paymentIntent } =
      await stripe.confirmCardPayment(employeeSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: employee?.employee?.name,
            email: employee?.employee?.email,
          },
        },
      });

    

    if (paymentIntent.status === "succeeded") {
      const { data } = await secureAxios.post(`/payments`, {
        employee,
        date,
        tan_id: paymentIntent.id,
        status: "paid",
      });
      console.log(data);
      
      refetch();
      toast.success("SuccessFully Payment Done");
      setLoading(false);
      setOpenModal(false);
    }

    
  };

  if (!employeeSecret) {
    return <div>Loading...</div>; // Show loading state until client secret is available
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        id="card"
        className="py-4 px-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        disabled={loading || !stripe}
        className="flex justify-center mt-6 items-center gap-2 text-lg font-bold bg-primary text-white py-1 px-5 rounded-lg"
      >
        <FaRegPaperPlane />{" "}
        {loading ? "Processing..." : `Pay ${employee?.employee?.salary}$`}
      </button>
    </form>
  );
};

export default CheckoutForm;
