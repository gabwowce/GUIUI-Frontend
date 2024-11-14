import axios from 'axios';

// Create a new component
export const createComponent = (componentData) => async (dispatch, getState) => {
    const { auth: { token } } = getState(); // get token from redux store

    try {
        const response = await axios.post('/api/component', componentData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch({ type: 'CREATE_COMPONENT_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'CREATE_COMPONENT_FAILURE', payload: error.message });
    }
};

// Get component by ID
export const getComponent = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/component/${id}`);
        dispatch({ type: 'GET_COMPONENT_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_COMPONENT_FAILURE', payload: error.message });
    }
};

// Get all components
export const getAllComponents = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/components');
        dispatch({ type: 'GET_ALL_COMPONENTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_ALL_COMPONENTS_FAILURE', payload: error.message });
    }
};

// Get components by category
export const getComponentsByCategory = (categoryId) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/components/category/${categoryId}`);
        dispatch({ type: 'GET_COMPONENTS_BY_CATEGORY_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_COMPONENTS_BY_CATEGORY_FAILURE', payload: error.message });
    }
};

// Search components
export const searchComponents = (searchParams) => async (dispatch) => {
    try {
        const response = await axios.get('/api/components/search', { params: searchParams });
        dispatch({ type: 'SEARCH_COMPONENTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'SEARCH_COMPONENTS_FAILURE', payload: error.message });
    }
};
