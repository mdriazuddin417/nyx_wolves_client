export const increaseCount = (amount) => {
  return (dispatch) => {
    dispatch({ type: "increase", payload: amount });
  };
};

export const decreaseCount = (amount) => {
  return (dispatch) => {
    dispatch({ type: "decrease", payload: amount });
  };
};
