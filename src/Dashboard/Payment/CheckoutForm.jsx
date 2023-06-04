import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
    const [cardError, setcardError] = useState('');
    const stripe = useStripe();
    const { user } = useAuth();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    // console.log(clientSecret);
    // console.log(stripe);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    console.log(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log('Card', card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setcardError(error.message)
            console.log('[error]', error);
        } else {
            setcardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.name || 'anonymous',
                },
            },
        },);
        if (confirmError) {
            console.log(confirmError);
        }
        console.log("payment intent", paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // 
                    }
                })
        }
    }


    return (
        <div className="text-center">
            <form className="w-3/4 mx-auto p-4" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
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

                <button disabled={!stripe || !clientSecret || processing} className="btn btn-sm mt-6" type="submit" >
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500 text-xl">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500 text-xl">Transaction complete with transaction id: <span className="text-green-500 text-xl font-semibold">{transactionId}</span> </p>
            }
        </div>
    );
};

export default CheckoutForm;