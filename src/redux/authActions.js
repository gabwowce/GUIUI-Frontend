import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
        const response = await axios.post('/api/auth/login.php', { email, password });
        if (response.data.status === 'success') {
            dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        } else {
            dispatch({ type: 'LOGIN_FAILURE', payload: response.data.message });
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response?.data?.message || "An error occurred" });
    }
};

export const register = (userData) => async (dispatch) => {
    dispatch({ type: 'REGISTER_REQUEST' });
    try {
        const response = await axios.post('/api/auth/register.php', userData);
        if (response.data.status === 'success') {
            dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
        } else {
            dispatch({ type: 'REGISTER_FAILURE', payload: response.data.message });
        }
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.response?.data?.message || "An error occurred" });
    }
};

export const logout = () => async (dispatch) => {
    dispatch({ type: 'LOGOUT_REQUEST' });
    try {
        await axios.post('/api/auth/logout.php');
        dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'LOGOUT_FAILURE', payload: error.message });
    }
};
