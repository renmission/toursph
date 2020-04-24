import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_VdpoG23KSB99YBKs1YzvrFhT00XWgKlEuZ');

export const bookTour = async tourId => {
    try {
        // get checkout session from API
        const session = await axios(
            `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
        );
        console.log(session);

        // create checkout and charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });

    } catch (error) {
        console.log(error);
        showAlert('error', error);
    }
}