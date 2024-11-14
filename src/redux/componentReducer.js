const componentReducer = (state = { components: [], component: null }, action) => {
    switch (action.type) {
        case 'CREATE_COMPONENT_SUCCESS':
            return { ...state, component: action.payload };
        case 'GET_COMPONENT_SUCCESS':
            return { ...state, component: action.payload };
        case 'GET_ALL_COMPONENTS_SUCCESS':
            return { ...state, components: action.payload };
        case 'GET_COMPONENTS_BY_CATEGORY_SUCCESS':
            return { ...state, components: action.payload };
        case 'SEARCH_COMPONENTS_SUCCESS':
            return { ...state, components: action.payload };
        default:
            return state;
    }
};
