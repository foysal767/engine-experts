import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


// interface Props {
//     initialCount: message;
//   }
const CheckOutForm = () => {
    const [cardError, setCardError] = useState<string>("");

    const stripe = useStripe();
    const elements = useElements();


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

    };


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
                <button type="submit" className='text-black btn btn-primary btn-sm' disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
        </>
    );
};

export default CheckOutForm;