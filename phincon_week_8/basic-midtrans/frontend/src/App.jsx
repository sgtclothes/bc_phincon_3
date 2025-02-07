import { useEffect, useState } from "react";
import { createSnapTransaction } from "./services/api";

const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
const snapUrl = import.meta.env.VITE_MIDTRANS_SNAP_URL;

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = snapUrl;
        script.setAttribute("data-client-key", clientKey);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = async () => {
        try {
            const orderId = new Date().getTime().toString() + String(new Date().getMilliseconds());
            console.log(orderId);
            const data = {
                transaction_details: {
                    order_id: orderId,
                    gross_amount: 50000,
                },
                customer_details: {
                    first_name: "TEST",
                    last_name: "MIDTRANSER",
                    email: "test@midtrans.com",
                    phone: "+628123456",
                },
                item_details: [
                    {
                        id: 4,
                        price: 10000,
                        quantity: 2,
                        name: "Handheld Game Console",
                    },
                    {
                        id: 5,
                        price: 10000,
                        quantity: 3,
                        name: "Handheld Game Console 2",
                    },
                ],
            };
            const response = await createSnapTransaction(data);
            console.log(response);
            setToken(response.data.token);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (token) {
            window.snap.pay(token, {
                onSuccess: function (result) {
                    console.log(result);
                },
                onPending: function (result) {
                    console.log(result);
                },
                onError: function (result) {
                    console.log(result);
                },
                onClose: function () {
                    console.log("Customer closed the popup without finishing the payment");
                },
            });
        }
    }, [token]);

    return (
        <>
            <h1>Midtrans Checkout Simulation</h1>
            <h3>Please click the button below</h3>
            <button onClick={handlePayment}>Pay</button>
        </>
    );
}

export default App;
