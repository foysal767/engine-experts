import React, { useEffect, useState, useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';




const CheckOutForm = () => {
    const [cardError, setCardError] = useState<string>("");
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setprocessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    // const {user} = useContext(AuthContext);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: 9900 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);


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
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            const err = error.message;
            setCardError(err as string);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setprocessing(true);


        // const confirmCardPayment = async (clientSecret: string, cardElement: any) => {
        //     const paymentIntent = await stripe.confirmCardPayment(clientSecret, {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 name: 'name',
        //                 email:'email',
        //             },
        //         },
        //     });
        //     const { paymentIntent: payment, error } = paymentIntent;
        //     return { payment, error };
        // const handlePayment = async () => {

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'patient',
                        email: 'rayonridu9@gmail.com'
                    },
                },
            },
        );

        if (confirmError) {
            const errr = confirmError.message;
            setCardError(errr as string);
            return;
        }
        if (paymentIntent.status === "succeeded") {

            // store payment info in the database

            const payment = {
                amount:'9900',
                transactionId
            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ payment })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed.');
                        setTransactionId(paymentIntent.id);
                    }
                })

        }
        setprocessing(false);



    };
    const disabled: boolean = !stripe || !clientSecret || processing;


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    className='text-black btn btn-primary btn-sm'
                    disabled={disabled}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>

            {
                success && <div>
                    <p className="text-green-500 font-bold">{success}</p>
                    <p className='text-black'>Your Transaction Id: <span className='font-bold text-black'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;