import axios from 'axios';

export const loginUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
};

export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
};
