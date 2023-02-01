import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripeKey = process.env.REACT_APP_STRIPE_PK;
// console.log(stripeKey);

const stripePromise = loadStripe(`${stripeKey}` as string);
console.log('stripe', stripePromise);



const Payment  = () => {


    const { data: services = [], isLoading } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await fetch(
                "https://engine-experts-server-phi.vercel.app/services"
            );
            const data = await res.json();
            return data.data;
        },
    });
    if (isLoading) {
        return (
            <div className="grid place-items-center w-full h-screen">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <div className='my-20'>
            <h1 className='text-4xl text-black font-bold'>Payment {services?.name}</h1>
            <div className='w-96 mx-auto my-6 border p-7 '>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;