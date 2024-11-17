import axios from 'axios';


export const loginUser = (email, password) => async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
        const response = await axios.post(
            'http://localhost:8082/GUIUI/src/routes/apiRoutes.php?endpoint=auth/login', 
            { email, password }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true 
            }
        );

        if (response.data.status === 'success') {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.user, 
            });
        } else {
            dispatch({ type: 'LOGIN_FAILURE', payload: response.data.message });
        }

        return response;
        
    } catch (err) {
        console.error('Error during login:', err);

        const errorMessage = err.response?.data?.message || "An error occurred";
        const errorType = err.response?.data?.type || 'unknown';

        dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });

        return { status: 'error', message: errorMessage, type: errorType };
    }
};






export const registerUser = (email, username, password, repeatPassword) => async (dispatch) => {
    dispatch({ type: 'REGISTER_REQUEST' });
    try {
        const response = await axios.post(
            'http://localhost:8082/GUIUI/src/routes/apiRoutes.php?endpoint=auth/register', 
            { email,username, password, repeatPassword },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }
        );
        if (response.data.status === 'success') {
            dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
            return { status: 'success', message: response.data.message };
        } else {
            dispatch({ type: 'REGISTER_FAILURE', payload: response.data.message });
            return { status: 'error', message: response.data.message || 'Registration failed.' };
        }
    } catch (err) { // Use `err` instead of `error`
        dispatch({ type: 'REGISTER_FAILURE', payload: err.response?.data?.message || "An error occurred" });
        return { status: 'error', message: err.response?.data?.message || 'Registration failed.' };
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
