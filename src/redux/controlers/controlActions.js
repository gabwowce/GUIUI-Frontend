
export const UPDATE_CONTROL = 'UPDATE_CONTROL';
export const REMOVE_CONTROL = 'REMOVE_CONTROL';

export const updateControl = (componentId, controlName, value) => {
  return {
    type: UPDATE_CONTROL,
    payload: { componentId, controlName, value },
  };
};

export const removeControl = (componentId, controlName) => ({
  type: REMOVE_CONTROL,
  payload: { componentId, controlName }
});