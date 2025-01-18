import React, { useState } from 'react';
import { Button, Modal, TextInput, Label } from "flowbite-react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';
const stripePromise=loadStripe(import.meta.env.VITE_PUB)
const PaymentModal = ({ openModal, setOpenModal, employee,refetch }) => {
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentAmount) {
      alert("Please enter a valid payment amount!");
      return;
    }

    const paymentData = {
      employeeId: employee._id,
      employeeName: employee?.employee?.name,
      email: employee?.employee?.email,
      paymentAmount: employee?.employee?.salary,
      month: employee.month,
      year: employee.year,
    };

    console.log("Payment Data Submitted:", paymentData);

    // এখানে API কল করুন পেমেন্ট ডেটা সংরক্ষণের জন্য
    // Example:
    // fetch('/api/payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(paymentData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     alert("Payment Successful!");
    //   })
    //   .catch(error => {
    //     console.error("Error:", error);
    //   });

    alert("Payment processed successfully!");
    setOpenModal(false);
  };

  return (
    <div>
      <Modal className='bg-g overflow-x-hidden' dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> <div className="">
            <h1 className='text-lg font-bold flex items-center gap-2'> Payment for {employee?.employee?.name} <div className="badge badge-secondary badge-outline">{employee?.employee?.role}</div> </h1> 
            <p className='text-sm'>{employee?.employee?.email}</p>
            
          </div></Modal.Header>
        <Modal.Body>  

          
      

            {/* CheckOut Form */}

            <Elements stripe={stripePromise}>
                {/* form */}
                <CheckoutForm employee={employee} setOpenModal={setOpenModal} refetch={refetch}></CheckoutForm>

            </Elements>



            
          
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PaymentModal;
