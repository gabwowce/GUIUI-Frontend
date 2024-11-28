
export const UPDATE_CONTROL = 'UPDATE_CONTROL';

export const updateControl = (componentId, controlName, value) => {
  return {
    type: UPDATE_CONTROL,
    payload: { componentId, controlName, value },
  };
};