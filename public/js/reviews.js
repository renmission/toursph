import axios from 'axios';
import { showAlert } from './alerts';

export const createReview = async(rating, review) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `http://localhost:3000/api/v1/tours`,
            data: {
                rating,
                review
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Review successfully created.');
            location.reload();
        }
    } catch (error) {
        showAlert('error', error.response.data.message);
    }
}