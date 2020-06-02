export const createAddValue = (counter) => {
  return {
    type: 'ADD_VALUE',
    payload: {
      counter,
    },
  };
};
